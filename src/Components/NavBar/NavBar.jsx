import React from "react";
import "./navbar.scss";

import { navLinks } from "../../data/nav";

import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <nav className="aside-nav">
      <ul className="d-flex justify-content-around flex-row-reverse m-0">
        {navLinks.map((link, i) => {
          return (
            <li key={i} className="py-4">
              <Link
                activeClass="active"
                to={link.id}
                spy={true}
                hashSpy={true}
                smooth={true}
                duration={500}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
