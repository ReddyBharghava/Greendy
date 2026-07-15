import React from 'react'

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


const Client = () => {
  return (
   <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            What our client say
          </h2>

          <p className="mt-3 text-gray-500">
            We are flexible and cope with multiple tasks to make you a leader
            in the market.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg p-8 transition duration-300 ${
                item.active
                  ? "bg-white shadow-lg border border-green-100"
                  : "bg-white opacity-60"
              }`}
            >
              <p className="text-gray-500 italic leading-7 text-sm">
                {item.text}
              </p>

              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-slate-900"></div>

                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
 
    
  )
}

export default Client
