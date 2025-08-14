import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-customGray font-poppins text-white">
      <hr className="bg-customGray opacity-20" />
      <div className="p-10 flex justify-between">
        <p>© 2025 Company, Inc. All rights reserved.</p>
        <div className="flex gap-3 cursor-pointer">
          <Link to="/" target="blank">
            <Instagram />
          </Link>
          <Link to="/" target="blank">
            <Facebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
