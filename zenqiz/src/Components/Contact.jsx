import React, { useState } from "react";
import { services } from "../Data/servicesData";
import {
  ArrowRight,
  MapPin,
  Clock,
  Mail,
  Building2,
  Code2,
  ExternalLink,
} from "lucide-react";
import "../Components/Stylesheet/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "Web Development",
    message: "",
    requestNDA: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! We will contact you shortly.");

    setFormData({
      fullName: "",
      email: "",
      projectType: "Web Development",
      message: "",
      requestNDA: false,
    });
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-left">

          <span className="contact-tag">
            CONNECT WITH US
          </span>

          <h1>
            Hi. Tell us about
            <br />
            your project
          </h1>

          <p>
            We partner with forward-thinking enterprises to build
            resilient technology ecosystems. Let's engineer your
            future together.
          </p>

          <div className="office-image">
            {/* Place image inside public folder */}
            <img
              src="/office.jpg"
              alt="Office"
            />
          </div>

          <div className="hero-info">

            <div className="info-box">
              <MapPin size={20} />

              <div>
                <span>India</span>
                <h4>Nagercoil, Tamil Nadu</h4>
              </div>
            </div>

            <div className="info-box">
              <Clock size={20} />

              <div>
                <span>Response Time</span>
                <h4>&lt; 24/7 Support</h4>
              </div>
            </div>

          </div>

        </div>

        {/* ================= FORM ================= */}

        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <div className="two-column">

              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="fullName"
                  placeholder="Jane Cooper"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="input-group">

              <label>Project Type</label>
<select
  name="projectType"
  value={formData.projectType}
  onChange={handleChange}
>
  <option value="">Select a service</option>
  {services.map((service) => (
    <option key={service.slug} value={service.title}>
      {service.title}
    </option>
  ))}
</select>

            </div>

            <div className="input-group">

              <label>Your Message</label>

              <textarea
                rows="6"
                name="message"
                placeholder="Briefly describe your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            <div className="checkbox">

              <input
                type="checkbox"
                name="requestNDA"
                checked={formData.requestNDA}
                onChange={handleChange}
              />

              <span>
                Request standard NDA before discussion
              </span>

            </div>

            <button className="submit-btn">

              Send Proposal

              <ArrowRight size={18} />

            </button>

            <p className="privacy">
              By submitting this form, you agree to our
              <a href="#"> Privacy Policy</a>
            </p>

          </form>

        </div>

      </section>

      {/* ================= CONTACT CARDS ================= */}

      <section className="contact-cards">

        <div className="contact-card">

          <div className="card-icon">
            <Mail size={26} />
          </div>

          <h3>Say Hello</h3>

          <p>
            For general inquiries, partnerships,
            and project discussions.
          </p>

          <h4>hello@zanqix.com</h4>

          {/* <span>+91 98765 43210</span> */}

        </div>

        <div className="contact-card">

          <div className="card-icon">
            <Building2 size={26} />
          </div>

          <h3>Our Office</h3>

          <p>
            Visit our office for a consultation
            and coffee.
          </p>

          <h4>
            Nagercoil, Tamil Nadu
            <br />
            India
          </h4>

          <span>
            Nagercoil, Tamil Nadu
            <br />
            India
          </span>
{/* 
          <a href="#">
            VIEW ON MAPS
            <ExternalLink size={15} />
          </a> */}

        </div>

        <div className="contact-card">

          <div className="card-icon">
            <Code2 size={26} />
          </div>

          <h3>Support</h3>

          <p>
            Technical support and developer
            resources.
          </p>

          <div className="tags">

            <span>Discord</span>

            <span>what's app</span>

            <span>Instagram</span>

          </div>

        </div>

      </section>

    </main>
  );
}