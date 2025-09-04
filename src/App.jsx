import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import CAD from "./components/services/CAD";
import CAM from "./components/services/CAM";
import SlabLayout from "./components/services/SlabLayout";
import { AnimatePresence, motion } from "framer-motion";


function App() {
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    // Add entrance animation when component mounts
    document.body.classList.add('fade-in');
    return () => {
      document.body.classList.remove('fade-in');
    };
  }, []);

  // Ensure browser back button returns to Home without changing existing logic
  useEffect(() => {
    const handlePopState = () => {
      setActivePage("home");
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Push a history entry when navigating away from Home so back triggers popstate
  useEffect(() => {
    if (activePage !== 'home') {
      window.history.pushState({ page: activePage }, '', window.location.pathname);
    }
  }, [activePage]);

  return (
    <>
      <Navbar setActivePage={setActivePage} />

      {/* Main Pages */}
      <div className="page-transition">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.div key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Home setActivePage={setActivePage} />
            </motion.div>
          )}
          {activePage === "about" && (
            <motion.div key="about" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.3 }}>
              <About />
            </motion.div>
          )}
          {activePage === "mission" && (
            <motion.div key="mission" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.3 }}>
              <Mission />
            </motion.div>
          )}
          {activePage === "contact" && (
            <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
              <Contact />
            </motion.div>
          )}

          {/* Service Subpages */}
          {activePage === "services" && (
            <motion.div key="services" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }}>
              <CAD />
            </motion.div>
          )}
          {activePage === "cad" && (
            <motion.div key="cad" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }}>
              <CAD />
            </motion.div>
          )}
          {activePage === "cam" && (
            <motion.div key="cam" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }}>
              <CAM />
            </motion.div>
          )}
          {activePage === "slab-layout" && (
            <motion.div key="slab" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.3 }}>
              <SlabLayout />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </>
  );
}

export default App;
