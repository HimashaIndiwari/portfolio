import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import { education, sectionIllustrations } from "../../data/portfolioData";

const iconMap = { university: FaUniversity, school: FaSchool };

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading number="04" subtitle="Academic Background" title="Education Journey" />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="relative">
          <div className="absolute top-2 left-8 hidden h-[calc(100%-2rem)] w-px md:block">
            <div className="h-full w-full bg-gradient-to-b from-accent-primary via-accent-secondary/50 to-transparent" />
          </div>

          <div className="space-y-8 sm:space-y-10">
            {education.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.institution}
                  className="relative flex gap-6 sm:gap-8"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative z-10 hidden shrink-0 md:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary text-bg-primary shadow-xl shadow-accent-primary/20 ring-4 ring-bg-primary">
                      <Icon className="text-2xl" />
                    </div>
                  </div>

                  <motion.div
                    className="glass-card gradient-border card-shine glass-card-hover flex-1 rounded-2xl p-6 sm:p-7"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary md:hidden">
                        <Icon />
                      </span>
                      {item.period && (
                        <span className="badge-pill text-[11px]">
                          <HiCalendar className="text-xs" />
                          {item.period}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-text-primary sm:text-xl">
                      {item.institution}
                    </h3>
                    <p className="mt-2 font-semibold text-accent-primary">{item.degree}</p>

                    {item.specialization && (
                      <p className="mt-1.5 text-sm text-text-secondary">{item.specialization}</p>
                    )}

                    {item.subjects && (
                      <div className="mt-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                          Subjects
                        </p>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {item.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="rounded-lg border border-white/[0.05] bg-white/[0.03] px-3 py-1 text-sm text-text-secondary"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.results && (
                      <p className="mt-4 text-sm text-text-secondary">
                        <span className="font-semibold text-text-primary">Results:</span>{" "}
                        {item.results}
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.aside
          className="glass-card gradient-border card-shine overflow-hidden rounded-2xl p-4 sm:p-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.03]">
            <img
              src={sectionIllustrations.education}
              alt="Academic journey illustration"
              className="h-full w-full object-cover"
            />
            <div className="border-t border-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-primary">
                Intern-ready mindset
              </p>
              <p className="mt-2 text-base leading-relaxed text-text-secondary">
                Coursework and project work focused on software engineering, full-stack delivery,
                and practical problem solving.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Software engineering", "Full-stack", "Mobile apps", "Collaboration"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent-primary/10 bg-accent-primary/[0.06] px-3 py-1 text-xs font-medium text-accent-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.aside>
      </div>
    </SectionWrapper>
  );
}
