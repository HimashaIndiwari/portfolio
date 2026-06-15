import { motion } from "framer-motion";

/**
 * Global animated gradient mesh background with floating orbs.
 */
export default function GradientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base mesh */}
      <div className="absolute inset-0 mesh-bg" />

      {/* Animated orbs */}
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-48 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
        animate={{ x: [0, -30, 0], y: [0, 50, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)",
        }}
        animate={{ x: [0, 20, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
