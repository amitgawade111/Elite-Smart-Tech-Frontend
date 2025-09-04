import React, { useState } from "react";
// import "./Navbar.css";

function Navbar({ setActivePage }) {
  const [enlarged, setEnlarged] = useState(false);

  const handleNavigate = (page, event) => {
    if (event && event.preventDefault) event.preventDefault();
    setActivePage(page);
    try {
      const el = document.getElementById("navbarNav");
      if (window.bootstrap && el) {
        const collapse = window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
        collapse.hide();
      }
    } catch {}
  };

  const toggleLogo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEnlarged(!enlarged);
  };

  const closeLogo = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEnlarged(false);
  };

  const pages = ["home", "about", "mission", "contact"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={(e) => handleNavigate("home", e)}
        >
          <div className={`logo-wrapper ${enlarged ? "enlarged" : ""}`}>
            <img
              src="/logo.png"
              alt="website logo"
              className="logo-img"
              onClick={toggleLogo}
            />
            {enlarged && (
              <button className="close-btn" onClick={closeLogo}>
                &times;
              </button>
            )}
          </div>
          <span className="ms-2">ELITE SMART TECH</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {pages.map((page, index) => (
                <li className="nav-item" key={page} style={{ animationDelay: `${index * 0.1}s` }}>
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => handleNavigate(page, e)}
                  >
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </a>
                </li>
              ))}

              {/* Services Dropdown */}
              <li className="nav-item dropdown" style={{ animationDelay: "0.4s" }}>
                <span
                  className="nav-link dropdown-toggle"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={(e) => handleNavigate("cad", e)}
                      style={{ cursor: "pointer" }}
                    >
                      CAD Solutions
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={(e) => handleNavigate("cam", e)}
                      style={{ cursor: "pointer" }}
                    >
                      CAM Programming
                    </span>
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      onClick={(e) => handleNavigate("slab-layout", e)}
                      style={{ cursor: "pointer" }}
                    >
                      Slab Layout
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

      </div>
    </nav>
  );
}

export default Navbar;


