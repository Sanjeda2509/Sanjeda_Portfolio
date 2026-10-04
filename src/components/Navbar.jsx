import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <NavLink className="brand" to="/">
          <svg
            className="logo"
            viewBox="0 0 100 100"
            role="img"
            aria-label="SS hexagon logo"
          >
            <polygon
              points="50,4 91,28 91,72 50,96 9,72 9,28"
              fill="#1f6feb"
            />

            <text
              x="50"
              y="63"
              textAnchor="middle"
              fontFamily="Arial, sans-serif"
              fontSize="34"
              fontWeight="bold"
              fill="#ffffff"
            >
              SS
            </text>
          </svg>

          <span>Sanjeda Sharmin</span>
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>

          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>

          <li>
            <NavLink to="/education">Education</NavLink>
          </li>

          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
