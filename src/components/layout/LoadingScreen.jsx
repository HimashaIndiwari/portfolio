import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center mesh-bg"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-bg-primary/80 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="relative mb-10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-3xl font-extrabold text-bg-primary shadow-2xl shadow-accent-primary/30">
            H
          </div>
          <motion.div
            className="absolute -inset-3 rounded-2xl border border-accent-primary/20"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          />
        </motion.div>

        <motion.h2
          className="mb-2 text-xl font-bold tracking-tight text-text-primary"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Himasha Indiwari
        </motion.h2>

        <motion.p
          className="mb-10 text-sm text-text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Software Engineering Portfolio
        </motion.p>

        <div className="relative h-1 w-56 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-400"
            style={{ width: `${progress}%` }}
          />
        </div>

        <motion.span
          className="mt-4 font-mono text-xs text-text-muted"
          key={progress}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          {progress}%
        </motion.span>
      </div>
    </motion.div>
  );
}
