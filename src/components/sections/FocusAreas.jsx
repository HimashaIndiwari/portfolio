import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const focusAreas = [
  {
    label: "Web",
    title: "Full-Stack Web Development",
    description:
      "Building responsive web applications using React, Node.js, Express, REST APIs, and database-backed systems.",
    accent: "cyan",
  },
  {
    label: "Backend",
    title: "Java and Backend Engineering",
    description:
      "Applying object-oriented programming, backend logic, CRUD operations, API development, and clean code practices.",
    accent: "amber",
  },
  {
    label: "Data",
    title: "Database and System Design",
    description:
      "Working with MySQL, MongoDB, relational database concepts, data modelling, and scalable application workflows.",
    accent: "cyan",
  },
  {
    label: "Workflow",
    title: "Testing, DevOps and Collaboration",
    description:
      "Understanding unit testing, integration testing, Git/GitHub workflows, CI/CD basics, deployment, and team-based development.",
    accent: "amber",
  },
];

export default function FocusAreas() {
  return (
    <SectionWrapper id="focus-areas">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6b85e]">
          Focus Areas
        </p>
        <h3 className="max-w-3xl text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-[2.8rem]">
          Core engineering focus
        </h3>
        <motion.p
          variants={fadeUpItem}
          className="mt-4 mb-10 max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          The areas I keep strengthening across full-stack development, backend engineering,
          databases, testing, deployment, and team-based delivery.
        </motion.p>

        <div className="grid gap-5 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <motion.article
              key={area.title}
              variants={fadeUpItem}
              className={`rounded-[1.75rem] border p-6 sm:p-7 ${
                area.accent === "cyan"
                  ? "border-[#4ddce8]/40 bg-[#172f42] shadow-[0_0_0_1px_rgba(77,220,232,0.12),0_0_30px_rgba(77,220,232,0.08)]"
                  : "border-[#d8b24b]/50 bg-[#332f26] shadow-[0_0_0_1px_rgba(216,178,75,0.12),0_0_30px_rgba(216,178,75,0.08)]"
              }`}
            >
              <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e4d6a1]">
                {area.label}
              </span>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-[1.85rem]">
                {area.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-text-secondary sm:text-base">
                {area.description}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
