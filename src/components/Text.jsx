import React from 'react'

const Text = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Stay update
          </h2>

          <p className="mt-3 text-gray-500">
            Subscribe to our newsletter to receive our best daily, week and
            month offer.
          </p>
        </div>

        {/* Subscribe Box */}
        <div className="mt-10 bg-white shadow-lg rounded-md p-4">
          <form className="flex flex-col sm:flex-row items-center gap-4">

            <input
              type="email"
              placeholder="email address"
              className="w-full px-5 py-4 outline-none text-gray-700 placeholder-gray-400"
            />

            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-md transition duration-300"
            >
              Subscribe
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Text
