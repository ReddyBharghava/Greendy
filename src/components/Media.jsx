
// import React from 'react'
// import { FiCheck } from "react-icons/fi";
// import Google3 from '../assets/images/Google3.svg'

// const socialMediaServices = [
//   {
//     title: "Authentic storytelling",
//     description:
//       "Tell your clients which were your first steps and failures in this business.",
//   },
//   {
//     title: "Optimized ads",
//     description:
//       "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
//   },
//   {
//     title: "Community Engagement",
//     description:
//       "Develop business with similar companies or partners.",
//   },
//   {
//     title: "Fostering Growth",
//     description:
//       "The accent on social media activities increases the number of your clients.",
//     active: true,
//   },
// ];

// const Media = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Content */}
//           <div>

//             <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
//               Grow Your Business
//               <br />
//               with Social Media
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">

//               {socialMediaServices.map((service, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl p-8 transition duration-300 ${
//                     service.active
//                       ? "bg-white shadow-xl"
//                       : "bg-transparent"
//                   }`}
//                 >
//                   <div className="flex items-start gap-4">

//                     <div className="bg-green-50 p-3 rounded-lg">
//                       <FiCheck className="text-green-500 text-xl" />
//                     </div>

//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                         {service.title}
//                       </h3>

//                       <p className="text-gray-500 leading-7">
//                         {service.description}
//                       </p>
//                     </div>

//                   </div>
//                 </div>
//               ))}

//             </div>

//           </div>

//           {/* Right Image */}
//           <div className="relative flex justify-center">

//             <img
//               src={Google3}
//               alt="Social Media"
//               className="rounded-3xl w-full max-w-md h-[560px] object-cover"
//             />

           

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Media

import React from "react";
import { FiCheck } from "react-icons/fi";
import Google3 from "../assets/images/Google3.svg";

const socialMediaServices = [
  {
    title: "Authentic storytelling",
    description:
      "Tell your clients which were your first steps and failures in this business.",
  },
  {
    title: "Optimized ads",
    description:
      "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
  },
  {
    title: "Community Engagement",
    description:
      "Develop business with similar companies or partners.",
  },
  {
    title: "Fostering Growth",
    description:
      "The accent on social media activities increases the number of your clients.",
    active: true,
  },
];

const Media = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="w-full">

            {/* Heading */}
            <h2 className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              text-gray-900
              leading-tight
              mb-8
              sm:mb-10
              lg:mb-14
              text-center
              lg:text-left
            ">
              Grow Your Business
              <br className="hidden sm:block" />
              with Social Media
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">

              {socialMediaServices.map((service, index) => (
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
                      service.active
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

                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-gray-500 leading-6 sm:leading-7">
                        {service.description}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}
          <div className="w-full flex justify-center items-center">

            <img
              src={Google3}
              alt="Social Media Marketing Illustration"
              className="
                w-full
                max-w-[560px]
                h-auto
                max-h-[560px]
                object-contain
                rounded-2xl
                sm:rounded-3xl
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Media;
