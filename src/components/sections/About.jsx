import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import { fadeUpItem, staggerContainer } from "../../utils/animations";
import himashaPhoto from "../../assets/Himasha.png";

export default function About() {
  return (
    <SectionWrapper id="about">
      <motion.div
        className="grid gap-0 overflow-hidden rounded-[2rem] border border-white/10 bg-[#242a31] shadow-2xl shadow-black/20 lg:grid-cols-[0.31fr_0.69fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[100%]">
          <img
            src={himashaPhoto}
            alt="Himasha Indiwari portrait"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/72 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md sm:left-5 sm:top-5">
            Himasha Indiwari
          </div>
        </div>

        <div className="p-7 sm:p-8 lg:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d6b85e]">
            About Himasha Indiwari
          </p>
          <h3 className="mt-4 max-w-4xl text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-[3.5rem]">
            Designing and developing practical software solutions.
          </h3>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 max-w-3xl text-sm leading-8 text-text-secondary sm:text-base"
          >
            I am a third-year Software Engineering undergraduate at Sri Lanka Institute of
            Information Technology (SLIIT) with hands-on experience in full-stack web
            development, mobile application development, and software engineering principles.
          </motion.p>

          <motion.p
            variants={fadeUpItem}
            className="mt-5 max-w-3xl text-sm leading-8 text-text-secondary sm:text-base"
          >
            My primary focus is developing modern web applications using React.js, Node.js,
            Express.js, and MongoDB while applying clean coding practices and scalable
            architecture patterns.
          </motion.p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
