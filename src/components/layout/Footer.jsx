import { motion } from "framer-motion";
import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="section-container px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <motion.div
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-lg font-extrabold text-bg-primary">
            H
          </a>

          <p className="max-w-md text-sm leading-relaxed text-text-secondary">
            Building innovative software solutions through continuous learning and
            technology.
          </p>

          <SocialIcons size="md" />

          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-xs text-text-muted">
            &copy; {currentYear} Himasha Indiwari. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
