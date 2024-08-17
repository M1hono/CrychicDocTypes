package dev.kosmx.playerAnim.core.data.quarktool;

public class Yoyo extends Repeat {

    public Yoyo(Playable parent, int delay, int count) throws QuarkParsingError {
        super(parent, delay, count);
    }

    @Override
    public int playForward(int time) throws QuarkParsingError {
        int i = 0;
        int t = time;
        while (i++ <= this.count) {
            if (i != 1) {
                t += this.delay;
            }
            t = this.playable.playForward(t);
            if (i++ > this.count) {
                return t;
            }
            t += this.delay;
            t = this.playable.playBackward(t);
        }
        return t;
    }
}