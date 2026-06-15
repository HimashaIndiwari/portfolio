import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { projects, projectFilters } from "../../data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured || activeFilter !== "all");

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        number="03"
        subtitle="Portfolio"
        title="Featured Projects"
      />

      <p className="mx-auto -mt-8 mb-14 max-w-2xl text-center text-base leading-relaxed text-text-secondary sm:mb-16">
        A selection of full-stack, web, and mobile projects demonstrating real-world
        problem solving, clean architecture, and modern development practices.
      </p>

      {/* Filter pills */}
      <LayoutGroup>
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-2 sm:mb-16 sm:gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {projectFilters.map((filter) => (
            <motion.button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-pill ${
                activeFilter === filter.value ? "filter-pill-active" : "filter-pill-inactive"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              layout
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>
      </LayoutGroup>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          {/* Featured hero showcase — only on "All" filter */}
          {activeFilter === "all" && featuredProject && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={featuredProject} index={0} featured />
            </motion.div>
          )}

          {/* Project grid */}
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          >
            <AnimatePresence mode="popLayout">
              {(activeFilter === "all"
                ? regularProjects
                : filteredProjects
              ).map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
