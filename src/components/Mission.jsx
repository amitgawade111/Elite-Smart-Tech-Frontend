import React from "react";

function Mission() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title">Our Mission</h2>

        <div className="mission-statement mb-5">
          <h3 className="mb-3">Delivering Excellence in CAD/CAM Services</h3>
          <p className="lead">
            "Delivering exceptional outsourcing services with our precise and experienced CAD/CAM engineers."
          </p>
          <p>
            "Providing the best design services that are scalable, secure, and efficient, while improving overall service and reducing costs."
          </p>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <h4>Professional Software Tools</h4>
            <div className="mb-4">
              {["Alphacam", "WCam", "Slabsmith", "Baca Systems Programming (RBC)", "Moraware", "SPS (Stone Profit Systems)", "AutoCAD"].map((tool, idx) => (
                <span key={idx} className="software-badge">{tool}</span>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h4>Secure Remote Access Tools</h4>
            <ul className="list-group mb-4">
              {["TeamViewer", "ZOHO Assist", "Fortis Clients VPV", "Any Desk", "PCS Automate IT Remote Support Software"].map((tool, idx) => (
                <li key={idx} className="list-group-item">{tool}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h4>Data Security – Clipboard Protection</h4>
            <div className="security-feature">
              <p><strong>Clipboard sharing is disabled during remote sessions.</strong></p>
              <p>Helps prevent unauthorized data transfer and ensures client confidentiality and secure workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
