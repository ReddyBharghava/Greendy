// import React from "react";
// import { FaArrowTrendUp } from "react-icons/fa6";

// const stats = [
//   {
//     number: "+534%",
//     title: "People Reached",
//   },
//   {
//     number: "+215%",
//     title: "Client Boost",
//   },
//   {
//     number: "+801%",
//     title: "Company Expansion",
//   },
//   {
//     number: "+379",
//     title: "Website Launch",
//   },
// ];

// const StatsSection = () => {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="bg-[#1B2336] rounded-md py-16 px-8">

//           {/* Heading */}
//           <h2 className="text-center text-white text-4xl font-bold mb-16">
//             The proofs is in the numbers
//           </h2>

//           {/* Statistics */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

//             {stats.map((item, index) => (
//               <div key={index} className="text-center">

//                 <div className="flex justify-center items-center gap-2">

//                   <h3 className="text-white text-5xl font-bold">
//                     {item.number}
//                   </h3>

//                   <FaArrowTrendUp
//                     className="text-[#00D084]"
//                     size={32}
//                   />

//                 </div>

//                 <p className="text-gray-300 mt-4 text-lg">
//                   {item.title}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;

import { FaArrowTrendUp } from "react-icons/fa6";

const stats = [
  {
    number: "+534%",
    title: "People Reached",
  },
  {
    number: "+215%",
    title: "Client Boost",
  },
  {
    number: "+801%",
    title: "Company Expansion",
  },
  {
    number: "+379",
    title: "Website Launch",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-6">

        <div className="bg-[#1B2336] rounded-xl py-10 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-10">

          {/* Heading */}
          <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-10 sm:mb-12 lg:mb-16">
            The proofs is in the numbers
          </h2>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center"
              >

                {/* Number and Icon */}
                <div className="flex justify-center items-center gap-2">

                  <h3 className="text-white text-4xl sm:text-5xl lg:text-4xl xl:text-5xl font-bold whitespace-nowrap">
                    {item.number}
                  </h3>

                  <FaArrowTrendUp
                    className="text-[#00D084] shrink-0"
                    size={28}
                  />

                </div>

                {/* Description */}
                <p className="text-gray-300 mt-3 sm:mt-4 text-base sm:text-lg">
                  {item.title}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
