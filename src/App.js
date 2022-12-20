import React from "react";
import Nav from './components/Nav'
import Hero from './components/Hero'
import CTA from './components/CTA'
import Service from "./components/Service";
import Footer from "./components/Footer";
import Contact  from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Service />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
