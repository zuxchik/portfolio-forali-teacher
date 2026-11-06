
import { NavLink } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo">
        <span className="navbar-logo-icon">
          <GraduationCap size={23} />
        </span>
        <span>
          Ali<span className="navbar-logo-accent">Teacher</span>
        </span>
      </NavLink>

      <nav className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <NavLink to="/courses" className="navbar-cta">
        Get Started <span>↗</span>
      </NavLink>
    </header>
  );
}

export default Navbar;
