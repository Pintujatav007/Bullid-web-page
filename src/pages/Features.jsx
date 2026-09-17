import {
  ShieldCheck,
  Zap,
  LayoutDashboard,
  LockKeyhole,
  Smartphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";

const Features = ({darkMode, setDarkMode}) => {
  const features = [
    {
      icon: <ShieldCheck size={25} />,
      title: "Secure Authentication",
      description:
        "A clean authentication experience designed with security and simplicity in mind.",
    },
    {
      icon: <Zap size={25} />,
      title: "Fast Experience",
      description:
        "Enjoy smooth interactions and a responsive interface across the entire platform.",
    },
    {
      icon: <LayoutDashboard size={25} />,
      title: "Modern Dashboard",
      description:
        "Access your account information through a clean and organized dashboard.",
    },
    {
      icon: <LockKeyhole size={25} />,
      title: "Privacy Focused",
      description:
        "Your account experience is designed around privacy and responsible data handling.",
    },
    {
      icon: <Smartphone size={25} />,
      title: "Fully Responsive",
      description:
        "NEXORA adapts beautifully to desktops, tablets and mobile devices.",
    },
    {
      icon: <Sparkles size={25} />,
      title: "Premium Interface",
      description:
        "A minimal dark and light interface with subtle animations and polished details.",
    },
  ];

  return (
    <div className="page">
      <Navbar darkMode={darkMode}
  setDarkMode={setDarkMode}/>

      <main className="features-page">

        {/* Hero */}
        <section className="inner-hero">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>NEXORA FEATURES</span>
          </div>

          <h1>
            Everything you need.
            <span> Nothing unnecessary.</span>
          </h1>

          <p>
            Explore the features that make NEXORA a simple, modern and
            premium digital experience.
          </p>
        </section>

        {/* Features Grid */}
        <section className="features-section">
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="feature-highlight">
          <div className="highlight-content">
            <span className="section-label">ONE SIMPLE EXPERIENCE</span>

            <h2>
              Powerful features.
              <br />
              <span>Simple interface.</span>
            </h2>

            <p>
              NEXORA combines useful functionality with a clean interface so
              you can focus on what matters without unnecessary complexity.
            </p>

            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Try NEXORA
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="highlight-visual">
            <div className="feature-orbit">
              <div className="orbit-center">
                <Sparkles size={30} />
              </div>

              <div className="orbit-item orbit-one">
                <ShieldCheck size={20} />
              </div>

              <div className="orbit-item orbit-two">
                <Zap size={20} />
              </div>

              <div className="orbit-item orbit-three">
                <LockKeyhole size={20} />
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Features;