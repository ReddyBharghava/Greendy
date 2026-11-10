// import React from 'react'
// import { FiCheck } from "react-icons/fi";
// import Group from '../assets/images/group.svg'
// import Google2 from '../assets/images/Google2.svg'

// const seoServices = [
//   {
//     title: "SEO audit",
//     description:
//       "Analyze your next steps and in which way it will have impact on the selling results.",
//   },
//   {
//     title: "On-page SEO",
//     description:
//       "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
//   },
//   {
//     title: "Targeted content",
//     description:
//       "The targeting content helps you to push ahead less popular categories of goods.",
//     active: true,
//   },
//   {
//     title: "Off-page SEO",
//     description:
//       "This strategy helps you to increase the trust level to your online store.",
//   },
// ];

// const Section = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* Left Side */}
//           <div className="relative">

//             <img
//               src={Google2}
//               alt="SEO"
//               className="rounded-3xl w-full h-[550px] object-cover"
//             />

           

          

//           </div>

//           {/* Right Side */}
//           <div>

//             <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
//               Show Up when People Search
//               <br />
//               for What You Sell
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">

//               {seoServices.map((item, index) => (
//                 <div
//                   key={index}
//                   className={`rounded-2xl p-8 ${
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

//         </div>

//       </div>

//       <section className="bg-[#1A2234] py-20">
//   <div className="max-w-6xl mx-auto px-6 lg:px-10">
//     <div className="flex flex-col lg:flex-row items-center gap-16">

//       <img
//         src={Group}
//         alt=""
//         className="w-full lg:w-[560px] h-[300px] rounded-md object-cover"
//       />

//       <div className="max-w-md">
//         <h2 className="text-white text-[42px] leading-[52px] font-bold">
//           Our Proven Strategy for
//           <br />
//           Growing Your Sales
//         </h2>

//         <p className="text-gray-300 mt-6 text-[18px] leading-8">
//           We are carrying your business based on the adapted business plan
//           with the main market trends. Be always relevant and competitive.
//         </p>
//       </div>

//     </div>
//   </div>
// </section>
//     </section>
//   )
// }

// export default Section

import { FiCheck } from "react-icons/fi";
import Group from "../assets/images/group.svg";
import Google2 from "../assets/images/Google2.svg";

const seoServices = [
  {
    title: "SEO audit",
    description:
      "Analyze your next steps and in which way it will have impact on the selling results.",
  },
  {
    title: "On-page SEO",
    description:
      "Optimize every word on your page for increasing the sales and reach the top of Google searching.",
  },
  {
    title: "Targeted content",
    description:
      "The targeting content helps you to push ahead less popular categories of goods.",
    active: true,
  },
  {
    title: "Off-page SEO",
    description:
      "This strategy helps you to increase the trust level to your online store.",
  },
];

const Section = () => {
  return (
    <section className="bg-white">
      {/* SEO Services Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left Side - Image */}
            <div className="w-full">
              <img
                src={Google2}
                alt="SEO services illustration"
                className="w-full h-auto min-h-[280px] max-h-[550px] object-contain rounded-3xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8 sm:mb-10 lg:mb-14">
                Show Up when People Search
                <br className="hidden sm:block" />
                {" "}for What You Sell
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                {seoServices.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl p-5 sm:p-6 lg:p-8 transition-shadow duration-300 ${
                      item.active
                        ? "bg-white shadow-xl"
                        : "bg-transparent"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="bg-green-50 p-3 rounded-lg shrink-0">
                        <FiCheck className="text-green-500 text-xl" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
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

          </div>
        </div>
      </div>

      {/* Proven Strategy Section */}
      <div className="bg-[#1A2234] py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">

            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={Group}
                alt="Our proven business growth strategy"
                className="w-full h-auto max-h-[400px] lg:h-[300px] rounded-md object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 max-w-md text-center lg:text-left">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-[42px] leading-tight lg:leading-[52px] font-bold">
                Our Proven Strategy for
                <br className="hidden sm:block" />
                {" "}Growing Your Sales
              </h2>

              <p className="text-gray-300 mt-5 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8">
                We are carrying your business based on the adapted business plan
                with the main market trends. Be always relevant and competitive.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
