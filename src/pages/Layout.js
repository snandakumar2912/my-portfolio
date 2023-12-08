import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex flex-wrap justify-center gap-4">
          <li>
            <NavLink
              exact
              to="/"
              className="zoom nav-link" 
              
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/education" className="zoom nav-link"
              >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/projects" className="zoom nav-link"
              >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="zoom nav-link"
              >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Skills" className="zoom nav-link"
              >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/workexperience" className="zoom nav-link"
              >
              Work Experience
            </NavLink>
          </li>
          
        </ul>
      </nav>

      <div className="content">
        {/* Apply zoom transitions */}
        <TransitionGroup>
          <CSSTransition classNames="zoom" timeout={300}>
            <div>
              <Outlet /> {/* Outlet to render nested routes */}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

      {/* Transition styles */}
      <style>
        {`
          /* Transition for CSSTransition zoom effect */
          .zoom-enter {
            opacity: 0;
            transform: scale(0.8);
          }

          .zoom-enter-active {
            opacity: 1;
            transform: scale(3);
            transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          }

          .zoom-exit {
            opacity: 1;
            transform: scale(1);
          }

          .zoom-exit-active {
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
          }

          /* Added the "nav-link" styles */
          .nav-link {
            color: white;
            text-decoration: none;
            padding: 8px 12px;
            transition: background-color 0.3s ease-in-out;
          }

          .nav-link:hover {
            background-color: #4a5568;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
