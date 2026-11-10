// import React from "react";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaTwitter,
//   FaChevronDown,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1B2334] text-white pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Top Footer */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-12">

//           {/* Logo */}
//           <div>
//             <div className="w-14 h-8 bg-green-500 flex items-center justify-center text-white font-semibold text-sm rounded">
//               LOGO
//             </div>

//             <p className="mt-6 text-gray-300 leading-8">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Accumsan, pellentesque aenean sed vel non suspendisse.
//             </p>
//           </div>

//           {/* Menu */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">
//               Menu
//             </h3>

//             <ul className="space-y-4 text-gray-300">
//               <li className="hover:text-green-400 cursor-pointer">
//                 Who we are
//               </li>

//               <li className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
//                 What we do
//                 <FaChevronDown className="text-xs" />
//               </li>

//               <li className="hover:text-green-400 cursor-pointer">
//                 Reviews
//               </li>

//               <li className="hover:text-green-400 cursor-pointer">
//                 Blog
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-2xl font-semibold mb-6">
//               Contact
//             </h3>

//             <p className="text-green-400 font-semibold text-xl">
//               +1 (875) 40 1027
//             </p>

//             <p className="mt-6 text-green-400 font-semibold text-xl">
//               Support@company.com
//             </p>
//           </div>

//           {/* Social Icons */}
//           <div className="flex lg:justify-end gap-6 text-green-400 text-4xl">
//             <FaInstagram className="cursor-pointer hover:scale-110 transition" />
//             <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
//             <FaTwitter className="cursor-pointer hover:scale-110 transition" />
//           </div>

//         </div>

//         {/* Bottom Footer */}
//         <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-300">

//           <p>
//             Copyright 2021 Greendy All Right Reserve
//           </p>

//           <div className="flex gap-8 mt-4 md:mt-0">
//             <a href="#" className="hover:text-green-400">
//               Term of use
//             </a>

//             <a href="#" className="hover:text-green-400">
//               Privacy Policy
//             </a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B2334] text-white pt-12 sm:pt-16 pb-6 sm:pb-8">

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 border-b border-gray-700 pb-10 sm:pb-12">

          {/* Logo Section */}
          <div className="text-center sm:text-left">

            <div className="w-14 h-8 bg-green-500 flex items-center justify-center text-white font-semibold text-sm rounded mx-auto sm:mx-0">
              LOGO
            </div>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-gray-300 leading-7 sm:leading-8 max-w-sm mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Accumsan, pellentesque aenean sed vel non suspendisse.
            </p>

          </div>

          {/* Menu Section */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
              Menu
            </h3>

            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300">

              <li>
                <a href="#about" className="hover:text-green-400 transition duration-300">
                  Who we are
                </a>
              </li>

              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-green-400 cursor-pointer transition duration-300">
                What we do
                <FaChevronDown className="text-xs" />
              </li>

              <li>
                <a href="#reviews" className="hover:text-green-400 transition duration-300">
                  Reviews
                </a>
              </li>

              <li>
                <a href="#blog" className="hover:text-green-400 transition duration-300">
                  Blog
                </a>
              </li>

            </ul>

          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">

            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
              Contact
            </h3>

            <a
              href="tel:+1875401027"
              className="text-green-400 font-semibold text-lg sm:text-xl hover:text-green-300 transition duration-300"
            >
              +1 (875) 40 1027
            </a>

            <a
              href="mailto:Support@company.com"
              className="block mt-5 sm:mt-6 text-green-400 font-semibold text-base sm:text-xl break-words hover:text-green-300 transition duration-300"
            >
              Support@company.com
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start lg:justify-end items-start gap-6 text-green-400 text-3xl sm:text-4xl">

            <a href="#" aria-label="Instagram" className="hover:scale-110 hover:text-green-300 transition duration-300">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Facebook" className="hover:scale-110 hover:text-green-300 transition duration-300">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Twitter" className="hover:scale-110 hover:text-green-300 transition duration-300">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7 sm:pt-8 text-gray-300 text-xs sm:text-sm">

          {/* Copyright */}
          <p className="text-center md:text-left">
            Copyright 2021 Greendy All Right Reserve
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8">

            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              Term of use
            </a>

            <a
              href="#"
              className="hover:text-green-400 transition duration-300"
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;