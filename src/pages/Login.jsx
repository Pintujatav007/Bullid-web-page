import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Login = ({darkMode, setDarkMode }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const userData = {
      name,
      email,
      rememberMe,
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem("nexoraUser", JSON.stringify(userData));

    setSuccess(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="page">
      <Navbar  darkMode={darkMode}
  setDarkMode={setDarkMode}/>

      <main className="login-page">
        <div className="login-container">

          {/* Left Content */}
          <div className="login-intro">
            <div className="hero-badge">
              <LockKeyhole size={16} />
              <span>SECURE ACCESS</span>
            </div>

            <h1>
              Welcome to
              <span> NEXORA.</span>
            </h1>

            <p>
              Sign in to continue your premium digital experience and access
              your personal dashboard.
            </p>

            <div className="login-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Simple authentication</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Modern dashboard</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Responsive experience</span>
              </div>
            </div>
          </div>

          {/* Login Card */}
          <div className="login-card">

            <div className="login-card-header">
              <div className="login-icon">
                <LockKeyhole size={24} />
              </div>

              <h2>Sign in</h2>

              <p>Enter your details to access NEXORA.</p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="input-group">
                <label htmlFor="name">Full Name</label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div className="input-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="input-group">
                <label htmlFor="password">Password</label>

                <div className="password-wrapper">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Show or hide password"
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </div>
              </div>

              {/* Options */}
              <div className="login-options">
                <label className="remember">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />

                  <span>Remember me</span>
                </label>

                <button
                  type="button"
                  className="forgot-btn"
                  onClick={() => alert("Password recovery coming soon.")}
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && <div className="form-error">{error}</div>}

              {/* Success */}
              {success && (
                <div className="form-success">
                  <CheckCircle2 size={18} />
                  Login successful! Redirecting...
                </div>
              )}

              {/* Submit */}
              <Button type="submit">
                Login to NEXORA
                <ArrowRight size={18} />
              </Button>
            </form>

            <div className="login-footer">
              <span>New to NEXORA?</span>

              <Link to="/about">
                Learn more
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;