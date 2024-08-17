package org.embeddedt.modernfix.resources;

import java.util.concurrent.CompletionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinWorkerThread;
import java.util.concurrent.atomic.AtomicInteger;
import net.minecraft.ReportedException;
import net.minecraft.server.Bootstrap;
import org.embeddedt.modernfix.ModernFix;

public class ReloadExecutor {

    public static ExecutorService createCustomResourceReloadExecutor() {
        ClassLoader loader = ReloadExecutor.class.getClassLoader();
        AtomicInteger workerCount = new AtomicInteger(0);
        return new ForkJoinPool(ForkJoinPool.getCommonPoolParallelism(), forkJoinPool -> {
            ForkJoinWorkerThread forkJoinWorkerThread = new ForkJoinWorkerThread(forkJoinPool) {

                protected void onTermination(Throwable throwOnTermination) {
                    if (throwOnTermination != null) {
                        ModernFix.LOGGER.warn("{} died", this.getName(), throwOnTermination);
                    } else {
                        ModernFix.LOGGER.debug("{} shutdown", this.getName());
                    }
                    super.onTermination(throwOnTermination);
                }
            };
            forkJoinWorkerThread.setContextClassLoader(loader);
            forkJoinWorkerThread.setName("Worker-ResourceReload-" + workerCount.getAndIncrement());
            return forkJoinWorkerThread;
        }, ReloadExecutor::handleException, true);
    }

    private static void handleException(Thread thread, Throwable throwable) {
        if (throwable instanceof CompletionException) {
            throwable = throwable.getCause();
        }
        if (throwable instanceof ReportedException) {
            Bootstrap.realStdoutPrintln(((ReportedException) throwable).getReport().getFriendlyReport());
            System.exit(-1);
        }
        ModernFix.LOGGER.error(String.format("Caught exception in thread %s", thread), throwable);
    }
}