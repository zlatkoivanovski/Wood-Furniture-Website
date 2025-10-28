import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-customGray text-white font-semibold font-poppins">
      <div className="flex justify-between items-center p-5">
        <Link to="/" className="text-lg">
          Logo
        </Link>
        <ul className="hidden md:flex space-x-5">
          <li>
            <Link to="/gallery" className="hover:text-customYellow">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/customization" className="hover:text-customYellow">
              Customization
            </Link>
          </li>
          <li>
            <Link to="/decors" className="hover:text-customYellow">
              Decors
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-customYellow">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <hr className="bg-customGray opacity-20" />

      {isOpen && (
        <ul className="flex flex-col space-y-3 mt-4 md:hidden">
          <li>
            <Link
              to="/gallery"
              className="hover:text-customYellow"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/customization"
              className="hover:text-customYellow"
              onClick={() => setIsOpen(false)}
            >
              Customization
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-customYellow"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
