import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  ShieldCheck,
  LogOut,
  Activity,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import Button from "../components/Button";

const Dashboard = ({darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("nexoraUser");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    setUser(JSON.parse(savedUser));

  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("nexoraUser");
    navigate("/login");
  };

  if (!user) {
    return null;
  }

  const loginDate = new Date(user.loginTime);

  return (
    <div className="page">
      <Navbar   darkMode={darkMode}
  setDarkMode={setDarkMode}/>

      <main className="dashboard-page">

        {/* Dashboard Header */}
        <section className="dashboard-header">
          <div>
            <span className="section-label">DASHBOARD</span>

            <h1>
              Welcome back,
              <span> {user.name}.</span>
            </h1>

            <p>
              Here's a quick overview of your NEXORA account.
            </p>
          </div>

          <Button
            variant="secondary"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            Logout
          </Button>
        </section>

        {/* Profile Card */}
        <section className="profile-card">
          <div className="profile-avatar">
            <UserRound size={30} />
          </div>

          <div className="profile-info">
            <span className="section-label">ACCOUNT</span>

            <h2>{user.name}</h2>

            <div className="profile-email">
              <Mail size={17} />
              <span>{user.email}</span>
            </div>
          </div>

          <div className="account-status">
            <ShieldCheck size={18} />
            <span>Active Account</span>
          </div>
        </section>

        {/* Statistics */}
        <section className="dashboard-grid">

          <DashboardCard
            icon={<ShieldCheck size={22} />}
            title="Account Status"
            value="Active"
            description="Your account is currently active."
          />

          <DashboardCard
            icon={<Activity size={22} />}
            title="Security"
            value="Protected"
            description="Your account session is protected."
          />

          <DashboardCard
            icon={<Clock3 size={22} />}
            title="Last Login"
            value={loginDate.toLocaleDateString()}
            description={loginDate.toLocaleTimeString()}
          />

        </section>

        {/* Activity */}
        <section className="activity-section">

          <div className="section-heading-row">
            <div>
              <span className="section-label">RECENT ACTIVITY</span>

              <h2>Your latest account activity</h2>
            </div>

            <Activity size={22} />
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <LogOut size={19} />
            </div>

            <div className="activity-content">
              <h3>Successful Login</h3>

              <p>
                You successfully signed in to your NEXORA account.
              </p>
            </div>

            <ArrowUpRight size={19} />
          </div>

          <div className="activity-item">
            <div className="activity-icon">
              <ShieldCheck size={19} />
            </div>

            <div className="activity-content">
              <h3>Account Protected</h3>

              <p>
                Your current session is active and protected.
              </p>
            </div>

            <ArrowUpRight size={19} />
          </div>

        </section>

        {/* Bottom CTA */}
        <section className="dashboard-cta">
          <div>
            <span className="section-label">NEXORA</span>

            <h2>
              Your experience,
              <span> your way.</span>
            </h2>

            <p>
              Explore the platform and discover everything NEXORA has to offer.
            </p>
          </div>

          <Button
            onClick={() => navigate("/features")}
          >
            Explore Features
            <ArrowUpRight size={18} />
          </Button>
        </section>

      </main>
    </div>
  );
};

export default Dashboard;