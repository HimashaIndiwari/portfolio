import { motion } from "framer-motion";
import { HiDownload, HiArrowRight, HiMail } from "react-icons/hi";
import { personalInfo, stats } from "../../data/portfolioData";
import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";
import TypingEffect from "../ui/TypingEffect";
import AnimatedCounter from "../ui/AnimatedCounter";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      <div className="section-container relative w-full px-5 sm:px-8 lg:px-10">
        <motion.div
          className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left */}
          <div className="order-2 lg:order-1">
            <motion.div variants={fadeUpItem} className="mb-6">
              <span className="badge-pill">
                <span className="badge-dot" />
                Open to Internship Opportunities
              </span>
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="mb-3 text-base font-medium tracking-wide text-text-secondary sm:text-lg"
            >
              {personalInfo.greeting}
            </motion.p>

            <motion.h1
              variants={fadeUpItem}
              className="mb-5 text-[2.5rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div variants={fadeUpItem} className="mb-7 min-h-[2.5rem] sm:min-h-[3rem]">
              <TypingEffect words={personalInfo.roles} />
            </motion.div>

            <motion.p
              variants={fadeUpItem}
              className="mb-10 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-8"
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div variants={fadeUpItem} className="mb-10 flex flex-wrap gap-3 sm:gap-4">
              <Button href={personalInfo.cvPath} download icon={HiDownload}>
                Download CV
              </Button>
              <Button href="#projects" variant="outline" icon={HiArrowRight}>
                View Projects
              </Button>
              <Button href="#contact" variant="ghost" icon={HiMail}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <SocialIcons />
            </motion.div>
          </div>

          {/* Right — profile card */}
          <motion.div
            variants={fadeUpItem}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-primary/20 via-transparent to-indigo-500/10 blur-3xl" />

              <div className="glass-card gradient-border card-shine relative overflow-hidden rounded-3xl p-8 glow-cyan sm:p-10">
                {/* Inner glow */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-accent-primary/10 blur-3xl" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="relative mb-7">
                    <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-accent-primary/30 to-indigo-500/20 blur-xl" />
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-accent-primary to-accent-secondary text-5xl font-extrabold text-bg-primary shadow-2xl shadow-accent-primary/20 sm:h-44 sm:w-44 sm:text-6xl">
                      HI
                    </div>
                    <motion.div
                      className="absolute -inset-3 rounded-full border border-dashed border-accent-primary/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary sm:text-2xl">
                    {personalInfo.name}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent-primary">
                    {personalInfo.title}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {personalInfo.specialization}
                  </p>

                  <div className="mt-9 grid w-full grid-cols-3 gap-3 border-t border-white/[0.06] pt-8">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl bg-white/[0.03] px-2 py-4 transition-colors hover:bg-accent-primary/[0.06]"
                      >
                        <p className="text-2xl font-extrabold text-accent-primary sm:text-3xl">
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-text-muted sm:text-xs">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
            Scroll
          </span>
          <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-sm">
            <motion.div
              className="h-2 w-1 rounded-full bg-gradient-to-b from-accent-primary to-accent-secondary"
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
