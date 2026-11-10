// import React from 'react'

// const testimonials = [
//   {
//     id: 1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
//     name: "Client name",
//     role: "Post",
//     active: false,
//   },
//   {
//     id: 2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
//     name: "Client name",
//     role: "Post",
//     active: true,
//   },
//   {
//     id: 3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
//     name: "Client name",
//     role: "Post",
//     active: false,
//   },
// ];


// const Client = () => {
//   return (
//    <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl font-bold text-gray-900">
//             What our client say
//           </h2>

//           <p className="mt-3 text-gray-500">
//             We are flexible and cope with multiple tasks to make you a leader
//             in the market.
//           </p>
//         </div>

//         {/* Testimonial Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {testimonials.map((item) => (
//             <div
//               key={item.id}
//               className={`rounded-lg p-8 transition duration-300 ${
//                 item.active
//                   ? "bg-white shadow-lg border border-green-100"
//                   : "bg-white opacity-60"
//               }`}
//             >
//               <p className="text-gray-500 italic leading-7 text-sm">
//                 {item.text}
//               </p>

//               <div className="flex items-center mt-6">
//                 <div className="w-12 h-12 rounded-full bg-slate-900"></div>

//                 <div className="ml-4">
//                   <h4 className="font-semibold text-gray-900">
//                     {item.name}
//                   </h4>

//                   <p className="text-sm text-gray-400">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
 
    
//   )
// }

// export default Client

import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: false,
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: true,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna, tempor in penatibus ullamcorper. In quis purus pharetra scelerisque sed id eleifend erat. Integer imperdiet nullam eget lectus. Fames urna, ut lacus, et eu nunc integer consequat.",
    name: "Client name",
    role: "Post",
    active: false,
  },
];

const Client= () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">

      <div className="w-[90%] max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What our client say
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We are flexible and cope with multiple tasks to make you a leader
            in the market.
          </p>

        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`
                w-full
                rounded-xl
                p-5 sm:p-6 lg:p-8
                transition-all duration-300
                hover:-translate-y-2
                ${
                  item.active
                    ? "bg-white shadow-xl border border-green-100"
                    : "bg-white shadow-md border border-gray-100"
                }
              `}
            >

              {/* Testimonial Text */}
              <p className="text-gray-500 italic leading-6 sm:leading-7 text-sm sm:text-base">
                {item.text}
              </p>

              {/* Client Details */}
              <div className="flex items-center mt-6 sm:mt-8">

                {/* Profile Image Placeholder */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-slate-900">
                </div>

                <div className="ml-3 sm:ml-4 min-w-0">

                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-400">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Client;

