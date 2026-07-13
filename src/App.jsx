import { Routes, Route } from "react-router-dom";

import Layout from "../src/Components/Layout";
import Hero from "../src/Components/Hero";
import BrandStory from "../src/Components/BrandStory";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import ServiceMain from "./components/Service-main";
import ServiceDetail from "./components/ServiceDetail";
import CTA from "./components/CTA";
import About from "./components/About";

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
