import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";

function CAM() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5"><FontAwesomeIcon icon={faDraftingCompass} className="me-2" />CAM Programming</h2>
        <p>
          We provide CAM programming services for stone fabricators with our skilled programmers. Our prime focus is to provide hassle-free solutions to our customers on time.
        </p>
        <div className="row mb-3">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">Countertop Programming</li>
              <li className="list-group-item">Toolpath for Countertop</li>
              <li className="list-group-item">Alphacam,Wcam,Pegasus Cam Software</li>
              <li className="list-group-item">Hybrid Cycle Programming</li>
              <li className="list-group-item">Miter Programming</li>
            </ul>
          </div>
        </div>

        {/* CAM Images */}
        <div className="row g-4 text-center mt-3">
          <div className="col-6 col-md-6">
            <img src="/assets/CAM/HYBRID-CNC.PNG" className="img-fluid rounded shadow" alt="Hybrid CNC" />
          </div>
          <div className="col-6 col-md-6">
            <img src="/assets/CAM/HYBRID-SAW.PNG" className="img-fluid rounded shadow" alt="Hybrid Saw" />
          </div>
          <div className="col-6 col-md-6">
            <img src="/assets/CAM/JAVELIN.PNG" className="img-fluid rounded shadow" alt="Javelin" />
          </div>
          <div className="col-6 col-md-6">
            <img src="/assets/CAM/PEGASUS.PNG" className="img-fluid rounded shadow" alt="Pegasus" />
          </div>
          <div className="col-6 col-md-6">
            <img src="/assets/CAM/TITAN.PNG" className="img-fluid rounded shadow" alt="Titan" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CAM;
