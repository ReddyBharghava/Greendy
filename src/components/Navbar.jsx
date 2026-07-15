
import { useState } from "react";
import {
  FaChevronDown,
  FaArrowRight,
} from "react-icons/fa";
import {
  HiOutlinePresentationChartBar,
  HiOutlineSpeakerphone,
  HiOutlineShoppingBag,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import logo from '../assets/images/1.svg'
import ThemeToggle from "./ThemeToggle";

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


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 py-4 shadow-sm backdrop-blur transition-colors dark:bg-slate-950/95 dark:shadow-black/20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
          <img src={logo} alt="Greendy" className="h-8 w-auto" />
        {/* Menu */}
        <ul className="hidden items-center justify-center gap-6 font-medium text-gray-800 dark:text-slate-200 md:flex">

          <li className="cursor-pointer hover:text-emerald-500">
            Who we are
          </li>

          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="flex flex-row items-center gap-2 text-emerald-500 font-semibold">
              What we do
              <FaChevronDown size={12} />
            </button>

            {open && (
              <div className="absolute left-1/2 z-50 mt-5 w-80 -translate-x-1/2 rounded-xl bg-white p-5 shadow-2xl dark:bg-slate-900 dark:ring-1 dark:ring-slate-700">

                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex items-start justify-between p-4 rounded-xl mb-3 transition ${
                      service.active
                        ? "bg-emerald-50 dark:bg-emerald-950/50"
                        : "hover:bg-gray-50 dark:hover:bg-slate-800"
                    }`}
                  >

                    <div className="flex gap-4">

                      <div className="text-emerald-500">
                        {service.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {service.title}
                        </h4>

                        <p className="text-sm text-gray-500 dark:text-slate-400">
                          {service.description}
                        </p>
                      </div>

                    </div>

                    {service.active && (
                      <FaArrowRight className="text-emerald-500 mt-2" />
                    )}

                  </div>
                ))}

              </div>
            )}
          </li>

          <li className="cursor-pointer hover:text-emerald-500">
            Reviews
          </li>

          <li className="cursor-pointer hover:text-emerald-500">
            Blog
          </li>

        </ul>

       <div className="flex items-center gap-3">
         <button className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 lg:flex">Get your free review <FaArrowRight/></button>
         <ThemeToggle />
       </div>
      </div>
    </nav>
  );
}
