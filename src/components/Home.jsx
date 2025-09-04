import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass, faCogs, faThLarge } from "@fortawesome/free-solid-svg-icons";

function Home({ setActivePage }) {
  // Create a reference for services section
  const servicesRef = useRef(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="page-section">
      {/* Hero Section */}
      <div className="hero-section position-relative text-white">
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3 animate-text">
            <span>Specialized</span> <span>CAD/CAM</span> <span>Solutions</span> <span>for</span> <span>Stone</span> <span>Fabrication</span>
          </h1>
          <p className="lead mb-4">
            Precision engineering and design services for the stone fabrication industry
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            <button className="btn btn-primary btn-lg px-4" onClick={scrollToServices}>Our Services</button>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container py-5" ref={servicesRef}>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <motion.div
              className="service-card card h-100 p-4"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={() => setActivePage("cad")}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faDraftingCompass} className="service-icon" />
              <h3>CAD Solutions</h3>
              <p>
                Professional CAD drafting and conversion services for precise
                stone fabrication designs.
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 mb-4">
            <motion.div
              className="service-card card h-100 p-4"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => setActivePage("cam")}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faCogs} className="service-icon" />
              <h3>CAM Programming</h3>
              <p>
                Expert CAM programming for efficient stone cutting and fabrication
                processes.
              </p>
            </motion.div>
          </div>
          <div className="col-md-4 mb-4">
            <motion.div
              className="service-card card h-100 p-4"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={() => setActivePage("slab-layout")}
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faThLarge} className="service-icon" />
              <h3>Slab Layout</h3>
              <p>
                Optimal slab layout solutions to maximize material utilization and
                reduce waste.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Relevance */}
      <div className="container pb-5">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-md-4">
            <motion.div className="card h-100 shadow-sm info-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.35 }} whileHover={{ y: -6 }}>
              <div className="card-body">
                <h5 className="card-title mb-2">Why CAD Smart Tech?</h5>
                <p className="mb-0">Industry-focused CAD/CAM specialists delivering accurate drawings, CNC-ready toolpaths, and material-efficient slab layouts.</p>
              </div>
            </motion.div>
          </div>
          <div className="col-12 col-md-4">
            <motion.div className="card h-100 shadow-sm info-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4 }} whileHover={{ y: -6 }}>
              <div className="card-body">
                <h5 className="card-title mb-2">What We Deliver</h5>
                <ul className="mb-0 list-unstyled">
                  <li className="mb-2">Shop drawings for client approval & fabrication</li>
                  <li className="mb-2">Optimized CAM toolpaths for CNC machines</li>
                  <li className="mb-0">Precise slab layout and vein matching</li>
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="col-12 col-md-4">
            <motion.div className="card h-100 shadow-sm info-card" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} whileHover={{ y: -6 }}>
              <div className="card-body">
                <h5 className="card-title mb-2">Industries</h5>
                <p className="mb-0">Residential and commercial stone fabricators, countertop shops, and custom architectural stonework providers.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img
              src="/assets/homepageimg.jpeg"
              alt="Modern stone fabrication workshop with CNC machines and CAD/CAM workstations"
              className="img-fluid rounded shadow w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
