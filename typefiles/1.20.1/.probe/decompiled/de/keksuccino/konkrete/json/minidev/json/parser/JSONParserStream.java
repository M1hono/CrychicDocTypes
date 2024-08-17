package de.keksuccino.konkrete.json.minidev.json.parser;

import java.io.IOException;

abstract class JSONParserStream extends JSONParserBase {

    public JSONParserStream(int permissiveMode) {
        super(permissiveMode);
    }

    @Override
    protected void readNQString(boolean[] stop) throws IOException {
        this.sb.clear();
        this.skipNQString(stop);
        this.xs = this.sb.toString().trim();
    }

    @Override
    protected Object readNumber(boolean[] stop) throws ParseException, IOException {
        this.sb.clear();
        this.sb.append(this.c);
        this.read();
        this.skipDigits();
        if (this.c != '.' && this.c != 'E' && this.c != 'e') {
            this.skipSpace();
            if (this.c >= 0 && this.c < '~' && !stop[this.c] && this.c != 26) {
                this.skipNQString(stop);
                this.xs = this.sb.toString().trim();
                if (!this.acceptNonQuote) {
                    throw new ParseException(this.pos, 1, this.xs);
                } else {
                    return this.xs;
                }
            } else {
                this.xs = this.sb.toString().trim();
                return this.parseNumber(this.xs);
            }
        } else {
            if (this.c == '.') {
                this.sb.append(this.c);
                this.read();
                this.skipDigits();
            }
            if (this.c != 'E' && this.c != 'e') {
                this.skipSpace();
                if (this.c >= 0 && this.c < '~' && !stop[this.c] && this.c != 26) {
                    this.skipNQString(stop);
                    this.xs = this.sb.toString().trim();
                    if (!this.acceptNonQuote) {
                        throw new ParseException(this.pos, 1, this.xs);
                    } else {
                        return this.xs;
                    }
                } else {
                    this.xs = this.sb.toString().trim();
                    return this.extractFloat();
                }
            } else {
                this.sb.append('E');
                this.read();
                if (this.c == '+' || this.c == '-' || this.c >= '0' && this.c <= '9') {
                    this.sb.append(this.c);
                    this.read();
                    this.skipDigits();
                    this.skipSpace();
                    if (this.c >= 0 && this.c < '~' && !stop[this.c] && this.c != 26) {
                        this.skipNQString(stop);
                        this.xs = this.sb.toString().trim();
                        if (!this.acceptNonQuote) {
                            throw new ParseException(this.pos, 1, this.xs);
                        } else {
                            return this.xs;
                        }
                    } else {
                        this.xs = this.sb.toString().trim();
                        return this.extractFloat();
                    }
                } else {
                    this.skipNQString(stop);
                    this.xs = this.sb.toString().trim();
                    if (!this.acceptNonQuote) {
                        throw new ParseException(this.pos, 1, this.xs);
                    } else {
                        if (!this.acceptLeadinZero) {
                            this.checkLeadinZero();
                        }
                        return this.xs;
                    }
                }
            }
        }
    }

    @Override
    protected void readString() throws ParseException, IOException {
        if (this.acceptSimpleQuote || this.c != '\'') {
            this.sb.clear();
            this.readString2();
        } else if (this.acceptNonQuote) {
            this.readNQString(stopAll);
        } else {
            throw new ParseException(this.pos, 0, this.c);
        }
    }
}