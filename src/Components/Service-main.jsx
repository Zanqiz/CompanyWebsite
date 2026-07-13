import { useState } from "react";
import { Link } from "react-router-dom";
import "./Stylesheet/Service-main.css";
import "../styles.css";
import CTA from "./CTA";
import { ArrowRight } from "lucide-react";
import { services, filters } from "../data/servicesData";

export default function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  return (
    <section className="services-section">
      <div className="heading">
        <h1>
          Expertise that scales with your
          <br />
          ambition.
        </h1>
        <p>
          We bridge the gap between high-level vision and granular operational
          reality. Our specialized teams deliver precision-engineered solutions
          for complex technical landscapes.
        </p>
      </div>

      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={activeFilter === filter.key ? "active" : ""}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      <div className="services-grid">
        {filteredServices.map((service) => {
          const Icon = service.icon;
          return (
            <div className="card" key={service.slug}>
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`}>
                View details
                <ArrowRight size={15} />
              </Link>
            </div>
          );
        })}
      </div>

      <CTA />
    </section>
  );
}
