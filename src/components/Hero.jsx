// import React from 'react'
// import Human from '../assets/images/2.svg'
// import Logos from '../assets/images/logos.svg'
// import Human2 from '../assets/images/3.svg'

// const Hero = () => {
//   return (
//     <section className="bg-white transition duration-300">
//         <div className='flex flex-row'>
//             {/* {Content} */}
//         <div className='space-y-8 p-8 m-10'>
//       <p className='text-green-600 '>Award winning company </p>
//       <h1 className='text-6xl'>Digital marketing <br/> agency and design.We<br/> grow your business <br/> online</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Mauris <br/>imperdiet felis egestas aug</p>
//       <button className='border-1px border-amber-50 bg-green-400 p-3 m-3' >Start a project</button>
//     </div>

//     {/* {Image} */}
//     <div >
//         <img src={Human} alt="" 
//         className='w-580px h-610.57px'/>
//     </div>
//         </div>

//         <div >
//             <img src={Logos} alt="" 
//             className='pl-50'/>
//         </div>

//        <div className='flex'>
//          {/* {Text} */}

//         <div className='space-y-8 p-8 m-10'>
//             <p className='text-green-600'>Who we are</p>
//             <h2 className='text-4xl'>Top #1Marketing <br/> agency in the world</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Vel non recusandae eveniet atque eius efusa <br/>pariatur laboriosam nisi minus, dignissimos  <br/>impedit hic eligendi.</p>
//             <button className='border-1px border-white bg-slate-950 text-white p-3 m-3'>Get in Touch</button>
//         </div>
//             <div className='pl-44 pt-8'>
//                 {/* {Image} */}
//                 <img src={Human2} alt="" 
//                 className='w-598.46px h-628px'/>
//             </div>
//        </div>
//     </section>
//   )
// }

// export default Hero

import React from "react";

import Human from "../assets/images/2.svg";
import Logos from "../assets/images/logos.svg";
import Human2 from "../assets/images/3.svg";

const Hero = () => {
  return (
    <section className="bg-white w-full overflow-hidden transition duration-300">

      {/* ================= HERO SECTION ================= */}
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-12 lg:py-16">

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

          <p className="text-green-600 font-semibold text-base md:text-lg">
            Award winning company
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Digital marketing
            <br className="hidden sm:block" />
            agency and design.
            <br className="hidden sm:block" />
            We grow your business
            <br className="hidden sm:block" />
            online
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mauris imperdiet felis egestas aug.
          </p>

          <button className="bg-green-400 hover:bg-green-500 transition duration-300 text-black font-medium px-6 py-3 rounded-md">
            Start a project
          </button>

        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Human}
            alt="Digital marketing illustration"
            className="w-full max-w-[580px] h-auto object-contain"
          />
        </div>

      </div>

      {/* ================= LOGOS SECTION ================= */}
      <div className="w-[90%] max-w-7xl mx-auto py-8 md:py-12">
        <img
          src={Logos}
          alt="Our partner companies"
          className="w-full max-w-5xl mx-auto h-auto object-contain"
        />
      </div>

      {/* ================= WHO WE ARE SECTION ================= */}
      <div className="w-[90%] max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-12 lg:py-16">

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Human2}
            alt="About our marketing agency"
            className="w-full max-w-[598px] h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">

          <p className="text-green-600 font-semibold text-base md:text-lg">
            Who we are
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Top #1 Marketing
            <br className="hidden sm:block" />
            agency in the world
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vel non recusandae eveniet atque eius efusa
            pariatur laboriosam nisi minus, dignissimos
            impedit hic eligendi.
          </p>

          <button className="bg-slate-950 hover:bg-slate-800 transition duration-300 text-white font-medium px-6 py-3 rounded-md">
            Get in Touch
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;
