import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import BrandStory from "./components/BrandStory";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import AboutCompany from "./components/AboutCompany";
import Industries from "./components/Industries";
import Contact from "./components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <ProcessSteps />
      <AboutCompany />
      <Industries />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}