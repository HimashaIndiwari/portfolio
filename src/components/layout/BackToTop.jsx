import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-bg-card/80 text-accent-primary shadow-xl backdrop-blur-md sm:right-8"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      whileHover={{ scale: 1.08, y: -3, borderColor: "rgba(34,211,238,0.3)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="Back to top"
    >
      <HiArrowUp className="text-lg" />
    </motion.button>
  );
}
