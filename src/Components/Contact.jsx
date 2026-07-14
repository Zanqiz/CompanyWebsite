import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Mail,
  Building2,
  Code2,
  ExternalLink,
} from "lucide-react";
import "./Stylesheet/Contact.css";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "39247057-d808-411f-80c1-8aa37115858a" // <-- Replace with your real key
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-left">
          <span className="contact-tag">CONNECT WITH US</span>

          <h1>
            Hi. Tell us about
            <br />
            your project
          </h1>

          <p>
            We partner with forward-thinking enterprises to build resilient
            technology ecosystems.
          </p>

          <div className="office-image">
            <img src="/office.jpg" alt="Office" />
          </div>

          <div className="hero-info">
            <div className="info-box">
              {/* <MapPin size={20} /> */}
              <div>
                <span>India</span>
                <h4>Nagercoil, Tamil Nadu</h4>
              </div>
            </div>

            <div className="info-box">
              <Clock size={20} />
              <div>
                <span>Response Time</span>
                <h4>&lt; 24 Hours</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}

        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <div className="two-column">
              <div className="input-group">
                <label>Full Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Jane Cooper"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>

                <input
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Project Type</label>

              <select name="projectType" required>
                <option value="">Select Service</option>
                <option>Web Development</option>
                <option>Software Development</option>
                <option>UI / UX Design</option>
                <option>E-Commerce</option>
                <option>Accessibility</option>
              </select>
            </div>

            <div className="input-group">
              <label>Your Message</label>

              <textarea
                rows="6"
                name="message"
                placeholder="Briefly describe your project..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Proposal
              <ArrowRight size={18} />
            </button>

            <p>{result}</p>

            <p className="privacy">
              By submitting this form, you agree to our
              <a href="#"> Privacy Policy</a>
            </p>
          </form>
        </div>
      </section>

      {/* Contact Cards */}

      <section className="contact-cards">
        <div className="contact-card">
          <div className="card-icon">
            <Mail size={26} />
          </div>

          <h3>Say Hello</h3>

          <p>For general inquiries, partnerships, and project discussions.</p>

          <h4>zanqiztech@gmail.com</h4>
        </div>

        <div className="contact-card">
          <div className="card-icon">
            <Building2 size={26} />
          </div>

          <h3>Our Office</h3>

          <p>Visit our office for a consultation and coffee.</p>

          <h4>
            Nagercoil, Tamil Nadu
            <br />
           
          </h4>

          <span>India</span>

          {/* <a href="#">
            VIEW ON MAPS
            <ExternalLink size={15} />
          </a> */}
        </div>

        <div className="contact-card">
          <div className="card-icon">
            <Code2 size={26} />
          </div>

          <h3>Support</h3>

          <p>Technical support and developer resources.</p>

          <div className="tags">
            <span>WhatsApp</span>
            <span>Documentation</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </section>
    </main>
  );
}
