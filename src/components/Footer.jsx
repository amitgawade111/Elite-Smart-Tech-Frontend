import React from "react";

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center gy-3">
          {/* Left side with logo and company info */}
          <div className="col-12 col-md-6 d-flex align-items-center">
            <img
              src="/logo.png"
              alt="Company logo"
              className="me-3"
              style={{ width: "75px", height: "75px", borderRadius: "10px" }}
            />
            <div>
              <h5 className="mb-1">ELITE SMART TECH.</h5>
              <h6 className="mb-1">CAD CAM PROGRAMMING SERVICES</h6>
              <p className="mb-0">Specialized in Stone Fabrication</p>
            </div>
          </div>

          {/* Right side with contact info and address */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="mb-1 mb-md-2">
              © 2025 ELITE SMART TECH. All rights reserved.
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-end align-items-center gap-1">
              <a
                href="mailto:info@elitesmarttech.com"
                className="text-decoration-none footer-email"
              >
                info@elitesmarttech.com
              </a>
              <span className="d-none d-md-inline">|</span>
              <a href="tel:+917666273653" className="text-decoration-none">
                +91 7666273653
              </a>
            </div>
            <address
              className="mb-0 small  mt-2"
              style={{ fontStyle: "normal" }}
            >
               <span style={{color:"yellowgreen",fontWeight: "bold"}}>Address :</span>
              📍 H.NO.4 ASGAON 
               CHANDGAD, 
               KOLHAPUR, 
              ASGAON 416509
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
