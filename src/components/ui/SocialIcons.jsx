import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { personalInfo } from "../../data/portfolioData";

const socialLinks = [
  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
  { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  { icon: HiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
];

export default function SocialIcons({ size = "md", className = "" }) {
  const sizeClasses =
    size === "lg" ? "h-12 w-12 text-xl" : "h-11 w-11 text-lg";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }, index) => (
        <motion.a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className={`glass-card glass-card-hover flex items-center justify-center rounded-xl text-text-secondary transition-colors hover:text-accent-primary ${sizeClasses}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon />
        </motion.a>
      ))}
    </div>
  );
}
