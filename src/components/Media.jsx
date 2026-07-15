
import React from 'react'
import { FiCheck } from "react-icons/fi";
import Google3 from '../assets/images/Google3.svg'

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
              Grow Your Business
              <br />
              with Social Media
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {socialMediaServices.map((service, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition duration-300 ${
                    service.active
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
                        {service.title}
                      </h3>

                      <p className="text-gray-500 leading-7">
                        {service.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            <img
              src={Google3}
              alt="Social Media"
              className="rounded-3xl w-full max-w-md h-[560px] object-cover"
            />

           

          </div>

        </div>

      </div>
    </section>
  )
}

export default Media
