import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocationsDropdown, setShowLocationsDropdown] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLocationsDropdown = () => {
    setShowLocationsDropdown(!showLocationsDropdown);
  };

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-icon" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#locations" onClick={toggleLocationsDropdown}>
              Locations
            </a>
            {showLocationsDropdown && (
              <ul className="locations-dropdown">
                <li>
                  <a href="/academic-building">• Academic Building</a>
                </li>
                <li>
                  <a href="/cyt">• CYT</a>
                </li>
                <li>
                  <a href="/ias">• IAS</a>
                </li>
                <li>
                  <a href="/lsk">• LSK</a>
                </li>
                <li>
                  <a href="/shaw-auditorium">• Shaw Auditorium</a>
                </li>
                <li>
                  <a href="/university-center">• University Center</a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
          <li>
            <a href="/advanced-search">Advanced Search</a>
          </li>
          <li>
            <a href="/campus-map">Campus Map</a>
          </li>
          <li>
            <a href="/legends">Legends</a>
          </li>
          <li>
            <a href="/report-defects">Report Defects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
