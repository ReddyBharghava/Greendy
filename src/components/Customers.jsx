
// import React from 'react'
// import { FiCheck } from "react-icons/fi";
// import Google from '../assets/images/Google.svg'


// const services = [
//   {
//     title: "Campaign development",
//     description:
//       "Create your unique advertisement easily without extra time or money.",
//   },
//   {
//     title: "Campaign launch",
//     description:
//       "Start your commerce with the social media announcement. Get more client without much effort.",
//     active: true,
//   },
//   {
//     title: "Optimization",
//     description:
//       "Save your money with the simple upgrades and enjoy your profit instantly.",
//   },
//   {
//     title: "Measurement",
//     description:
//       "Discover the website activity with the analytics tools simply and unmistakably.",
//   },
// ];
// const Customers = () => {
//   return (
// <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-14 items-center">

//           {/* Left Side */}
//           <div>

//             <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
//               Get More Customers
//               <br />
//               with Google Ads
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">

//               {services.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl p-8 transition duration-300 ${
//                     item.active
//                       ? "bg-white shadow-xl"
//                       : "bg-transparent"
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">

//                     <div className="bg-green-50 rounded-lg p-3">
//                       <FiCheck className="text-green-500 text-xl" />
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                         {item.title}
//                       </h3>

//                       <p className="text-gray-500 leading-7">
//                         {item.description}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* Right Side */}
//           <div className="relative">

//             <img
//               src={Google}
//               alt="Google Ads"
//               className="rounded-3xl w-full h-600px object-cover"
//             />

            

              
              
            

//           </div>

//         </div>

//       </div>
//     </section>

//   )
// }

// export default Customers

import React from "react";
import { FiCheck } from "react-icons/fi";
import Google from "../assets/images/Google.svg";

const services = [
  {
    title: "Campaign development",
    description:
      "Create your unique advertisement easily without extra time or money.",
  },
  {
    title: "Campaign launch",
    description:
      "Start your commerce with the social media announcement. Get more client without much effort.",
    active: true,
  },
  {
    title: "Optimization",
    description:
      "Save your money with the simple upgrades and enjoy your profit instantly.",
  },
  {
    title: "Measurement",
    description:
      "Discover the website activity with the analytics tools simply and unmistakably.",
  },
];

const Customers = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">

      <div className="w-[90%] max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Side */}
          <div className="w-full">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 lg:mb-14 text-center lg:text-left">
              Get More Customers
              <br className="hidden sm:block" />
              with Google Ads
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

              {services.map((item, index) => (
                <div
                  key={index}
                  className={`
                    w-full rounded-2xl
                    p-5 sm:p-6 lg:p-7
                    transition-all duration-300
                    hover:-translate-y-1
                    ${
                      item.active
                        ? "bg-white shadow-xl border border-green-100"
                        : "bg-transparent border border-gray-100"
                    }
                  `}
                >

                  <div className="flex items-start gap-3 sm:gap-4">

                    {/* Check Icon */}
                    <div className="bg-green-50 rounded-lg p-2 sm:p-3 shrink-0">
                      <FiCheck className="text-green-500 text-xl" />
                    </div>

                    {/* Service Content */}
                    <div className="min-w-0">

                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-500 leading-6 sm:leading-7">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right Side - Google Image */}
          <div className="w-full flex justify-center items-center">

            <img
              src={Google}
              alt="Google Ads illustration"
              className="
                w-full
                max-w-[650px]
                h-auto
                object-contain
                rounded-3xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Customers;
