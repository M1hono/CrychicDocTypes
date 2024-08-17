package de.keksuccino.fancymenu.util;

import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Locale;
import net.minecraft.client.Minecraft;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class WebUtils {

    @Nullable
    public static InputStream openResourceStream(@NotNull String resourceURL) {
        try {
            URL actualURL = new URL(resourceURL);
            HttpURLConnection connection = (HttpURLConnection) actualURL.openConnection();
            connection.addRequestProperty("User-Agent", "Mozilla/4.0");
            return connection.getInputStream();
        } catch (Exception var3) {
            var3.printStackTrace();
            return null;
        }
    }

    @Nullable
    public static String getMimeType(@NotNull String url) {
        try {
            URL url2 = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) url2.openConnection();
            String mimeType = connection.getContentType();
            connection.disconnect();
            return mimeType;
        } catch (Exception var4) {
            return null;
        }
    }

    public static boolean isValidUrl(@Nullable String url) {
        if (url != null && (url.startsWith("http://") || url.startsWith("https://"))) {
            try {
                URL u = new URL(url);
                HttpURLConnection c = (HttpURLConnection) u.openConnection();
                c.addRequestProperty("User-Agent", "Mozilla/4.0");
                c.setRequestMethod("HEAD");
                int r = c.getResponseCode();
                if (r == 200) {
                    return true;
                }
            } catch (Exception var6) {
                try {
                    URL ux = new URL(url);
                    HttpURLConnection cx = (HttpURLConnection) ux.openConnection();
                    cx.addRequestProperty("User-Agent", "Mozilla/4.0");
                    int rx = cx.getResponseCode();
                    if (rx == 200) {
                        return true;
                    }
                } catch (Exception var5) {
                }
            }
        }
        return false;
    }

    public static void openWebLink(@NotNull String url) {
        try {
            String s = System.getProperty("os.name").toLowerCase(Locale.ROOT);
            URL u = new URL(url);
            if (!Minecraft.ON_OSX) {
                if (s.contains("win")) {
                    Runtime.getRuntime().exec(new String[] { "rundll32", "url.dll,FileProtocolHandler", url });
                } else {
                    if (u.getProtocol().equals("file")) {
                        url = url.replace("file:", "file://");
                    }
                    Runtime.getRuntime().exec(new String[] { "xdg-open", url });
                }
            } else {
                Runtime.getRuntime().exec(new String[] { "open", url });
            }
        } catch (Exception var3) {
            var3.printStackTrace();
        }
    }
}