import { motion } from "framer-motion";

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] text-bg-primary shadow-lg shadow-accent-primary/20 hover:shadow-accent-primary/35 hover:bg-right",
  outline:
    "border border-white/10 bg-white/[0.03] text-text-primary backdrop-blur-sm hover:border-accent-primary/40 hover:bg-accent-primary/[0.06] hover:text-accent-primary",
  ghost:
    "text-text-secondary hover:bg-white/5 hover:text-accent-primary",
};

/**
 * Premium button with shine sweep on hover.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon: Icon,
  className = "",
  type = "button",
  download,
}) {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-500";

  const Component = href ? motion.a : motion.button;

  const props = href
    ? {
        href,
        download,
        target: download ? undefined : href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
      }
    : { type, onClick };

  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative flex items-center gap-2.5">
        {children}
        {Icon && <Icon className="text-lg transition-transform group-hover:translate-x-0.5" />}
      </span>
    </Component>
  );
}

export { HiDownload, HiArrowRight, HiMail } from "react-icons/hi";
