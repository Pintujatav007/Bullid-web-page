import {
  ShieldCheck,
  Layers3,
  Users,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const About = ({darkMode, setDarkMode}) => {
  return (
    <div className="page">
      <Navbar darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <main className="about-page">

        {/* About Hero */}
        <section className="inner-hero">
          <div className="hero-badge">
            <Layers3 size={16} />
            <span>About NEXORA</span>
          </div>

          <h1>
            Built for a
            <span> better digital experience.</span>
          </h1>

          <p>
            NEXORA is a modern digital platform designed to make authentication
            simple, secure and beautiful.
          </p>
        </section>

        {/* Story */}
        <section className="about-story">
          <div className="story-content">
            <span className="section-label">OUR VISION</span>

            <h2>
              Technology should feel
              <span> simple.</span>
            </h2>

            <p>
              We believe that powerful technology does not need to be
              complicated. NEXORA focuses on creating a clean interface,
              smooth interactions and a secure experience for every user.
            </p>

            <p>
              From the first login to the dashboard, every part of NEXORA is
              designed with simplicity and usability in mind.
            </p>

            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Get Started
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="story-visual">
            <div className="story-card">
              <div className="story-icon">
                <ShieldCheck size={30} />
              </div>

              <span>SECURITY FIRST</span>

              <h3>
                Simple.
                <br />
                Secure.
                <br />
                Reliable.
              </h3>

              <div className="story-line"></div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <div className="section-heading">
            <span className="section-label">WHAT WE VALUE</span>

            <h2>
              Designed around
              <span> people.</span>
            </h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <ShieldCheck size={24} />
              </div>

              <h3>Security</h3>

              <p>
                We focus on creating a secure and trustworthy authentication
                experience.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Layers3 size={24} />
              </div>

              <h3>Simplicity</h3>

              <p>
                Clean interfaces and straightforward interactions make NEXORA
                easy to use.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>

              <h3>User First</h3>

              <p>
                Every feature is designed around creating a smooth user
                experience.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;