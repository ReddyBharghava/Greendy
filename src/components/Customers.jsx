
import React from 'react'
import { FiCheck } from "react-icons/fi";
import Google from '../assets/images/Google.svg'


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
<section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-14">
              Get More Customers
              <br />
              with Google Ads
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {services.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition duration-300 ${
                    item.active
                      ? "bg-white shadow-xl"
                      : "bg-transparent"
                  }`}
                >
                  <div className="flex items-start gap-4">

                    <div className="bg-green-50 rounded-lg p-3">
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

          {/* Right Side */}
          <div className="relative">

            <img
              src={Google}
              alt="Google Ads"
              className="rounded-3xl w-full h-600px object-cover"
            />

            

              
              
            

          </div>

        </div>

      </div>
    </section>

  )
}

export default Customers
