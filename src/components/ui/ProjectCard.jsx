import { motion } from "framer-motion";
import { HiStar, HiCheck, HiArrowRight } from "react-icons/hi";
import { FaCode } from "react-icons/fa";

/**
 * Premium animated project showcase card with hover reveal and tilt effect.
 */
export default function ProjectCard({ project, index, featured = false }) {
  const projectNum = String(project.id).padStart(2, "0");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${featured ? "lg:col-span-2" : ""}`}
    >
      <motion.div
        className={`glass-card gradient-border card-shine glass-card-hover relative overflow-hidden rounded-2xl ${
          featured ? "lg:rounded-3xl" : ""
        }`}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient header band */}
        <div
          className={`relative overflow-hidden ${featured ? "h-44 sm:h-52" : "h-28 sm:h-32"}`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(99,102,241,0.1) 50%, transparent 100%)",
            }}
          />
          {/* Animated grid overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Project number watermark */}
          <span className="project-number absolute top-3 right-4 sm:top-4 sm:right-6">
            {projectNum}
          </span>

          {/* Icon + featured badge */}
          <div className="absolute bottom-4 left-5 flex items-end gap-3 sm:left-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-bg-primary/60 text-accent-primary backdrop-blur-md sm:h-14 sm:w-14">
              <FaCode className="text-xl sm:text-2xl" />
            </span>
            {project.featured && (
              <span className="badge-pill mb-1">
                <HiStar className="text-sm" />
                Featured
              </span>
            )}
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-bg-primary/50 text-accent-primary opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
          >
            <HiArrowRight />
          </motion.div>
        </div>

        {/* Content */}
        <div className={`p-5 sm:p-6 ${featured ? "lg:p-8" : ""}`}>
          <h3
            className={`mb-3 font-bold leading-snug text-text-primary ${
              featured ? "text-xl sm:text-2xl lg:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {project.title}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-text-secondary sm:text-[0.9375rem]">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-accent-primary/10 bg-accent-primary/[0.06] px-2.5 py-1 text-xs font-medium text-accent-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <ul
            className={`grid gap-2.5 ${
              featured ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-primary/15">
                  <HiCheck className="text-[10px] text-accent-primary" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-500 group-hover:w-full" />
      </motion.div>
    </motion.article>
  );
}
