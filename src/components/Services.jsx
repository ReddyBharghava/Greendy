// import React from 'react'
// import {
//   FaShoppingBag,
//   FaChartLine,
//   FaShieldAlt,
//   FaHeadset,
//   FaArrowRight,
// } from "react-icons/fa";
// import Desktop from '../assets/images/8.svg'
// const features = [
//   {
//     id: 1,
//     icon: <FaShoppingBag size={32} />,
//     title: "We are commerce first",
//     description:
//       "We are improving businesses based on our vast experience.",
//     active: true,
//   },
//   {
//     id: 2,
//     icon: <FaChartLine size={32} />,
//     title: "Our focus is on growth",
//     description:
//       "Our main goal is to make your online store better every day.",
//   },
//   {
//     id: 3,
    
//     icon: <FaShieldAlt size={32} />,
//     title: "Transparency",
//     description:
//       "You can follow all our steps due to strategy and be a part of changes.",
//   },
//   {
//     id: 4,
//     icon: <FaHeadset size={32} />,
//     title: "We're experts",
//     description:
//       "The team of experts includes business owners and advisers.",
//   },
// ];


// const Services = () => {
//   return (
//     <section className="py-20 bg-[#F7FCFA]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="max-w-2xl mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
//             Why top Ecommerce and
//             <br />
//             startup companies choose us :
//           </h2>
//         </div>

//         {/* Content */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* Left Features */}
//           <div>

//             <div className="grid sm:grid-cols-2 gap-8">

//               {features.map((item) => (
//                 <div
//                   key={item.id}
//                   className={`rounded-xl p-8 transition duration-300 ${
//                     item.active
//                       ? "bg-white shadow-lg"
//                       : "bg-transparent"
//                   }`}
//                 >
//                   <div className="text-emerald-500 mb-6">
//                     {item.icon}
//                   </div>

//                   <h3 className="text-2xl font-semibold text-slate-900 mb-4">
//                     {item.title}
//                   </h3>

//                   <p className="text-gray-600 leading-8">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}

//             </div>

//             {/* Button */}
//             <button className="mt-12 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-md flex items-center gap-3 transition">
//               Let's Chat
//               <FaArrowRight />
//             </button>

//           </div>

//           {/* Right Image */}
//           <div className='pl-40'>
//             <img
//               src={Desktop}
//               alt=""
              
//             />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Services

import {
  FaShoppingBag,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

import Desktop from "../assets/images/8.svg";

const features = [
  {
    id: 1,
    icon: <FaShoppingBag size={32} />,
    title: "We are commerce first",
    description:
      "We are improving businesses based on our vast experience.",
    active: true,
  },
  {
    id: 2,
    icon: <FaChartLine size={32} />,
    title: "Our focus is on growth",
    description:
      "Our main goal is to make your online store better every day.",
  },
  {
    id: 3,
    icon: <FaShieldAlt size={32} />,
    title: "Transparency",
    description:
      "You can follow all our steps due to strategy and be a part of changes.",
  },
  {
    id: 4,
    icon: <FaHeadset size={32} />,
    title: "We're experts",
    description:
      "The team of experts includes business owners and advisers.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#F7FCFA] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Why top Ecommerce and
            <br className="hidden sm:block" />
            {" "}startup companies choose us :
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left Features */}
          <div className="w-full">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

              {features.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-xl p-6 sm:p-7 lg:p-8 transition duration-300 ${
                    item.active
                      ? "bg-white shadow-lg"
                      : "bg-transparent"
                  }`}
                >
                  {/* Icon */}
                  <div className="text-emerald-500 mb-4 sm:mb-6">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 leading-7 sm:leading-8">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

            {/* Button */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center sm:justify-start">
              <button
                type="button"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-md flex items-center justify-center gap-3 transition duration-300"
              >
                Let's Chat
                <FaArrowRight />
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center items-center">
            <img
              src={Desktop}
              alt="Ecommerce business services illustration"
              className="w-full max-w-[550px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
