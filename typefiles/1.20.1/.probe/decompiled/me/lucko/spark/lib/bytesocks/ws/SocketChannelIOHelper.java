package me.lucko.spark.lib.bytesocks.ws;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.ByteChannel;
import me.lucko.spark.lib.bytesocks.ws.enums.Role;

public class SocketChannelIOHelper {

    private SocketChannelIOHelper() {
        throw new IllegalStateException("Utility class");
    }

    public static boolean read(ByteBuffer buf, WebSocketImpl ws, ByteChannel channel) throws IOException {
        buf.clear();
        int read = channel.read(buf);
        buf.flip();
        if (read == -1) {
            ws.eot();
            return false;
        } else {
            return read != 0;
        }
    }

    public static boolean readMore(ByteBuffer buf, WebSocketImpl ws, WrappedByteChannel channel) throws IOException {
        buf.clear();
        int read = channel.readMore(buf);
        buf.flip();
        if (read == -1) {
            ws.eot();
            return false;
        } else {
            return channel.isNeedRead();
        }
    }

    public static boolean batch(WebSocketImpl ws, ByteChannel sockchannel) throws IOException {
        if (ws == null) {
            return false;
        } else {
            ByteBuffer buffer = (ByteBuffer) ws.outQueue.peek();
            WrappedByteChannel c = null;
            if (buffer == null) {
                if (sockchannel instanceof WrappedByteChannel) {
                    c = (WrappedByteChannel) sockchannel;
                    if (c.isNeedWrite()) {
                        c.writeMore();
                    }
                }
            } else {
                do {
                    sockchannel.write(buffer);
                    if (buffer.remaining() > 0) {
                        return false;
                    }
                    ws.outQueue.poll();
                    buffer = (ByteBuffer) ws.outQueue.peek();
                } while (buffer != null);
            }
            if (ws.outQueue.isEmpty() && ws.isFlushAndClose() && ws.getDraft() != null && ws.getDraft().getRole() != null && ws.getDraft().getRole() == Role.SERVER) {
                ws.closeConnection();
            }
            return c == null || !((WrappedByteChannel) sockchannel).isNeedWrite();
        }
    }
}