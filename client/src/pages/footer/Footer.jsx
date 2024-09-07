import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      {/* Social Media Section */}
      <div className="bg-black text-white py-5 md:py-6 px-0 mt-auto">
        <div className="mx-auto px-8 md:px-16 lg:px-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Find me on</h3>
          <div className="flex justify-center space-x-6">
            {/* Instagram Link */}
            <NavLink
              to="https://www.instagram.com/kritika_15s"
              target="_blank"
              className="text-[#E1306C] text-3xl hover:text-[#E1306C] transition-colors duration-300"
            >
              <FaInstagram />
            </NavLink>

            {/* LinkedIn Link */}
            <NavLink
              to="https://www.linkedin.com/in/kritika-a58855263"
              target="_blank"
              className="text-[#0A66C2] text-3xl hover:text-[#0A66C2] transition-colors duration-300"
            >
              <FaLinkedin />
            </NavLink>

            {/* Facebook Link */}
            <NavLink
              to="https://www.facebook.com"
              target="_blank"
              className="text-[#1877F2] text-3xl hover:text-[#1877F2] transition-colors duration-300"
            >
              <FaFacebook />
            </NavLink>

            {/* Twitter Link */}
            <NavLink
              to="https://twitter.com/@__Kritika___"
              target="_blank"
              className="text-[#1DA1F2] text-3xl hover:text-[#1DA1F2] transition-colors duration-300"
            >
              <FaTwitter />
            </NavLink>

            {/* GitHub Link */}
            <NavLink
              to="https://github.com/KritikaS015"
              target="_blank"
              className="text-white text-3xl hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
