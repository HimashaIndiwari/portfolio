import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/usePortfolioHooks";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 z-[60] h-[2px] w-full bg-white/[0.03]">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-400"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
