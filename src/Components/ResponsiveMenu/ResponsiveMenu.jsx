import { React, useState } from "react";

import { navLinks } from "../../data/nav";

import NavBar from "../NavBar";

import { Link } from "react-scroll";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import "./responsivemenu.scss";
const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="hamburger pe-3">
      <div
        className=" hamburger-btn"
        type="button"
        open={open}
        onClick={() => setOpen(true)}
      >
        {" "}
        <RxHamburgerMenu />
      </div>

      {open ? (
        <nav className="hamburger-menu">
          <div className="close-menu m-2" onClick={() => setOpen(false)}>
            <AiOutlineCloseSquare />
          </div>

          <ul className="d-flex flex-column justify-content-around">
            {navLinks.map((link, i) => {
              return (
                <li key={i} className="py-4">
                  <Link
                    activeClass="active"
                    to={link.id}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    duration={100}
                    onClick={() => setOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : (
        " "
      )}
    </div>
  );
};

export default ResponsiveMenu;
