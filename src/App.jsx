import { Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Hero from "./Components/Hero";
import BrandStory from "./Components/BrandStory";
import ProcessSteps from "./Components/ProcessSteps";
import Services from "./Components/Services";
import AboutCompany from "./Components/AboutCompany";
import Industries from "./Components/Industries";
import Contact from "./Components/Contact";
import ServiceMain from "./Components/Service-main";
import ServiceDetail from "./Components/ServiceDetail";
import CTA from "./components/CTA";
import About from "./Components/About";

function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <ProcessSteps />
      <AboutCompany />
      <Industries />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
