import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [padding, setPadding] = useState("calc(1rem + 0.5vw)");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 30) {
        setPadding("calc(0.5rem + 0.25vw)");
      } else {
        setPadding("calc(1rem + 0.5vw)");
      }
    });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top" style={{ padding }}>
        <div className="container">
          <NavLink
            to="/Start-Framework"
            className="navbar-brand text-white fw-bolder fs-2 text-uppercase"
          >
            Start Framework
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <NavLink
                  to="/Start-Framework/about"
                  className="nav-link text-white fw-semibold"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/Start-Framework/portfolio"
                  className={"nav-link text-white fw-semibold"}
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  to="/Start-Framework/contact"
                  className={"nav-link text-white fw-semibold"}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
