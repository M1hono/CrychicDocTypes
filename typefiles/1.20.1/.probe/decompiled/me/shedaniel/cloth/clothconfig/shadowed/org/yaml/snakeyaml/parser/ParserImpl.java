package me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.parser;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.DumperOptions;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.error.Mark;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.error.YAMLException;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.AliasEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.DocumentEndEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.DocumentStartEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.Event;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.ImplicitTuple;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.MappingEndEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.MappingStartEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.ScalarEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.SequenceEndEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.SequenceStartEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.StreamEndEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.events.StreamStartEvent;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.reader.StreamReader;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.scanner.Scanner;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.scanner.ScannerImpl;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.AliasToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.AnchorToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.BlockEntryToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.DirectiveToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.ScalarToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.StreamEndToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.StreamStartToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.TagToken;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.TagTuple;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.tokens.Token;
import me.shedaniel.cloth.clothconfig.shadowed.org.yaml.snakeyaml.util.ArrayStack;

public class ParserImpl implements Parser {

    private static final Map<String, String> DEFAULT_TAGS = new HashMap();

    protected final Scanner scanner;

    private Event currentEvent;

    private final ArrayStack<Production> states;

    private final ArrayStack<Mark> marks;

    private Production state;

    private VersionTagsTuple directives;

    public ParserImpl(StreamReader reader) {
        this(new ScannerImpl(reader));
    }

    public ParserImpl(Scanner scanner) {
        this.scanner = scanner;
        this.currentEvent = null;
        this.directives = new VersionTagsTuple(null, new HashMap(DEFAULT_TAGS));
        this.states = new ArrayStack<>(100);
        this.marks = new ArrayStack<>(10);
        this.state = new ParserImpl.ParseStreamStart();
    }

    @Override
    public boolean checkEvent(Event.ID choice) {
        this.peekEvent();
        return this.currentEvent != null && this.currentEvent.is(choice);
    }

    @Override
    public Event peekEvent() {
        if (this.currentEvent == null && this.state != null) {
            this.currentEvent = this.state.produce();
        }
        return this.currentEvent;
    }

    @Override
    public Event getEvent() {
        this.peekEvent();
        Event value = this.currentEvent;
        this.currentEvent = null;
        return value;
    }

    private VersionTagsTuple processDirectives() {
        DumperOptions.Version yamlVersion = null;
        HashMap<String, String> tagHandles = new HashMap();
        while (this.scanner.checkToken(Token.ID.Directive)) {
            DirectiveToken token = (DirectiveToken) this.scanner.getToken();
            if (token.getName().equals("YAML")) {
                if (yamlVersion != null) {
                    throw new ParserException(null, null, "found duplicate YAML directive", token.getStartMark());
                }
                List<Integer> value = token.getValue();
                Integer major = (Integer) value.get(0);
                if (major != 1) {
                    throw new ParserException(null, null, "found incompatible YAML document (version 1.* is required)", token.getStartMark());
                }
                Integer minor = (Integer) value.get(1);
                switch(minor) {
                    case 0:
                        yamlVersion = DumperOptions.Version.V1_0;
                        break;
                    default:
                        yamlVersion = DumperOptions.Version.V1_1;
                }
            } else if (token.getName().equals("TAG")) {
                List<String> value = token.getValue();
                String handle = (String) value.get(0);
                String prefix = (String) value.get(1);
                if (tagHandles.containsKey(handle)) {
                    throw new ParserException(null, null, "duplicate tag handle " + handle, token.getStartMark());
                }
                tagHandles.put(handle, prefix);
            }
        }
        if (yamlVersion != null || !tagHandles.isEmpty()) {
            for (String key : DEFAULT_TAGS.keySet()) {
                if (!tagHandles.containsKey(key)) {
                    tagHandles.put(key, DEFAULT_TAGS.get(key));
                }
            }
            this.directives = new VersionTagsTuple(yamlVersion, tagHandles);
        }
        return this.directives;
    }

    private Event parseFlowNode() {
        return this.parseNode(false, false);
    }

    private Event parseBlockNodeOrIndentlessSequence() {
        return this.parseNode(true, true);
    }

    private Event parseNode(boolean block, boolean indentlessSequence) {
        Mark startMark = null;
        Mark endMark = null;
        Mark tagMark = null;
        Event event;
        if (this.scanner.checkToken(Token.ID.Alias)) {
            AliasToken token = (AliasToken) this.scanner.getToken();
            event = new AliasEvent(token.getValue(), token.getStartMark(), token.getEndMark());
            this.state = this.states.pop();
        } else {
            String anchor = null;
            TagTuple tagTokenTag = null;
            if (this.scanner.checkToken(Token.ID.Anchor)) {
                AnchorToken token = (AnchorToken) this.scanner.getToken();
                startMark = token.getStartMark();
                endMark = token.getEndMark();
                anchor = token.getValue();
                if (this.scanner.checkToken(Token.ID.Tag)) {
                    TagToken tagToken = (TagToken) this.scanner.getToken();
                    tagMark = tagToken.getStartMark();
                    endMark = tagToken.getEndMark();
                    tagTokenTag = tagToken.getValue();
                }
            } else if (this.scanner.checkToken(Token.ID.Tag)) {
                TagToken tagToken = (TagToken) this.scanner.getToken();
                startMark = tagToken.getStartMark();
                tagMark = startMark;
                endMark = tagToken.getEndMark();
                tagTokenTag = tagToken.getValue();
                if (this.scanner.checkToken(Token.ID.Anchor)) {
                    AnchorToken token = (AnchorToken) this.scanner.getToken();
                    endMark = token.getEndMark();
                    anchor = token.getValue();
                }
            }
            String tag = null;
            if (tagTokenTag != null) {
                String handle = tagTokenTag.getHandle();
                String suffix = tagTokenTag.getSuffix();
                if (handle != null) {
                    if (!this.directives.getTags().containsKey(handle)) {
                        throw new ParserException("while parsing a node", startMark, "found undefined tag handle " + handle, tagMark);
                    }
                    tag = (String) this.directives.getTags().get(handle) + suffix;
                } else {
                    tag = suffix;
                }
            }
            if (startMark == null) {
                startMark = this.scanner.peekToken().getStartMark();
                endMark = startMark;
            }
            event = null;
            boolean implicit = tag == null || tag.equals("!");
            if (indentlessSequence && this.scanner.checkToken(Token.ID.BlockEntry)) {
                endMark = this.scanner.peekToken().getEndMark();
                event = new SequenceStartEvent(anchor, tag, implicit, startMark, endMark, DumperOptions.FlowStyle.BLOCK);
                this.state = new ParserImpl.ParseIndentlessSequenceEntry();
            } else if (this.scanner.checkToken(Token.ID.Scalar)) {
                ScalarToken token = (ScalarToken) this.scanner.getToken();
                endMark = token.getEndMark();
                ImplicitTuple implicitValues;
                if ((!token.getPlain() || tag != null) && !"!".equals(tag)) {
                    if (tag == null) {
                        implicitValues = new ImplicitTuple(false, true);
                    } else {
                        implicitValues = new ImplicitTuple(false, false);
                    }
                } else {
                    implicitValues = new ImplicitTuple(true, false);
                }
                event = new ScalarEvent(anchor, tag, implicitValues, token.getValue(), startMark, endMark, token.getStyle());
                this.state = this.states.pop();
            } else if (this.scanner.checkToken(Token.ID.FlowSequenceStart)) {
                endMark = this.scanner.peekToken().getEndMark();
                event = new SequenceStartEvent(anchor, tag, implicit, startMark, endMark, DumperOptions.FlowStyle.FLOW);
                this.state = new ParserImpl.ParseFlowSequenceFirstEntry();
            } else if (this.scanner.checkToken(Token.ID.FlowMappingStart)) {
                endMark = this.scanner.peekToken().getEndMark();
                event = new MappingStartEvent(anchor, tag, implicit, startMark, endMark, DumperOptions.FlowStyle.FLOW);
                this.state = new ParserImpl.ParseFlowMappingFirstKey();
            } else if (block && this.scanner.checkToken(Token.ID.BlockSequenceStart)) {
                endMark = this.scanner.peekToken().getStartMark();
                event = new SequenceStartEvent(anchor, tag, implicit, startMark, endMark, DumperOptions.FlowStyle.BLOCK);
                this.state = new ParserImpl.ParseBlockSequenceFirstEntry();
            } else if (block && this.scanner.checkToken(Token.ID.BlockMappingStart)) {
                endMark = this.scanner.peekToken().getStartMark();
                event = new MappingStartEvent(anchor, tag, implicit, startMark, endMark, DumperOptions.FlowStyle.BLOCK);
                this.state = new ParserImpl.ParseBlockMappingFirstKey();
            } else {
                if (anchor == null && tag == null) {
                    String node;
                    if (block) {
                        node = "block";
                    } else {
                        node = "flow";
                    }
                    Token token = this.scanner.peekToken();
                    throw new ParserException("while parsing a " + node + " node", startMark, "expected the node content, but found '" + token.getTokenId() + "'", token.getStartMark());
                }
                event = new ScalarEvent(anchor, tag, new ImplicitTuple(implicit, false), "", startMark, endMark, DumperOptions.ScalarStyle.PLAIN);
                this.state = this.states.pop();
            }
        }
        return event;
    }

    private Event processEmptyScalar(Mark mark) {
        return new ScalarEvent(null, null, new ImplicitTuple(true, false), "", mark, mark, DumperOptions.ScalarStyle.PLAIN);
    }

    static {
        DEFAULT_TAGS.put("!", "!");
        DEFAULT_TAGS.put("!!", "tag:yaml.org,2002:");
    }

    private class ParseBlockMappingFirstKey implements Production {

        private ParseBlockMappingFirstKey() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.getToken();
            ParserImpl.this.marks.push(token.getStartMark());
            return ParserImpl.this.new ParseBlockMappingKey().produce();
        }
    }

    private class ParseBlockMappingKey implements Production {

        private ParseBlockMappingKey() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.Key)) {
                Token token = ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.Key, Token.ID.Value, Token.ID.BlockEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseBlockMappingValue());
                    return ParserImpl.this.parseBlockNodeOrIndentlessSequence();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseBlockMappingValue();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else if (!ParserImpl.this.scanner.checkToken(Token.ID.BlockEnd)) {
                Token token = ParserImpl.this.scanner.peekToken();
                throw new ParserException("while parsing a block mapping", ParserImpl.this.marks.pop(), "expected <block end>, but found '" + token.getTokenId() + "'", token.getStartMark());
            } else {
                Token token = ParserImpl.this.scanner.getToken();
                Event event = new MappingEndEvent(token.getStartMark(), token.getEndMark());
                ParserImpl.this.state = ParserImpl.this.states.pop();
                ParserImpl.this.marks.pop();
                return event;
            }
        }
    }

    private class ParseBlockMappingValue implements Production {

        private ParseBlockMappingValue() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.Value)) {
                Token token = ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.Key, Token.ID.Value, Token.ID.BlockEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseBlockMappingKey());
                    return ParserImpl.this.parseBlockNodeOrIndentlessSequence();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseBlockMappingKey();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else {
                ParserImpl.this.state = ParserImpl.this.new ParseBlockMappingKey();
                Token token = ParserImpl.this.scanner.peekToken();
                return ParserImpl.this.processEmptyScalar(token.getStartMark());
            }
        }
    }

    private class ParseBlockNode implements Production {

        private ParseBlockNode() {
        }

        @Override
        public Event produce() {
            return ParserImpl.this.parseNode(true, false);
        }
    }

    private class ParseBlockSequenceEntry implements Production {

        private ParseBlockSequenceEntry() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.BlockEntry)) {
                BlockEntryToken token = (BlockEntryToken) ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.BlockEntry, Token.ID.BlockEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseBlockSequenceEntry());
                    return ParserImpl.this.new ParseBlockNode().produce();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseBlockSequenceEntry();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else if (!ParserImpl.this.scanner.checkToken(Token.ID.BlockEnd)) {
                Token token = ParserImpl.this.scanner.peekToken();
                throw new ParserException("while parsing a block collection", ParserImpl.this.marks.pop(), "expected <block end>, but found '" + token.getTokenId() + "'", token.getStartMark());
            } else {
                Token token = ParserImpl.this.scanner.getToken();
                Event event = new SequenceEndEvent(token.getStartMark(), token.getEndMark());
                ParserImpl.this.state = ParserImpl.this.states.pop();
                ParserImpl.this.marks.pop();
                return event;
            }
        }
    }

    private class ParseBlockSequenceFirstEntry implements Production {

        private ParseBlockSequenceFirstEntry() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.getToken();
            ParserImpl.this.marks.push(token.getStartMark());
            return ParserImpl.this.new ParseBlockSequenceEntry().produce();
        }
    }

    private class ParseDocumentContent implements Production {

        private ParseDocumentContent() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.Directive, Token.ID.DocumentStart, Token.ID.DocumentEnd, Token.ID.StreamEnd)) {
                Event event = ParserImpl.this.processEmptyScalar(ParserImpl.this.scanner.peekToken().getStartMark());
                ParserImpl.this.state = ParserImpl.this.states.pop();
                return event;
            } else {
                Production p = ParserImpl.this.new ParseBlockNode();
                return p.produce();
            }
        }
    }

    private class ParseDocumentEnd implements Production {

        private ParseDocumentEnd() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.peekToken();
            Mark startMark = token.getStartMark();
            Mark endMark = startMark;
            boolean explicit = false;
            if (ParserImpl.this.scanner.checkToken(Token.ID.DocumentEnd)) {
                token = ParserImpl.this.scanner.getToken();
                endMark = token.getEndMark();
                explicit = true;
            }
            Event event = new DocumentEndEvent(startMark, endMark, explicit);
            ParserImpl.this.state = ParserImpl.this.new ParseDocumentStart();
            return event;
        }
    }

    private class ParseDocumentStart implements Production {

        private ParseDocumentStart() {
        }

        @Override
        public Event produce() {
            while (ParserImpl.this.scanner.checkToken(Token.ID.DocumentEnd)) {
                ParserImpl.this.scanner.getToken();
            }
            Event event;
            if (!ParserImpl.this.scanner.checkToken(Token.ID.StreamEnd)) {
                Token token = ParserImpl.this.scanner.peekToken();
                Mark startMark = token.getStartMark();
                VersionTagsTuple tuple = ParserImpl.this.processDirectives();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.DocumentStart)) {
                    throw new ParserException(null, null, "expected '<document start>', but found '" + ParserImpl.this.scanner.peekToken().getTokenId() + "'", ParserImpl.this.scanner.peekToken().getStartMark());
                }
                token = ParserImpl.this.scanner.getToken();
                Mark endMark = token.getEndMark();
                event = new DocumentStartEvent(startMark, endMark, true, tuple.getVersion(), tuple.getTags());
                ParserImpl.this.states.push(ParserImpl.this.new ParseDocumentEnd());
                ParserImpl.this.state = ParserImpl.this.new ParseDocumentContent();
            } else {
                StreamEndToken token = (StreamEndToken) ParserImpl.this.scanner.getToken();
                event = new StreamEndEvent(token.getStartMark(), token.getEndMark());
                if (!ParserImpl.this.states.isEmpty()) {
                    throw new YAMLException("Unexpected end of stream. States left: " + ParserImpl.this.states);
                }
                if (!ParserImpl.this.marks.isEmpty()) {
                    throw new YAMLException("Unexpected end of stream. Marks left: " + ParserImpl.this.marks);
                }
                ParserImpl.this.state = null;
            }
            return event;
        }
    }

    private class ParseFlowMappingEmptyValue implements Production {

        private ParseFlowMappingEmptyValue() {
        }

        @Override
        public Event produce() {
            ParserImpl.this.state = ParserImpl.this.new ParseFlowMappingKey(false);
            return ParserImpl.this.processEmptyScalar(ParserImpl.this.scanner.peekToken().getStartMark());
        }
    }

    private class ParseFlowMappingFirstKey implements Production {

        private ParseFlowMappingFirstKey() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.getToken();
            ParserImpl.this.marks.push(token.getStartMark());
            return ParserImpl.this.new ParseFlowMappingKey(true).produce();
        }
    }

    private class ParseFlowMappingKey implements Production {

        private boolean first = false;

        public ParseFlowMappingKey(boolean first) {
            this.first = first;
        }

        @Override
        public Event produce() {
            if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowMappingEnd)) {
                if (!this.first) {
                    if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowEntry)) {
                        Token token = ParserImpl.this.scanner.peekToken();
                        throw new ParserException("while parsing a flow mapping", ParserImpl.this.marks.pop(), "expected ',' or '}', but got " + token.getTokenId(), token.getStartMark());
                    }
                    ParserImpl.this.scanner.getToken();
                }
                if (ParserImpl.this.scanner.checkToken(Token.ID.Key)) {
                    Token token = ParserImpl.this.scanner.getToken();
                    if (!ParserImpl.this.scanner.checkToken(Token.ID.Value, Token.ID.FlowEntry, Token.ID.FlowMappingEnd)) {
                        ParserImpl.this.states.push(ParserImpl.this.new ParseFlowMappingValue());
                        return ParserImpl.this.parseFlowNode();
                    }
                    ParserImpl.this.state = ParserImpl.this.new ParseFlowMappingValue();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
                if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowMappingEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseFlowMappingEmptyValue());
                    return ParserImpl.this.parseFlowNode();
                }
            }
            Token token = ParserImpl.this.scanner.getToken();
            Event event = new MappingEndEvent(token.getStartMark(), token.getEndMark());
            ParserImpl.this.state = ParserImpl.this.states.pop();
            ParserImpl.this.marks.pop();
            return event;
        }
    }

    private class ParseFlowMappingValue implements Production {

        private ParseFlowMappingValue() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.Value)) {
                Token token = ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowEntry, Token.ID.FlowMappingEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseFlowMappingKey(false));
                    return ParserImpl.this.parseFlowNode();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseFlowMappingKey(false);
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else {
                ParserImpl.this.state = ParserImpl.this.new ParseFlowMappingKey(false);
                Token token = ParserImpl.this.scanner.peekToken();
                return ParserImpl.this.processEmptyScalar(token.getStartMark());
            }
        }
    }

    private class ParseFlowSequenceEntry implements Production {

        private boolean first = false;

        public ParseFlowSequenceEntry(boolean first) {
            this.first = first;
        }

        @Override
        public Event produce() {
            if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowSequenceEnd)) {
                if (!this.first) {
                    if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowEntry)) {
                        Token token = ParserImpl.this.scanner.peekToken();
                        throw new ParserException("while parsing a flow sequence", ParserImpl.this.marks.pop(), "expected ',' or ']', but got " + token.getTokenId(), token.getStartMark());
                    }
                    ParserImpl.this.scanner.getToken();
                }
                if (ParserImpl.this.scanner.checkToken(Token.ID.Key)) {
                    Token token = ParserImpl.this.scanner.peekToken();
                    Event event = new MappingStartEvent(null, null, true, token.getStartMark(), token.getEndMark(), DumperOptions.FlowStyle.FLOW);
                    ParserImpl.this.state = ParserImpl.this.new ParseFlowSequenceEntryMappingKey();
                    return event;
                }
                if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowSequenceEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseFlowSequenceEntry(false));
                    return ParserImpl.this.parseFlowNode();
                }
            }
            Token token = ParserImpl.this.scanner.getToken();
            Event event = new SequenceEndEvent(token.getStartMark(), token.getEndMark());
            ParserImpl.this.state = ParserImpl.this.states.pop();
            ParserImpl.this.marks.pop();
            return event;
        }
    }

    private class ParseFlowSequenceEntryMappingEnd implements Production {

        private ParseFlowSequenceEntryMappingEnd() {
        }

        @Override
        public Event produce() {
            ParserImpl.this.state = ParserImpl.this.new ParseFlowSequenceEntry(false);
            Token token = ParserImpl.this.scanner.peekToken();
            return new MappingEndEvent(token.getStartMark(), token.getEndMark());
        }
    }

    private class ParseFlowSequenceEntryMappingKey implements Production {

        private ParseFlowSequenceEntryMappingKey() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.getToken();
            if (!ParserImpl.this.scanner.checkToken(Token.ID.Value, Token.ID.FlowEntry, Token.ID.FlowSequenceEnd)) {
                ParserImpl.this.states.push(ParserImpl.this.new ParseFlowSequenceEntryMappingValue());
                return ParserImpl.this.parseFlowNode();
            } else {
                ParserImpl.this.state = ParserImpl.this.new ParseFlowSequenceEntryMappingValue();
                return ParserImpl.this.processEmptyScalar(token.getEndMark());
            }
        }
    }

    private class ParseFlowSequenceEntryMappingValue implements Production {

        private ParseFlowSequenceEntryMappingValue() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.Value)) {
                Token token = ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.FlowEntry, Token.ID.FlowSequenceEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseFlowSequenceEntryMappingEnd());
                    return ParserImpl.this.parseFlowNode();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseFlowSequenceEntryMappingEnd();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else {
                ParserImpl.this.state = ParserImpl.this.new ParseFlowSequenceEntryMappingEnd();
                Token token = ParserImpl.this.scanner.peekToken();
                return ParserImpl.this.processEmptyScalar(token.getStartMark());
            }
        }
    }

    private class ParseFlowSequenceFirstEntry implements Production {

        private ParseFlowSequenceFirstEntry() {
        }

        @Override
        public Event produce() {
            Token token = ParserImpl.this.scanner.getToken();
            ParserImpl.this.marks.push(token.getStartMark());
            return ParserImpl.this.new ParseFlowSequenceEntry(true).produce();
        }
    }

    private class ParseImplicitDocumentStart implements Production {

        private ParseImplicitDocumentStart() {
        }

        @Override
        public Event produce() {
            if (!ParserImpl.this.scanner.checkToken(Token.ID.Directive, Token.ID.DocumentStart, Token.ID.StreamEnd)) {
                ParserImpl.this.directives = new VersionTagsTuple(null, ParserImpl.DEFAULT_TAGS);
                Token token = ParserImpl.this.scanner.peekToken();
                Mark startMark = token.getStartMark();
                Event event = new DocumentStartEvent(startMark, startMark, false, null, null);
                ParserImpl.this.states.push(ParserImpl.this.new ParseDocumentEnd());
                ParserImpl.this.state = ParserImpl.this.new ParseBlockNode();
                return event;
            } else {
                Production p = ParserImpl.this.new ParseDocumentStart();
                return p.produce();
            }
        }
    }

    private class ParseIndentlessSequenceEntry implements Production {

        private ParseIndentlessSequenceEntry() {
        }

        @Override
        public Event produce() {
            if (ParserImpl.this.scanner.checkToken(Token.ID.BlockEntry)) {
                Token token = ParserImpl.this.scanner.getToken();
                if (!ParserImpl.this.scanner.checkToken(Token.ID.BlockEntry, Token.ID.Key, Token.ID.Value, Token.ID.BlockEnd)) {
                    ParserImpl.this.states.push(ParserImpl.this.new ParseIndentlessSequenceEntry());
                    return ParserImpl.this.new ParseBlockNode().produce();
                } else {
                    ParserImpl.this.state = ParserImpl.this.new ParseIndentlessSequenceEntry();
                    return ParserImpl.this.processEmptyScalar(token.getEndMark());
                }
            } else {
                Token token = ParserImpl.this.scanner.peekToken();
                Event event = new SequenceEndEvent(token.getStartMark(), token.getEndMark());
                ParserImpl.this.state = ParserImpl.this.states.pop();
                return event;
            }
        }
    }

    private class ParseStreamStart implements Production {

        private ParseStreamStart() {
        }

        @Override
        public Event produce() {
            StreamStartToken token = (StreamStartToken) ParserImpl.this.scanner.getToken();
            Event event = new StreamStartEvent(token.getStartMark(), token.getEndMark());
            ParserImpl.this.state = ParserImpl.this.new ParseImplicitDocumentStart();
            return event;
        }
    }
}