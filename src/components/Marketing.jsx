
// import React from 'react'
// import Desktop1 from '../assets/images/Desktop1.svg'
// import Desktop2 from '../assets/images/Desktop2.svg'
// import Desktop3 from '../assets/images/Desktop3.svg'


// const cards = [
//   {
//     id: 1,
//     image: Desktop1,
//     category: "Marketing",
//     title: "Online marketing step by step",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
//   },
//   {
//     id: 2,
//     image: Desktop2,
//     category: "Marketing",
//     title: "Online marketing step by step",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
//   },
//   {
//     id: 3,
//     image: Desktop3,
//     category: "Marketing",
//     title: "Online marketing step by step",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
//   },
// ];

// const Marketing = () => {
//   return (
//     <div>
//       <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//             Why you need multiple
//             <br />
//             marketing strategies
//           </h2>

//           <p className="mt-3 text-gray-500 text-sm">
//             Choose your best ecommerce store
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {cards.map((card) => (
//     <div
//       key={card.id}
//       className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//     >
//       {/* Image */}
//       <img
//         src={card.image}
//         alt={card.title}
//         className="w-full h-52 object-cover"
//       />

//       {/* Content */}
//       <div className="p-6">
//         <span className="text-green-500 text-sm font-medium">
//           {card.category}
//         </span>

//         <h3 className="mt-2 text-2xl font-semibold text-gray-900 leading-snug">
//           {card.title}
//         </h3>

//         <p className="mt-4 text-gray-500 text-sm leading-7">
//           {card.description}
//         </p>

//         <button className="mt-6 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-6 py-3 rounded transition duration-300">
//           Read More →
//         </button>
//       </div>
//     </div>
//   ))}
// </div>
//       </div>
//     </section>
//     </div>
//   )
// }

// export default Marketing

import React from "react";

import Desktop1 from "../assets/images/Desktop1.svg";
import Desktop2 from "../assets/images/Desktop2.svg";
import Desktop3 from "../assets/images/Desktop3.svg";

const cards = [
  {
    id: 1,
    image: Desktop1,
    category: "Marketing",
    title: "Online marketing step by step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
  },
  {
    id: 2,
    image: Desktop2,
    category: "Marketing",
    title: "Online marketing step by step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
  },
  {
    id: 3,
    image: Desktop3,
    category: "Marketing",
    title: "Online marketing step by step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
  },
];

const Marketing= () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why you need multiple
            <br className="hidden sm:block" />
            marketing strategies
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Choose your best ecommerce store
          </p>

        </div>

        {/* Marketing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {cards.map((card) => (
            <div
              key={card.id}
              className="
                w-full
                bg-white
                rounded-xl
                overflow-hidden
                border border-gray-100
                shadow-md
                hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-2
                flex flex-col
              "
            >

              {/* Image */}
              <div className="w-full overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="
                    w-full
                    h-auto
                    aspect-[16/10]
                    object-cover
                    transition-transform duration-500
                    hover:scale-105
                  "
                />

              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">

                {/* Category */}
                <span className="text-green-500 text-xs sm:text-sm font-semibold">
                  {card.category}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 sm:mt-4 text-gray-500 text-sm sm:text-base leading-6 sm:leading-7">
                  {card.description}
                </p>

                {/* Button */}
                <div className="mt-auto pt-5">

                  <button
                    type="button"
                    className="
                      bg-green-500
                      hover:bg-green-600
                      text-white
                      text-sm sm:text-base
                      font-medium
                      px-5 sm:px-6
                      py-3
                      rounded-md
                      transition duration-300
                    "
                  >
                    Read More →
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Marketing;
