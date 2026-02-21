import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./assets/css/navbar.css";

export default function Navbar({ getdata, getlanguage }) {
  const [searchValue, setSearchValue] = useState("");

  // Function to close Bootstrap collapse on link click
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  const handleLinkClick = (category) => {
    getdata(category);
    closeNavbar();
  };

  const handleLanguageClick = (lang) => {
    getlanguage(lang);
    closeNavbar();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        {/* Brand */}
        <NavLink className="navbar-brand text-light" to="/" onClick={closeNavbar}>
          News-App
        </NavLink>

        {/* Hamburger */}
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

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Main Links */}
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/all" onClick={() => handleLinkClick("all")}>
                All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/politics" onClick={() => handleLinkClick("politics")}>
                Politics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/crime" onClick={() => handleLinkClick("crime")}>
                Crime
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/education" onClick={() => handleLinkClick("education")}>
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/science" onClick={() => handleLinkClick("science")}>
                Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/economics" onClick={() => handleLinkClick("economics")}>
                Economics
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/entertainment" onClick={() => handleLinkClick("entertainment")}>
                Entertainment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/technologies" onClick={() => handleLinkClick("technology")}>
                Technology
              </NavLink>
            </li>

            {/* Other Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-light btn btn-link"
                id="otherDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                Other
              </button>
              <ul className="dropdown-menu" aria-labelledby="otherDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/ipl" onClick={() => handleLinkClick("ipl")}>
                    IPL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/cricket" onClick={() => handleLinkClick("cricket")}>
                    Cricket
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sports" onClick={() => handleLinkClick("sports")}>
                    Sports
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Language Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle text-light btn btn-link"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ textDecoration: "none" }}
              >
                Language
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => handleLanguageClick("hi")}>
                    Hindi
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleLanguageClick("en")}>
                    English
                  </button>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Form */}
          <form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              getdata(searchValue);
              setSearchValue("");
              closeNavbar();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}