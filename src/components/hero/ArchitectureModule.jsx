import { motion } from "framer-motion";

/**
 * Floating glass architecture module card with neon glow variant.
 */
export default function ArchitectureModule({
  subtitle,
  title,
  technologies,
  glow = "cyan",
  className = "",
  floatDelay = 0,
  dataDepth = "1",
  footerText,
}) {
  const glowClass = {
    cyan: "architecture-card-cyan module-glow-cyan",
    purple: "architecture-card-purple module-glow-purple",
    hybrid: "architecture-card-hybrid module-glow-hybrid",
    glass: "architecture-card-glass module-glow-glass",
  }[glow];

  return (
    <motion.div
      className={`architecture-card-wrap ${className}`}
      data-depth={dataDepth}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: floatDelay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className={`architecture-card ${glowClass}`}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5 + floatDelay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.04, y: -12, z: 30 }}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="architecture-card-title">{title}</h4>
          </div>
        </div>
        <div className="technology-grid">{technologies}</div>
        {footerText && (
          <p className="architecture-card-footer mt-3.5 border-t border-white/[0.05] pt-2.5 text-center text-[0.62rem] font-semibold tracking-wider text-text-muted uppercase">
            {footerText}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
