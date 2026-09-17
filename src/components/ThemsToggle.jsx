import { Sun, Moon } from "lucide-react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      className="theme-btn"
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      {darkMode ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
};

export default ThemeToggle;