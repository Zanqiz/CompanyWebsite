import { Routes, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import Industries from "./components/Industries";
import Footer from "./components/Footer";
import Contact from "./components/Contact"; // ✅ fix casing

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
