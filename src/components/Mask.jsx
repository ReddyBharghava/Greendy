

// import React from 'react'
// import { FiCheck } from "react-icons/fi";
// import Design from '../assets/images/mask.svg'

// const services = [
//   {
//     title: "Strategy and Research",
//     description:
//       "Based on deep researching we create the best strategy due to your needs.",
//   },
//   {
//     title: "Development",
//     description:
//       "We create the best solution relying on own platforms, the experience of our partners and modern tendency.",
//     active: true,
//   },
//   {
//     title: "Strategy & Visual Design",
//     description:
//       "It is possible to see the future result with the prognosticate ground plan.",
//   },
//   {
//     title: "Conversion Optimization",
//     description:
//       "We teach your call-center team how to talk efficiently to your clients.",
//   },
// ];

// const Mask = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-gray-900">
//             What We Do
//           </h2>

//           <p className="mt-5 text-gray-500 text-lg max-w-3xl mx-auto">
//             We are flexible and cope with multiple tasks to make you a leader
//             in the market.
//           </p>
//         </div>

//         {/* Main Content */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Image */}
//           <div className="relative">

//             <img
//               src={Design}
//               alt=""
//               className="rounded-3xl w-full h-[520px] object-cover"
//             />

//             {/* Floating Card */}
//             <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-5 w-64">

//               <div className="flex space-x-2 mb-4">
//                 <span className="w-3 h-3 rounded-full bg-green-400"></span>
//                 <span className="w-3 h-3 rounded-full bg-gray-300"></span>
//                 <span className="w-3 h-3 rounded-full bg-gray-300"></span>
//               </div>

//               <div className="border rounded-lg p-4">

//                 <div className="w-20 h-16 rounded bg-gray-100 mb-4"></div>

//                 <div className="h-2 bg-gray-200 rounded w-20 mb-2"></div>

//                 <div className="text-lg font-bold text-gray-700 mb-3">
//                   $39.99
//                 </div>

//                 <button className="bg-green-500 text-white px-5 py-2 rounded">
//                   Buy
//                 </button>

//               </div>
//             </div>

//           </div>

//           {/* Right Content */}
//           <div>

//             <h3 className="text-5xl font-bold leading-tight text-gray-900 mb-12">
//               Good Design
//               <br />
//               Increases Sales
//             </h3>

//             <div className="grid md:grid-cols-2 gap-8">

//               {services.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl p-8 transition-all ${
//                     item.active
//                       ? "bg-white shadow-xl"
//                       : "bg-transparent"
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">

//                     <div className="bg-green-50 p-3 rounded-lg">
//                       <FiCheck className="text-green-500 text-xl" />
//                     </div>

//                     <div>
//                       <h4 className="font-bold text-xl text-gray-900 mb-3">
//                         {item.title}
//                       </h4>

//                       <p className="text-gray-500 leading-7">
//                         {item.description}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Mask

import React from "react";
import { FiCheck } from "react-icons/fi";
import Design from "../assets/images/Mask.svg";

const services = [
  {
    title: "Strategy and Research",
    description:
      "Based on deep researching we create the best strategy due to your needs.",
  },
  {
    title: "Development",
    description:
      "We create the best solution relying on own platforms, the experience of our partners and modern tendency.",
    active: true,
  },
  {
    title: "Strategy & Visual Design",
    description:
      "It is possible to see the future result with the prognosticate ground plan.",
  },
  {
    title: "Conversion Optimization",
    description:
      "We teach your call-center team how to talk efficiently to your clients.",
  },
];

const Mask = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What We Do
          </h2>

          <p className="mt-3 sm:mt-5 text-gray-500 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We are flexible and cope with multiple tasks to make you a leader
            in the market.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Image Section */}
          <div className="relative w-full max-w-[600px] mx-auto mb-8 lg:mb-0">

            <img
              src={Design}
              alt="Creative design illustration"
              className="
                w-full
                h-auto
                min-h-[300px]
                sm:min-h-[400px]
                lg:h-[520px]
                object-cover
                rounded-2xl
                sm:rounded-3xl
              "
            />

            {/* Floating Product Card */}
            <div className="
              absolute
              -bottom-6
              right-3
              sm:right-6
              lg:-bottom-8
              lg:-left-8
              lg:right-auto
              bg-white
              rounded-xl
              sm:rounded-2xl
              shadow-xl
              p-3
              sm:p-5
              w-44
              sm:w-56
              lg:w-64
            ">

              {/* Dots */}
              <div className="flex space-x-2 mb-3 sm:mb-4">

                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></span>

                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>

                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>

              </div>

              <div className="border rounded-lg p-3 sm:p-4">

                <div className="w-14 h-12 sm:w-20 sm:h-16 rounded bg-gray-100 mb-3 sm:mb-4"></div>

                <div className="h-2 bg-gray-200 rounded w-16 sm:w-20 mb-2"></div>

                <div className="text-base sm:text-lg font-bold text-gray-700 mb-3">
                  $39.99
                </div>

                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 sm:px-5 py-2 rounded transition duration-300"
                >
                  Buy
                </button>

              </div>

            </div>

          </div>

          {/* Right Content Section */}
          <div className="w-full">

            {/* Heading */}
            <h3 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              text-gray-900
              mb-8
              sm:mb-10
              lg:mb-12
              text-center
              lg:text-left
            ">
              Good Design
              <br className="hidden sm:block" />
              Increases Sales
            </h3>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

              {services.map((item, index) => (
                <div
                  key={index}
                  className={`
                    w-full
                    rounded-2xl
                    p-5
                    sm:p-6
                    lg:p-7
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
                    <div className="bg-green-50 p-2 sm:p-3 rounded-lg shrink-0">

                      <FiCheck className="text-green-500 text-xl" />

                    </div>

                    {/* Service Details */}
                    <div className="min-w-0">

                      <h4 className="font-bold text-base sm:text-lg lg:text-xl text-gray-900 mb-2 sm:mb-3">
                        {item.title}
                      </h4>

                      <p className="text-gray-500 text-sm sm:text-base leading-6 sm:leading-7">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Mask;
