import React from "react";
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
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#1B2336] rounded-md py-16 px-8">

          {/* Heading */}
          <h2 className="text-center text-white text-4xl font-bold mb-16">
            The proofs is in the numbers
          </h2>

          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

            {stats.map((item, index) => (
              <div key={index} className="text-center">

                <div className="flex justify-center items-center gap-2">

                  <h3 className="text-white text-5xl font-bold">
                    {item.number}
                  </h3>

                  <FaArrowTrendUp
                    className="text-[#00D084]"
                    size={32}
                  />

                </div>

                <p className="text-gray-300 mt-4 text-lg">
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