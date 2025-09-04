import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDraftingCompass } from "@fortawesome/free-solid-svg-icons";

function SlabLayout() {
  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title text-center mb-5"><FontAwesomeIcon icon={faDraftingCompass} className="me-2" />Slab Layout</h2>
        <p>
          We offer slab layout services with precise dimensions for stone fabricators, which helps in reducing wastage and time consumption.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h5>Slabsmith Services:</h5>
            <ul className="list-group">
              <li className="list-group-item">Slab Layout</li>
              <li className="list-group-item">Perfect Vein Matching</li>
              <li className="list-group-item">Book Matching</li>
              <li className="list-group-item">3D Visualization</li>
              <li className="list-group-item">Maximum utilization of available material</li>
            </ul>
            <p className="mt-3 fw-bold">Goal: Maximum utilization of available material</p>
          </div>
          <div className="col-md-6">
            <img
              src="/assets/SLABSMITH/SLABSMITH.PNG"
              alt="Slabsmith software interface showing optimal stone slab layout"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlabLayout;
