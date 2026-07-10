
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import Industries from "./components/Industries";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="zq-root">
      <Navbar />
      <Hero />
      <BrandStory />
      <Services />
      <ProcessSteps />
      <AboutCompany />
      <Industries />
      <Footer />
    </div>
  );
}
