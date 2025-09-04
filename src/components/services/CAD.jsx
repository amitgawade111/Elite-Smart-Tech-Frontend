import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";

function CAD() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5"><FontAwesomeIcon icon={faDraftingCompass} className="me-2" />CAD Solutions</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">CAD Drafting</li>
              <li className="list-group-item">Hand sketches to CAD</li>
              <li className="list-group-item">Shop drawings for client approval & fabrication</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/CAD/CAD.PNG"
              alt="Detailed CAD drawing of stone countertop with precise measurements"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CAD;
