import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    } else if (location.pathname === "/add") {
      setActiveTab("addContact");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="logo" onClick={() => navigate("/")}>
        Contact App
      </p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "addContact" ? "active" : ""}`}
            onClick={() => setActiveTab("addContact")}
          >
            Add Contact
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
