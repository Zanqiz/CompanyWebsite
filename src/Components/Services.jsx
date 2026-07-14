import React from "react";

import { Link } from "react-router-dom";

import {
  Code2,
  Globe,
  PenTool,
  ShoppingCart,
  FileText,
  BookOpen,
  Braces,
  Keyboard,
  ArrowRight,
} from "lucide-react";

const FEATURED_SERVICES = [
  {
    key: "custom-software",

    Icon: Code2,

    title: "Custom Software Development",

    body: "Purpose-built software designed around your business workflows.",
  },

  {
    key: "web-app",

    Icon: Globe,

    title: "Web Application Development",

    body: "Fast, scalable web applications built with modern technologies.",
  },

  {
    key: "ui-ux",

    Icon: PenTool,

    title: "UI / UX Design",

    body: "Beautiful interfaces that deliver intuitive user experiences.",
  },

  {
    key: "ecommerce",

    Icon: ShoppingCart,

    title: "E-Commerce Solutions",

    body: "Online stores optimized for performance, sales, and growth.",
  },

  {
    key: "pdf-remediation",

    Icon: FileText,

    title: "PDF Accessibility",

    body: "Accessible PDF documents compliant with WCAG and PDF/UA standards.",
  },

  {
    key: "epub",

    Icon: BookOpen,

    title: "EPUB Production",

    body: "Professional EPUB 2 & EPUB 3 conversion for digital publishing.",
  },

  {
    key: "xml",

    Icon: Braces,

    title: "XML Conversion",

    body: "Accurate XML tagging and structured content conversion services.",
  },

  {
    key: "data-entry",

    Icon: Keyboard,

    title: "Data Processing",

    body: "Reliable data entry and processing with quality assurance.",
  },
];

function ServiceCard({ service }) {
  const Icon = service.Icon;

  return (
    <article className="zq-service-card">
      <div className="zq-service-icon">
        <Icon size={28} />
      </div>

      <h3>{service.title}</h3>

      <p>{service.body}</p>

      <Link to="/services" className="zq-service-link">
        Learn More
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

export default function Services() {
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
          From software development and accessibility compliance to digital
          publishing and business process support, Zanqiz delivers reliable,
          scalable, and innovative solutions that help organizations achieve
          their digital goals.
        </p>

        <div className="zq-services-grid">
          {FEATURED_SERVICES.map((service) => (
            <ServiceCard key={service.key} service={service} />
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
