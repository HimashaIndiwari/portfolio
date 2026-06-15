import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper, { SectionHeading } from "../ui/SectionWrapper";
import Button from "../ui/Button";
import { personalInfo } from "../../data/portfolioData";
import { fadeUpItem, staggerContainer } from "../../utils/animations";

const contactCards = [
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "View my repositories",
    href: personalInfo.github,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeading number="05" subtitle="Get In Touch" title="Contact Me" />

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        <motion.div
          className="space-y-4 lg:col-span-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUpItem} className="mb-2 text-base leading-relaxed text-text-secondary">
            I&apos;m actively seeking internship opportunities and always open to
            discussing new projects. Let&apos;s connect and build something great
            together.
          </motion.p>

          {contactCards.map((card) => (
            <motion.a
              key={card.label}
              variants={fadeUpItem}
              href={card.href}
              target={card.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="glass-card gradient-border card-shine glass-card-hover flex items-center gap-4 rounded-2xl p-5"
              whileHover={{ x: 6 }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary/15 to-indigo-500/10 text-accent-primary ring-1 ring-accent-primary/10">
                <card.icon className="text-xl" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                  {card.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-text-primary">{card.value}</p>
              </div>
            </motion.a>
          ))}

          <motion.div
            variants={fadeUpItem}
            className="glass-card flex items-center gap-4 rounded-2xl p-5"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10 text-accent-primary">
              <HiLocationMarker className="text-xl" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-muted">
                Location
              </p>
              <p className="mt-0.5 text-sm font-medium text-text-primary">
                {personalInfo.location}
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card gradient-border rounded-2xl p-7 lg:col-span-3 lg:p-9"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="mb-6 text-lg font-bold text-text-primary">Send a Message</h3>

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="input-premium"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="input-premium"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="input-premium resize-none"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto">
              {submitted ? "Opening mail client..." : "Send Message"}
            </Button>
          </div>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
