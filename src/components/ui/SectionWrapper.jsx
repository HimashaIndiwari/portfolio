import { motion } from "framer-motion";
import { sectionReveal } from "../../utils/animations";

/**
 * Animated section wrapper with consistent spacing and reveal.
 */
export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="section-container">{children}</div>
    </motion.section>
  );
}

/**
 * Premium section heading with numbered label and gradient underline.
 */
export function SectionHeading({ subtitle, title, number, align = "center" }) {
  const alignClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <motion.div
      className={`mb-16 flex max-w-3xl flex-col md:mb-20 ${alignClass}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-4 flex items-center gap-3">
        {number && (
          <span className="text-xs font-bold tracking-widest text-accent-primary/60">
            {number}
          </span>
        )}
        <span className="badge-pill">{subtitle}</span>
      </div>

      <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {(() => {
          const words = title.trim().split(/\s+/);
          if (words.length <= 1) {
            return <span className="gradient-text">{title}</span>;
          }
          const last = words.pop();
          return (
            <>
              {words.join(" ")}{" "}
              <span className="gradient-text">{last}</span>
            </>
          );
        })()}
      </h2>

      <div className="mt-6 flex items-center gap-2">
        <div className="h-px w-12 bg-gradient-to-r from-accent-primary to-transparent" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
        <div className="h-px w-12 bg-gradient-to-l from-accent-secondary to-transparent" />
      </div>
    </motion.div>
  );
}
