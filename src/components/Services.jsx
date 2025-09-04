import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass, faCogs, faThLarge } from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5">Our Services</h2>
        
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="service-card card h-100 p-4 hover-lift">
              <FontAwesomeIcon icon={faDraftingCompass} className="service-icon" />
              <h3>CAD Solutions</h3>
              <p>
                Professional CAD drafting and conversion services for precise
                stone fabrication designs. We specialize in creating detailed
                technical drawings and 3D models.
              </p>
              <div className="mt-3">
                <span className="software-badge">AutoCAD</span>
                <span className="software-badge">SolidWorks</span>
                <span className="software-badge">Fusion 360</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="service-card card h-100 p-4 hover-lift">
              <FontAwesomeIcon icon={faCogs} className="service-icon" />
              <h3>CAM Programming</h3>
              <p>
                Expert CAM programming for efficient stone cutting and fabrication
                processes. Optimize your CNC operations with precision toolpaths.
              </p>
              <div className="mt-3">
                <span className="software-badge">Mastercam</span>
                <span className="software-badge">Edgecam</span>
                <span className="software-badge">GibbsCAM</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="service-card card h-100 p-4 hover-lift">
              <FontAwesomeIcon icon={faThLarge} className="service-icon" />
              <h3>Slab Layout</h3>
              <p>
                Optimal slab layout solutions to maximize material utilization and
                reduce waste. Intelligent nesting algorithms for cost-effective production.
              </p>
              <div className="mt-3">
                <span className="software-badge">OptiCut</span>
                <span className="software-badge">CutLogic</span>
                <span className="software-badge">Nesting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
