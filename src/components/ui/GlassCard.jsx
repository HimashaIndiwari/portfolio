import { motion } from "framer-motion";
import { sectionReveal } from "../../utils/animations";

/**
 * Reusable premium glass card wrapper.
 */
export default function GlassCard({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`glass-card gradient-border card-shine rounded-2xl ${hover ? "glass-card-hover" : ""} ${className}`}
      variants={sectionReveal}
      {...props}
    >
      {children}
    </motion.div>
  );
}
