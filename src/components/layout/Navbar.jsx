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
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-4 sm:px-5 lg:px-8"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="nav-pill flex w-fit items-center justify-center rounded-full px-3 py-2.5 transition-all duration-500 sm:px-4"
      >
        <ul className="hidden w-full items-center justify-between gap-2 rounded-full px-4 py-1 md:flex lg:px-6">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 lg:px-5 ${
                    isActive
                      ? "text-white"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_6px_18px_rgba(0,0,0,0.24)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-text-primary md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="nav-pill mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl md:hidden"
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
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
