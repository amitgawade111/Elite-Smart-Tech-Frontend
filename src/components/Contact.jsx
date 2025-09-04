import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success or error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus({ type: "success", message: response.data.message });
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      const errorMsg = err.response?.data?.error || "Something went wrong";
      setStatus({ type: "error", message: errorMsg });
    }
  };

  return (
    <section className="page-section">
      <div className="container py-5">
        <h2 className="section-title">Contact Us</h2>
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">Get In Touch</h4>
                <p className="card-text">For inquiries or project discussions, contact us:</p>
                <div className="contact-info">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@elitesmarttech.com">info@elitesmarttech.com</a>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    <strong>Phone:</strong> <a href="tel:+8308588924">+91 8308588924</a>
                  </p>
                 
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Send Us a Message</h4>
                {status && (
                  <div
                    className={`alert ${
                      status.type === "success" ? "alert-success" : "alert-danger"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
