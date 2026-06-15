import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import GradientBackground from "./components/ui/GradientBackground";
import PageTransition from "./components/ui/PageTransition";
import SectionDivider from "./components/ui/SectionDivider";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";
import ScrollProgress from "./components/layout/ScrollProgress";
import LoadingScreen from "./components/layout/LoadingScreen";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen">
          <GradientBackground />
          <div className="noise-overlay" aria-hidden="true" />

          <ScrollProgress />
          <Navbar />

          <PageTransition>
            <main>
              <Hero />
              <SectionDivider />
              <About />
              <SectionDivider />
              <Skills />
              <SectionDivider />
              <Projects />
              <SectionDivider />
              <Education />
              <SectionDivider />
              <Contact />
            </main>
            <Footer />
          </PageTransition>

          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
