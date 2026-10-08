import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";

export default function App() {
  return (
    <main>

      <div className="background">
    <img
      src="/assets/Group-1000003246.webp"
      alt=""
    />
  </div>

      {/* HERO */}
      <section className="hero-page">

        <Navbar />

        <Hero />

        <Stats />

      </section>


      {/* SECOND SECTION */}
      <section className="next-section">

        <div className="next-section-content">

          <p className="section-label">
            WHAT WE DO
          </p>

          <h2>
            DIGITAL EXPERIENCES
            <br />
            THAT MOVE.
          </h2>

          <p className="section-description">
            We create digital experiences that
            connect brands with people through
            design, technology and motion.
          </p>

        </div>

      </section>

    </main>
  );
}
