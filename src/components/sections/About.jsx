import { motion } from "framer-motion";
import { HiAcademicCap, HiLocationMarker, HiTranslate } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import { personalInfo } from "../../data/portfolioData";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const profileDetails = [
  {
    icon: FaGraduationCap,
    label: "Education",
    value: "Sri Lanka Institute of Information Technology (SLIIT)",
  },
  { icon: HiAcademicCap, label: "Degree", value: personalInfo.title },
  { icon: HiAcademicCap, label: "Specialization", value: personalInfo.specialization },
  { icon: HiTranslate, label: "Languages", value: personalInfo.languages.join(", ") },
  { icon: HiLocationMarker, label: "Location", value: personalInfo.location },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading number="01" subtitle="About Me" title="Who I Am" />

      <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div
          className="lg:col-span-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.blockquote
            variants={fadeUpItem}
            className="glass-card relative mb-8 rounded-2xl border-l-2 border-accent-primary p-6 sm:p-8"
          >
            <div className="absolute top-4 left-5 text-4xl leading-none text-accent-primary/20">
              &ldquo;
            </div>
            <p className="relative text-base leading-[1.85] text-text-secondary sm:text-lg">
              {personalInfo.about}
            </p>
          </motion.blockquote>

          <motion.div variants={fadeUpItem} className="flex flex-wrap gap-2.5">
            {personalInfo.roles.map((role, index) => (
              <motion.span
                key={role}
                className="glass-card glass-card-hover rounded-full px-4 py-2 text-sm font-medium text-accent-primary"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ scale: 1.04 }}
              >
                {role}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-card gradient-border card-shine glass-card-hover rounded-2xl p-7 glow-cyan sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-lg font-bold text-text-primary">Profile Overview</h3>
              <span className="rounded-lg bg-accent-primary/10 px-2.5 py-1 text-xs font-semibold text-accent-primary">
                SLIIT
              </span>
            </div>

            <ul className="space-y-6">
              {profileDetails.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="group flex items-start gap-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-primary/10 bg-accent-primary/[0.08] text-accent-primary transition-colors group-hover:bg-accent-primary group-hover:text-bg-primary">
                    <item.icon className="text-base" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-snug text-text-primary">
                      {item.value}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
