import React from "react";

function About() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title">About Us</h2>
        <div className="row">
          <div className="col-lg-6">
            <h3>Expert CAD/CAM Engineers</h3>
                <p>We are a team of specialized CAD/CAM professionals focused on providing exceptional outsourcing services for the stone fabrication industry. With years of experience and cutting-edge technology, we deliver precise and efficient solutions.</p>
                    <p>Our expertise spans across various CAD/CAM software platforms, ensuring we can handle any project requirement with precision and professionalism.</p>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/aboutimg.png"
              alt="CAD Design"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
