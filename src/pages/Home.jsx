import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = ({darkMode,setDarkMode}) => {
  return (
    <div className="page">
      <Navbar 


 darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Premium Digital Experience</span>
            </div>

            <h1>
              Your Digital World,
              <span> Simplified.</span>
            </h1>

            <p>
              NEXORA brings authentication, security and a modern digital
              experience together in one powerful platform.
            </p>

            <div className="hero-buttons">
              <Button
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                Get Started
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  window.location.href = "/features";
                }}
              >
                Explore Features
              </Button>
            </div>

            <div className="hero-trust">
              <div>
                <ShieldCheck size={18} />
                <span>Secure</span>
              </div>

              <div>
                <Zap size={18} />
                <span>Fast</span>
              </div>

              <div>
                <Sparkles size={18} />
                <span>Modern</span>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="premium-card">
              <div className="card-header">
                <div className="mini-logo">N</div>

                <span>NEXORA</span>

                <div className="online-dot"></div>
              </div>

              <div className="visual-content">
                <span className="small-label">WELCOME BACK</span>

                <h2>
                  Experience
                  <br />
                  something better.
                </h2>

                <p>
                  A cleaner, faster and smarter way to manage your digital
                  experience.
                </p>
              </div>

              <div className="visual-footer">
                <span>SECURE ACCESS</span>
                <span>01 / 04</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stat">
            <h3>99.9%</h3>
            <p>Reliable Experience</p>
          </div>

          <div className="stat">
            <h3>24/7</h3>
            <p>Access Anywhere</p>
          </div>

          <div className="stat">
            <h3>100%</h3>
            <p>Responsive Design</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="home-cta">
          <span>READY TO BEGIN?</span>

          <h2>
            Step into the
            <br />
            <span>NEXORA experience.</span>
          </h2>

          <Button
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Create Your Experience
            <ArrowRight size={18} />
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Home;