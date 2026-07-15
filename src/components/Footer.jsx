import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1B2334] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">

          {/* Logo */}
          <div>
            <div className="w-14 h-8 bg-green-500 flex items-center justify-center text-white font-semibold text-sm rounded">
              LOGO
            </div>

            <p className="mt-6 text-gray-300 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Accumsan, pellentesque aenean sed vel non suspendisse.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Menu
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-green-400 cursor-pointer">
                Who we are
              </li>

              <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
                What we do
                <FaChevronDown className="text-xs" />
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Reviews
              </li>

              <li className="hover:text-green-400 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Contact
            </h3>

            <p className="text-green-400 font-semibold text-xl">
              +1 (875) 40 1027
            </p>

            <p className="mt-6 text-green-400 font-semibold text-xl">
              Support@company.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex lg:justify-end gap-6 text-green-400 text-4xl">
            <FaInstagram className="cursor-pointer hover:scale-110 transition" />
            <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-300">

          <p>
            Copyright 2021 Greendy All Right Reserve
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400">
              Term of use
            </a>

            <a href="#" className="hover:text-green-400">
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;