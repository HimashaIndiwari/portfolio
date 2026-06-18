import { motion } from "framer-motion";
import { HiArrowRight, HiMail } from "react-icons/hi";
import { personalInfo } from "../../data/portfolioData";
import Button from "../ui/Button";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const stats = [
  ["6+", "Projects"],
  ["25+", "Tech stack"],
  ["3+", "Years studying"],
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="section-container relative w-full px-5 sm:px-8 lg:px-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="order-2 max-w-2xl lg:order-1">
            <motion.h1
              variants={fadeUpItem}
              className="max-w-[12ch] text-[3.1rem] font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-[4.6rem] xl:text-[5.75rem]"
            >
              <span>Turning complex logic into</span>
              <span className="mt-2 block text-[#ffd24d]">seamless digital products.</span>
            </motion.h1>

            <motion.p
              variants={fadeUpItem}
              className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-white/55 sm:text-base"
            >
              {personalInfo.name} • {personalInfo.title}
            </motion.p>

            <motion.div variants={fadeUpItem} className="mt-6 mb-7 max-w-xl">
              <p className="text-base leading-relaxed text-text-secondary sm:text-lg sm:leading-8">
                I am a full-stack developer specializing in the MERN stack and high-performance
                web architecture, currently refining my craft as a Software Engineering
                undergraduate at SLIIT.
              </p>
            </motion.div>

            <motion.div variants={fadeUpItem} className="mb-9 flex flex-wrap gap-3 sm:gap-4">
              <Button href="#projects" variant="outline" icon={HiArrowRight}>
                View Projects
              </Button>
              <Button href="#contact" variant="ghost" icon={HiMail}>
                Get in Touch
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpItem}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[40rem]">
              <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(250,204,21,0.12),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.16),transparent_30%)] blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/8 bg-[#0c1322] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.42)] sm:p-5">
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "34px 34px",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.08),transparent_28%)]" />
                <div className="relative rounded-[1.6rem] border border-white/8 bg-[#0f1726]/90 p-4 sm:p-5">
                  <img
                    src="/illustrations/hero-studio.svg"
                    alt="Developer workstation illustration"
                    className="h-full w-full rounded-[1.2rem] object-cover"
                  />
                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-bg-primary/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-secondary backdrop-blur-md">
                    Software Engineer
                  </div>
                </div>
                <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
                  {stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/6 bg-white/[0.03] px-4 py-4 text-center"
                    >
                      <p className="text-2xl font-extrabold text-[#ffd24d] sm:text-3xl">{value}</p>
                      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-text-muted sm:text-xs">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

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
