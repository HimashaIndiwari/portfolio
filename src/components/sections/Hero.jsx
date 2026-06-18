import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { personalInfo } from "../../data/portfolioData";
import { fadeUpItem, staggerContainer } from "../../utils/animations";
import ArchitectureScene from "../hero/ArchitectureScene";

export default function Hero() {
  return (
    <section id="home" className="hero-system relative min-h-screen overflow-hidden">
      {/* Ambient corner glows */}
      <div className="hero-corner-glow hero-corner-left" aria-hidden="true" />
      <div className="hero-corner-glow hero-corner-right" aria-hidden="true" />

      <div className="section-container relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col px-5 pt-28 pb-12 sm:px-8 lg:flex-row lg:items-center lg:gap-6 lg:px-10 lg:pt-32 xl:gap-10">
        {/* Left — recruiter-focused copy */}
        <motion.div
          className="relative z-20 mb-10 flex shrink-0 flex-col items-start text-left lg:mb-0 lg:w-[42%] xl:w-[40%]"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpItem} className="mb-6">
            <span className="hero-status-badge">
              <span className="hero-status-dot" />
              Open to Work
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUpItem}
            className="mb-6 max-w-xl text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem] xl:text-5xl"
          >
            Turning complex logic into{" "}
            <span className="hero-headline-gradient">seamless digital products.</span>
          </motion.h1>

          <motion.p
            variants={fadeUpItem}
            className="mb-9 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {personalInfo.intro}
          </motion.p>

          <motion.div variants={fadeUpItem} className="mb-10 flex flex-wrap gap-3 sm:gap-4">
            <a href="#projects" className="hero-cta-primary">
              View Projects
            </a>
            <a href="#contact" className="hero-cta-secondary">
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={fadeUpItem} className="flex gap-5 text-xl text-text-muted">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-link"
              aria-label="Email"
            >
              <HiMail />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — 3D architecture scene */}
        <motion.div
          className="relative z-10 flex flex-1 items-center justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArchitectureScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="hero-scroll-cue"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to about section"
      >
        <span className="hero-scroll-chevron" />
      </motion.a>
    </section>
  );
}
