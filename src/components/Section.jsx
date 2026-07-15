import React from 'react'
import { FiCheck } from "react-icons/fi";
import Group from '../assets/images/group.svg'
import Google2 from '../assets/images/Google2.svg'

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="relative">

            <img
              src={Google2}
              alt="SEO"
              className="rounded-3xl w-full h-[550px] object-cover"
            />

           

          

          </div>

          {/* Right Side */}
          <div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
              Show Up when People Search
              <br />
              for What You Sell
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {seoServices.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    item.active
                      ? "bg-white shadow-xl"
                      : "bg-transparent"
                  }`}
                >
                  <div className="flex items-start gap-4">

                    <div className="bg-green-50 p-3 rounded-lg">
                      <FiCheck className="text-green-500 text-xl" />
                    </div>

                    <div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 leading-7">
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

      <section className="bg-[#1A2234] py-20">
  <div className="max-w-6xl mx-auto px-6 lg:px-10">
    <div className="flex flex-col lg:flex-row items-center gap-16">

      <img
        src={Group}
        alt=""
        className="w-full lg:w-[560px] h-[300px] rounded-md object-cover"
      />

      <div className="max-w-md">
        <h2 className="text-white text-[42px] leading-[52px] font-bold">
          Our Proven Strategy for
          <br />
          Growing Your Sales
        </h2>

        <p className="text-gray-300 mt-6 text-[18px] leading-8">
          We are carrying your business based on the adapted business plan
          with the main market trends. Be always relevant and competitive.
        </p>
      </div>

    </div>
  </div>
</section>
    </section>
  )
}

export default Section
