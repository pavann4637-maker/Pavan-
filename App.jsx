import React from "react";
import "./App.css";
import AboutUs from "./AboutUs";

export default function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature home. Discover beautiful plants and create a greener,
            happier space with Paradise Nursery.
          </p>
          <a className="get-started" href="#about">Get Started</a>
        </div>
      </section>
      <AboutUs />
    </main>
  );
}
