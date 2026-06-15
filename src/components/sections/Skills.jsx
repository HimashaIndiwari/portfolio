import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import { skillCategories } from "../../data/portfolioData";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const iconMap = {
  code: FaCode,
  frontend: FaLaptopCode,
  backend: FaServer,
  database: FaDatabase,
  tools: FaTools,
  soft: FaUsers,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading number="02" subtitle="Expertise" title="Skills & Technologies" />

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.title}
              variants={fadeUpItem}
              className="group glass-card gradient-border card-shine glass-card-hover rounded-2xl p-6 sm:p-7"
              whileHover={{ y: -4 }}
            >
              <div className="mb-5 flex items-center gap-3.5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-indigo-500/10 text-accent-primary ring-1 ring-accent-primary/10 transition-all duration-300 group-hover:from-accent-primary group-hover:to-accent-secondary group-hover:text-bg-primary group-hover:ring-accent-primary/30">
                  <Icon className="text-lg" />
                </span>
                <h3 className="text-base font-bold text-text-primary sm:text-lg">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.04] bg-white/[0.03] px-3 py-1.5 text-sm text-text-secondary transition-all duration-300 group-hover:border-accent-primary/10 group-hover:bg-accent-primary/[0.06] group-hover:text-text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
