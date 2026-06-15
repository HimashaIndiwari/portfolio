import { motion } from "framer-motion";
import { pageVariants } from "../../utils/animations";

/**
 * Smooth page-level enter transition wrapper.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="relative z-[2]"
    >
      {children}
    </motion.div>
  );
}
