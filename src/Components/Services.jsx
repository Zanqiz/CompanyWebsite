import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/servicesData";

// One or two representative services per category for the homepage preview
const FEATURED_SLUGS = [
  "web-application-development",
  "ui-ux-design",
  "ecommerce-solutions",
  "website-design-development",
  "pdf-accessibility-remediation",
  "wcag-pdfua-section508-compliance",
  "data-entry-processing",
  "document-conversion",
];

const FEATURED_SERVICES = FEATURED_SLUGS.map((slug) =>
  services.find((s) => s.slug === slug)
).filter(Boolean);

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="zq-service-card">
      <div className="zq-service-icon">
        <Icon size={28} />
      </div>

      <h3>{service.title}</h3>

      <p>{service.description}</p>

      <Link to={`/services/${service.slug}`} className="zq-service-link">
        Learn More
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

export default function Service() {
  return (
    <section className="zq-services" id="services">
      <div className="zq-services-inner">
        <span className="zq-eyebrow">OUR SERVICES</span>

        <h2>
          Solutions Built Around
          <br />
          Your Business
        </h2>

        <p className="zq-services-sub">
          We provide modern technology, publishing, and business process
          solutions that help organizations improve efficiency, streamline
          operations, and accelerate growth.
        </p>

        <div className="zq-services-grid">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="zq-services-footer">
          <Link to="/services" className="zq-view-all">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}