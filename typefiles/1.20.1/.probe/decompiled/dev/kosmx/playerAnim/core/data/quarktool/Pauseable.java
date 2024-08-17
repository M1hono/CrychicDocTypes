package dev.kosmx.playerAnim.core.data.quarktool;

public class Pauseable implements Playable {

    private final Playable playable;

    private final int len;

    public Pauseable(Playable playable, int len) {
        this.playable = playable;
        this.len = len;
    }

    @Override
    public int playForward(int time) throws QuarkParsingError {
        return this.playable.playForward(time + this.len);
    }

    @Override
    public int playBackward(int time) throws QuarkParsingError {
        return this.playable.playBackward(time) + this.len;
    }
}