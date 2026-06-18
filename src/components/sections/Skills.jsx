import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaServer,
  FaDatabase,
  FaTools,
  FaGithub,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTailwindcss, SiKotlin, SiMysql, SiMongodb, SiExpress, SiPostman } from "react-icons/si";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import { skillCategories } from "../../data/portfolioData";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const iconMap = {
  code: FaCode,
  frontend: FaNodeJs,
  backend: FaDatabase,
  database: FaTools,
};

const skillIconMap = {
  "React.js": FaReact,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Java: FaJava,
  Kotlin: SiKotlin,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Git: FaCode,
  GitHub: FaGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading number="02" subtitle="Expertise" title="Technical Stack" />

      <motion.div
        className="glass-card gradient-border card-shine overflow-hidden rounded-[1.4rem] p-4 sm:p-5 lg:p-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="mb-5 flex items-center gap-3 px-1 sm:mb-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/10 text-accent-primary ring-1 ring-white/10">
            <FaCode className="text-sm" />
          </span>
          <h3 className="text-lg font-semibold text-text-primary sm:text-xl">Tech Stack</h3>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {skillCategories.map((category, index) => {
            const isActive = index === 0;
            return (
              <div
                key={category.title}
                className={`rounded-xl px-3 py-2 text-center text-xs font-medium transition-all sm:text-sm ${
                  isActive
                    ? "bg-accent-primary/10 text-accent-primary ring-1 ring-accent-primary/20"
                    : "bg-white/[0.02] text-text-secondary ring-1 ring-white/5"
                }`}
              >
                {category.title}
              </div>
            );
          })}
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                variants={fadeUpItem}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold text-text-primary sm:text-base">
                    {category.title}
                  </h4>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-bg-primary/50 text-accent-primary">
                    <Icon className="text-sm" />
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIconMap[skill] || FaCode;
                    return (
                      <div
                        key={skill}
                        className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-bg-primary/25 px-3 py-2.5"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-accent-primary ring-1 ring-white/[0.06]">
                          <SkillIcon className="text-sm" />
                        </span>
                        <span className="text-[11px] font-medium text-text-secondary sm:text-xs">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
