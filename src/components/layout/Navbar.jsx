import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/usePortfolioHooks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled ? "nav-pill" : "bg-transparent"
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary text-base font-extrabold text-bg-primary shadow-lg shadow-accent-primary/20">
            H
          </span>
          <span className="hidden text-base font-bold tracking-tight text-text-primary sm:block">
            Himasha<span className="text-accent-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-accent-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-xl bg-accent-primary/10 ring-1 ring-accent-primary/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2.5 text-sm font-semibold text-bg-primary shadow-lg shadow-accent-primary/20 transition-all duration-300 hover:shadow-accent-primary/35 md:block"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-pill mx-auto mt-2 max-w-6xl overflow-hidden md:hidden"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1 p-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-accent-primary"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="mt-1 block rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-3 text-center text-sm font-semibold text-bg-primary"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
