
// // import { useState } from "react";
// // import {
// //   FaChevronDown,
// //   FaArrowRight,
// // } from "react-icons/fa";
// // import {
// //   HiOutlinePresentationChartBar,
// //   HiOutlineSpeakerphone,
// //   HiOutlineShoppingBag,
// //   HiOutlineDeviceMobile,
// // } from "react-icons/hi";
// // import logo from '../assets/images/1.svg'
// // import ThemeToggle from "./ThemeToggle";

// // const services = [
// //   {
// //     icon: <HiOutlinePresentationChartBar size={30} />,
// //     title: "Design",
// //     description: "Create & develop your brand",
// //     active: true,
// //   },
// //   {
// //     icon: <HiOutlineSpeakerphone size={30} />,
// //     title: "Digital Advertising",
// //     description: "We grow your online visibility",
// //   },
// //   {
// //     icon: <HiOutlineShoppingBag size={30} />,
// //     title: "SEO",
// //     description: "We grow your website position",
// //   },
// //   {
// //     icon: <HiOutlineDeviceMobile size={30} />,
// //     title: "Social Media",
// //     description: "We manage your social media",
// //   },
// // ];


// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="sticky top-0 z-40 bg-white/95 py-4 shadow-sm backdrop-blur transition-colors dark:bg-slate-950/95 dark:shadow-black/20">
// //       <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
// //           <img src={logo} alt="Greendy" className="h-8 w-auto" />
// //         {/* Menu */}
// //         <ul className="hidden items-center justify-center gap-6 font-medium text-gray-800 dark:text-slate-200 md:flex">

// //           <li className="cursor-pointer hover:text-emerald-500">
// //             Who we are
// //           </li>

// //           {/* Dropdown */}
// //           <li
// //             className="relative"
// //             onMouseEnter={() => setOpen(true)}
// //             onMouseLeave={() => setOpen(false)}
// //           >
// //             <button className="flex flex-row items-center gap-2 text-emerald-500 font-semibold">
// //               What we do
// //               <FaChevronDown size={12} />
// //             </button>

// //             {open && (
// //               <div className="absolute left-1/2 z-50 mt-5 w-80 -translate-x-1/2 rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">

// //                 {services.map((service, index) => (
// //                   <div
// //                     key={index}
// //                     className={`flex items-start justify-between p-4 rounded-xl mb-3 transition ${
// //                       service.active
// //                         ? "bg-emerald-50 dark:bg-emerald-950/50"
// //                         : "hover:bg-gray-50 dark:hover:bg-slate-800"
// //                     }`}
// //                   >

// //                     <div className="flex gap-4">

// //                       <div className="text-emerald-500">
// //                         {service.icon}
// //                       </div>

// //                       <div>
// //                         <h4 className="font-semibold text-gray-900 dark:text-white">
// //                           {service.title}
// //                         </h4>

// //                         <p className="text-sm text-gray-500 dark:text-slate-400">
// //                           {service.description}
// //                         </p>
// //                       </div>

// //                     </div>

// //                     {service.active && (
// //                       <FaArrowRight className="text-emerald-500 mt-2" />
// //                     )}

// //                   </div>
// //                 ))}

// //               </div>
// //             )}
// //           </li>

// //           <li className="cursor-pointer hover:text-emerald-500">
// //             Reviews
// //           </li>

// //           <li className="cursor-pointer hover:text-emerald-500">
// //             Blog
// //           </li>

// //         </ul>

// //        <div className="flex items-center gap-3">
// //          <button className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 lg:flex">Get your free review <FaArrowRight/></button>
// //          <ThemeToggle />
// //        </div>
// //       </div>
// //     </nav>
// //   );
// // }

// import { useState } from "react";

// import {
//   FaChevronDown,
//   FaArrowRight,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// import {
//   HiOutlinePresentationChartBar,
//   HiOutlineSpeakerphone,
//   HiOutlineShoppingBag,
//   HiOutlineDeviceMobile,
// } from "react-icons/hi";

// import logo from "../assets/images/1.svg";
// import ThemeToggle from "./ThemeToggle";

// const services = [
//   {
//     icon: <HiOutlinePresentationChartBar size={30} />,
//     title: "Design",
//     description: "Create & develop your brand",
//     active: true,
//   },
//   {
//     icon: <HiOutlineSpeakerphone size={30} />,
//     title: "Digital Advertising",
//     description: "We grow your online visibility",
//   },
//   {
//     icon: <HiOutlineShoppingBag size={30} />,
//     title: "SEO",
//     description: "We grow your website position",
//   },
//   {
//     icon: <HiOutlineDeviceMobile size={30} />,
//     title: "Social Media",
//     description: "We manage your social media",
//   },
// ];

// const Navbar= () => {
//   const [open, setOpen] = useState(false);
//   const [mobileMenu, setMobileMenu] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 z-[100] w-full bg-white/95 dark:bg-slate-950/95 py-4 shadow-sm backdrop-blur transition-colors duration-300 dark:shadow-black/20">

//       <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">

//         {/* Logo */}
//         <a href="/" className="shrink-0">
//           <img
//             src={logo}
//             alt="Greendy"
//             className="h-8 sm:h-9 w-auto"
//           />
//         </a>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex items-center justify-center gap-5 lg:gap-7 font-medium text-gray-800 dark:text-slate-200">

//           <li>
//             <a
//               href="#about"
//               className="hover:text-emerald-500 transition duration-300 whitespace-nowrap"
//             >
//               Who we are
//             </a>
//           </li>

//           {/* Services Dropdown */}
//           <li
//             className="relative"
//             onMouseEnter={() => setOpen(true)}
//             onMouseLeave={() => setOpen(false)}
//           >
//             <button
//               type="button"
//               onClick={() => setOpen(!open)}
//               aria-expanded={open}
//               className="flex items-center gap-2 text-emerald-500 font-semibold whitespace-nowrap"
//             >
//               What we do

//               <FaChevronDown
//                 size={12}
//                 className={`transition-transform duration-300 ${
//                   open ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {open && (
//               <div className="absolute left-1/2 top-full z-50 mt-4 w-72 lg:w-80 -translate-x-1/2 rounded-xl bg-white p-4 lg:p-5 shadow-2xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">

//                 {services.map((service, index) => (
//                   <div
//                     key={index}
//                     className={`flex items-start justify-between gap-2 p-3 lg:p-4 rounded-xl mb-2 last:mb-0 transition duration-300 ${
//                       service.active
//                         ? "bg-emerald-50 dark:bg-emerald-950/50"
//                         : "hover:bg-gray-50 dark:hover:bg-slate-800"
//                     }`}
//                   >

//                     <div className="flex items-start gap-3">

//                       <div className="text-emerald-500 shrink-0">
//                         {service.icon}
//                       </div>

//                       <div>
//                         <h4 className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white">
//                           {service.title}
//                         </h4>

//                         <p className="text-xs lg:text-sm text-gray-500 dark:text-slate-400 mt-1">
//                           {service.description}
//                         </p>
//                       </div>

//                     </div>

//                     {service.active && (
//                       <FaArrowRight className="text-emerald-500 mt-2 shrink-0" />
//                     )}

//                   </div>
//                 ))}

//               </div>
//             )}
//           </li>

//           <li>
//             <a
//               href="#reviews"
//               className="hover:text-emerald-500 transition duration-300"
//             >
//               Reviews
//             </a>
//           </li>

//           <li>
//             <a
//               href="#blog"
//               className="hover:text-emerald-500 transition duration-300"
//             >
//               Blog
//             </a>
//           </li>

//         </ul>

//         {/* Right Side */}
//         <div className="flex items-center gap-3 sm:gap-4">

//           {/* Free Review Button */}
//           <button
//             type="button"
//             className="hidden lg:flex items-center gap-2 rounded-full bg-emerald-500 px-4 xl:px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 whitespace-nowrap"
//           >
//             Get your free review
//             <FaArrowRight />
//           </button>

//           {/* Theme Toggle */}
//           <ThemeToggle />

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className="md:hidden text-gray-800 dark:text-white text-2xl p-2"
//             aria-label={mobileMenu ? "Close menu" : "Open menu"}
//             aria-expanded={mobileMenu}
//           >
//             {mobileMenu ? <FaTimes /> : <FaBars />}
//           </button>

//         </div>

//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenu && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 shadow-xl border-t border-gray-100 dark:border-slate-800">

//           <div className="flex flex-col px-6 py-5 gap-5 text-gray-800 dark:text-slate-200 font-medium">

//             <a
//               href="#about"
//               onClick={() => setMobileMenu(false)}
//               className="hover:text-emerald-500 transition"
//             >
//               Who we are
//             </a>

//             {/* Mobile Services Dropdown */}
//             <div>

//               <button
//                 type="button"
//                 onClick={() => setOpen(!open)}
//                 className="flex items-center justify-between w-full text-emerald-500 font-semibold"
//                 aria-expanded={open}
//               >
//                 What we do

//                 <FaChevronDown
//                   size={12}
//                   className={`transition-transform duration-300 ${
//                     open ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {open && (
//                 <div className="mt-4 space-y-2">

//                   {services.map((service, index) => (
//                     <div
//                       key={index}
//                       className={`flex items-start gap-3 p-3 rounded-lg ${
//                         service.active
//                           ? "bg-emerald-50 dark:bg-emerald-950/50"
//                           : "hover:bg-gray-50 dark:hover:bg-slate-900"
//                       }`}
//                     >

//                       <div className="text-emerald-500 shrink-0">
//                         {service.icon}
//                       </div>

//                       <div>
//                         <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
//                           {service.title}
//                         </h4>

//                         <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
//                           {service.description}
//                         </p>
//                       </div>

//                     </div>
//                   ))}

//                 </div>
//               )}

//             </div>

//             <a
//               href="#reviews"
//               onClick={() => setMobileMenu(false)}
//               className="hover:text-emerald-500 transition"
//             >
//               Reviews
//             </a>

//             <a
//               href="#blog"
//               onClick={() => setMobileMenu(false)}
//               className="hover:text-emerald-500 transition"
//             >
//               Blog
//             </a>

//             {/* Mobile CTA */}
//             <button
//               type="button"
//               className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition"
//             >
//               Get your free review
//               <FaArrowRight />
//             </button>

//           </div>

//         </div>
//       )}

//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";

import {
  FaChevronDown,
  FaArrowRight,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import {
  HiOutlinePresentationChartBar,
  HiOutlineSpeakerphone,
  HiOutlineShoppingBag,
  HiOutlineDeviceMobile,
} from "react-icons/hi";

import logo from "../assets/images/1.svg";
import ThemeToggle from "./ThemeToggle";
import FreeReviewModal from "./FreeReviewModal";

const services = [
  {
    icon: <HiOutlinePresentationChartBar size={30} />,
    title: "Design",
    description: "Create & develop your brand",
    active: true,
  },
  {
    icon: <HiOutlineSpeakerphone size={30} />,
    title: "Digital Advertising",
    description: "We grow your online visibility",
  },
  {
    icon: <HiOutlineShoppingBag size={30} />,
    title: "SEO",
    description: "We grow your website position",
  },
  {
    icon: <HiOutlineDeviceMobile size={30} />,
    title: "Social Media",
    description: "We manage your social media",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  // Open Free Review Popup
  const handleOpenReview = () => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
    setShowReviewModal(true);
  };

  // Close Mobile Menu
  const handleCloseMobileMenu = () => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-[100] w-full bg-white/95 dark:bg-slate-950/95 py-4 shadow-sm backdrop-blur transition-colors duration-300 dark:shadow-black/20">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">

          {/* Logo */}
          <a href="/" className="shrink-0">
            <img
              src={logo}
              alt="Greendy"
              className="h-8 sm:h-9 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center gap-5 lg:gap-7 font-medium text-gray-800 dark:text-slate-200">

            {/* About */}
            <li>
              <a
                href="#about"
                className="hover:text-emerald-500 transition duration-300 whitespace-nowrap"
              >
                Who we are
              </a>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="flex items-center gap-2 text-emerald-500 font-semibold whitespace-nowrap"
              >
                What we do

                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open && (
                <div className="absolute left-1/2 top-full z-50 mt-4 w-72 lg:w-80 -translate-x-1/2 rounded-xl bg-white p-4 lg:p-5 shadow-2xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">

                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`flex items-start justify-between gap-2 p-3 lg:p-4 rounded-xl mb-2 last:mb-0 transition duration-300 ${
                        service.active
                          ? "bg-emerald-50 dark:bg-emerald-950/50"
                          : "hover:bg-gray-50 dark:hover:bg-slate-800"
                      }`}
                    >

                      <div className="flex items-start gap-3">

                        <div className="text-emerald-500 shrink-0">
                          {service.icon}
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm lg:text-base text-gray-900 dark:text-white">
                            {service.title}
                          </h4>

                          <p className="text-xs lg:text-sm text-gray-500 dark:text-slate-400 mt-1">
                            {service.description}
                          </p>
                        </div>

                      </div>

                      {service.active && (
                        <FaArrowRight className="text-emerald-500 mt-2 shrink-0" />
                      )}

                    </div>
                  ))}

                </div>
              )}
            </li>

            {/* Reviews */}
            <li>
              <a
                href="#reviews"
                className="hover:text-emerald-500 transition duration-300"
              >
                Reviews
              </a>
            </li>

            {/* Blog */}
            <li>
              <a
                href="#blog"
                className="hover:text-emerald-500 transition duration-300"
              >
                Blog
              </a>
            </li>

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Desktop Free Review Button */}
            <button
              type="button"
              onClick={handleOpenReview}
              className="hidden lg:flex items-center gap-2 rounded-full bg-emerald-500 px-4 xl:px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600 whitespace-nowrap"
            >
              Get your free review
              <FaArrowRight />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-gray-800 dark:text-white text-2xl p-2"
              aria-label={mobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenu}
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenu && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 shadow-xl border-t border-gray-100 dark:border-slate-800">

            <div className="flex flex-col px-6 py-5 gap-5 text-gray-800 dark:text-slate-200 font-medium">

              {/* About */}
              <a
                href="#about"
                onClick={handleCloseMobileMenu}
                className="hover:text-emerald-500 transition"
              >
                Who we are
              </a>

              {/* Mobile Services Dropdown */}
              <div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileServicesOpen(!mobileServicesOpen)
                  }
                  className="flex items-center justify-between w-full text-emerald-500 font-semibold"
                  aria-expanded={mobileServicesOpen}
                >
                  What we do

                  <FaChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="mt-4 space-y-2">

                    {services.map((service, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 p-3 rounded-lg ${
                          service.active
                            ? "bg-emerald-50 dark:bg-emerald-950/50"
                            : "hover:bg-gray-50 dark:hover:bg-slate-900"
                        }`}
                      >

                        <div className="text-emerald-500 shrink-0">
                          {service.icon}
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                            {service.title}
                          </h4>

                          <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">
                            {service.description}
                          </p>
                        </div>

                      </div>
                    ))}

                  </div>
                )}

              </div>

              {/* Reviews */}
              <a
                href="#reviews"
                onClick={handleCloseMobileMenu}
                className="hover:text-emerald-500 transition"
              >
                Reviews
              </a>

              {/* Blog */}
              <a
                href="#blog"
                onClick={handleCloseMobileMenu}
                className="hover:text-emerald-500 transition"
              >
                Blog
              </a>

              {/* Mobile Free Review Button */}
              <button
                type="button"
                onClick={handleOpenReview}
                className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition"
              >
                Get your free review
                <FaArrowRight />
              </button>

            </div>

          </div>
        )}

      </nav>

      {/* FREE WEBSITE CHECKUP POPUP */}
      {showReviewModal && (
        <FreeReviewModal
          onClose={() => setShowReviewModal(false)}
        />
      )}

    </>
  );
};

export default Navbar;
