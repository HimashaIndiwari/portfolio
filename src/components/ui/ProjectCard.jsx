import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const defaultActions = [
  { label: "Frontend Repo", href: "https://github.com/himashaindiwari" },
  { label: "Backend Repo", href: "https://github.com/himashaindiwari" },
];

const categoryLabels = {
  fullstack: "Full-Stack Platform",
  web: "Web Application",
  mobile: "Mobile Application",
};

function getProjectName(title) {
  return title.split("—")[0].split("–")[0].trim();
}

/**
 * Image-first project showcase card with hover-revealed project details.
 */
export default function ProjectCard({ project, index }) {
  const projectNum = String(project.id).padStart(2, "0");
  const projectName = getProjectName(project.title);
  const actions = project.actions?.length ? project.actions : defaultActions;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <motion.div
        className="gradient-border card-shine relative min-h-[420px] overflow-hidden rounded-[2rem] border border-accent-primary/20 bg-bg-primary shadow-2xl shadow-black/30 sm:min-h-[480px]"
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/0 via-bg-primary/35 to-bg-primary/92" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/12 via-transparent to-bg-primary/35" />
        <div className="absolute inset-0 bg-slate-200/45 mix-blend-multiply transition duration-500 group-hover:bg-slate-950/25" />

        <span className="project-number absolute top-7 right-8">
          {projectNum}
        </span>

        <div className="absolute top-8 right-8 rounded-full border border-white/10 bg-bg-primary/45 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-text-secondary backdrop-blur-md">
          Case study
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.32em]">
            <span className="text-accent-glow">
              {project.kicker || categoryLabels[project.category] || "Project"}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-text-primary backdrop-blur-md">
              {project.collaboration || "Team Project"}
            </span>
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-text-primary backdrop-blur-md">
              {project.year || "2026"}
            </span>
          </div>

          <h3 className="text-3xl font-bold leading-tight text-text-primary sm:text-4xl">
            {projectName}
          </h3>

          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="overflow-hidden">
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-accent-primary/10 bg-accent-primary/[0.08] px-2.5 py-1 text-xs font-medium text-accent-primary backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {project.features.slice(0, 4).map((feature) => (
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
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((action) => {
              const isPrimary = action.variant === "primary";
              const Icon = isPrimary ? FaExternalLinkAlt : FaGithub;

              return (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-md transition duration-300 ${
                    isPrimary
                      ? "bg-accent-primary text-bg-primary shadow-lg shadow-accent-primary/20 hover:bg-accent-secondary"
                      : "border border-white/20 bg-white/[0.08] text-text-primary hover:border-accent-primary/40 hover:text-accent-primary"
                  }`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="text-sm" />
                  {action.label}
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}
