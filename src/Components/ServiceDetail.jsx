import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { services } from "../Data/servicesData";
import "./Stylesheet/Service-detail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const Icon = service.icon;

  return (
    <section className="service-detail">
      <div className="sd-inner">
        <Link to="/services" className="sd-back">
          <ArrowLeft size={16} />
          Back to services
        </Link>

        <div className="sd-header">
          <div className="sd-icon-box">
            <Icon size={28} />
          </div>
          <h1>{service.title}</h1>
          <p>{service.overview}</p>
        </div>

        <div className="sd-images">
          <img src={service.images[0]} alt={`${service.title} example 1`} />
          <img src={service.images[1]} alt={`${service.title} example 2`} />
        </div>

        <div className="sd-body">
          <div className="sd-main">
            <h2>What's included</h2>
            <ul className="sd-points">
              {service.points.map((point, i) => (
                <li key={i}>
                  <Check size={16} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h2>How we work on it</h2>
            <div className="sd-process">
              {service.process.map((p, i) => (
                <div className="sd-process-step" key={p.step}>
                  <span className="sd-process-num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{p.step}</h3>
                    <p>{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="sd-sidebar">
            <h3>Stack we use</h3>
            <div className="sd-stack">
              {service.stack.map((tech) => (
                <span key={tech} className="sd-stack-tag">
                  {tech}
                </span>
              ))}
            </div>

            <Link to="/contact" className="sd-cta-btn">
              Start a project
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
