package dev.latvian.mods.rhino.classfile;

final class ClassFileField {

    private final short itsNameIndex;

    private final short itsTypeIndex;

    private final short itsFlags;

    private boolean itsHasAttributes;

    private short itsAttr1;

    private short itsAttr2;

    private short itsAttr3;

    private int itsIndex;

    ClassFileField(short nameIndex, short typeIndex, short flags) {
        this.itsNameIndex = nameIndex;
        this.itsTypeIndex = typeIndex;
        this.itsFlags = flags;
        this.itsHasAttributes = false;
    }

    void setAttributes(short attr1, short attr2, short attr3, int index) {
        this.itsHasAttributes = true;
        this.itsAttr1 = attr1;
        this.itsAttr2 = attr2;
        this.itsAttr3 = attr3;
        this.itsIndex = index;
    }

    int write(byte[] data, int offset) {
        offset = ClassFileWriter.putInt16(this.itsFlags, data, offset);
        offset = ClassFileWriter.putInt16(this.itsNameIndex, data, offset);
        offset = ClassFileWriter.putInt16(this.itsTypeIndex, data, offset);
        if (!this.itsHasAttributes) {
            offset = ClassFileWriter.putInt16(0, data, offset);
        } else {
            offset = ClassFileWriter.putInt16(1, data, offset);
            offset = ClassFileWriter.putInt16(this.itsAttr1, data, offset);
            offset = ClassFileWriter.putInt16(this.itsAttr2, data, offset);
            offset = ClassFileWriter.putInt16(this.itsAttr3, data, offset);
            offset = ClassFileWriter.putInt16(this.itsIndex, data, offset);
        }
        return offset;
    }

    int getWriteSize() {
        int size = 6;
        if (!this.itsHasAttributes) {
            size += 2;
        } else {
            size += 10;
        }
        return size;
    }
}