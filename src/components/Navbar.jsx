/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="nav-container container-fluid">
      {/* logo */}
      <div>
        <NavLink
          to="/"
          end
          className="logo"
          href="#"
          style={{
            color: `${isDarkMode ? "#fff" : "#000"}`,
          }}
        >
          Impul
          <span className="text-success" style={{ display: "inline" }}>
            $
          </span>
          ive
        </NavLink>
      </div>

      {/* NavItems */}
      <div className="navLinks_container">
        <NavLink
          end
          to="/"
          style={{
            fontSize: "18px",
            color: "inherit",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Home
        </NavLink>
        <NavLink
          end
          to="/about"
          style={{
            fontSize: "18px",
            color: "inherit",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          About
        </NavLink>
        <NavLink
          end
          to="/account"
          style={{
            fontSize: "18px",
            color: "inherit",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Account
        </NavLink>
        <NavLink
          end
          to="/class"
          style={{
            fontSize: "18px",
            color: "inherit",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Class
        </NavLink>
        <NavLink
          end
          to="/login"
          style={{
            fontSize: "18px",
            color: "inherit",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Login
        </NavLink>
      </div>

      {/* Darkmode Lightmode */}
      <div
        className="d-none d-md-block"
        style={{ cursor: "pointer", fontSize: "25px" }}
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i className="fa-solid fa-moon"></i>
        )}
        <style>{`
        body {
          background-color: ${isDarkMode ? "#212529" : "#f8f9fa"};
          color: ${isDarkMode ? "#fff" : "#212529"};
        }
      `}</style>{" "}
      </div>

      {/* Navbar Toggle Btn */}
      <div className="d-block d-md-none" onClick={() => setSidebar(!sidebar)}>
        <i
          className="fa-solid fa-bars-staggered"
          style={{
            fontSize: "25px",
            cursor: "pointer",
          }}
        ></i>
      </div>

      {/* mobile navbar */}
      <div
        className="mobile_navbar"
        style={{
          height: "100svh",
          width: "60%",
          position: "fixed",
          right: `${sidebar ? "0" : "-100%"}`,
          top: "0",
          backgroundColor: `${isDarkMode ? "#212529" : "#f8f9fa"}`,
          transition: "all 0.4s ease",
        }}
      >
        <div className="navLinks_container">
          <NavLink
            end
            to="/"
            style={{
              fontSize: "18px",
              color: `${isDarkMode ? "#fff" : "#000"}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Home
          </NavLink>
          <NavLink
            end
            to="/about"
            style={{
              fontSize: "18px",
              color: `${isDarkMode ? "#fff" : "#000"}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            About
          </NavLink>
          <NavLink
            end
            to="/account"
            style={{
              fontSize: "18px",
              color: `${isDarkMode ? "#fff" : "#000"}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Account
          </NavLink>
          <NavLink
            end
            to="/class"
            style={{
              fontSize: "18px",
              color: `${isDarkMode ? "#fff" : "#000"}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Class
          </NavLink>
          <NavLink
            end
            to="/login"
            style={{
              fontSize: "18px",
              color: `${isDarkMode ? "#fff" : "#000"}`,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Login
          </NavLink>
        </div>

        <div className="close" onClick={() => setSidebar(!sidebar)}>
          <i
            className="fa-solid fa-xmark"
            style={{
              color: `${isDarkMode ? "#fff" : "#000"}`,
              fontSize: "25px",
            }}
          ></i>
        </div>

        <div
          style={{
            cursor: "pointer",
            fontSize: "25px",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-solid fa-moon"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
