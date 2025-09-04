import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const HomePage = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero-bg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center lg:text-center">
        <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          Get a room from the <span className="text-[#e9b82d]">Comfort</span>
          <br />
          of your <span className="text-[#e9b82d]">Room...</span>
        </h1>

        <p className="mt-4 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white font-inter mx-auto">
          Find the perfect room that fits your taste, budget and needs
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <Link
            to="/register"
            className="bg-[#e9b82d] m-auto text-black py-3 px-8 rounded-full text-base sm:text-lg border hover:bg-[#151b23] hover:text-[#e9b82d] hover:border-[#e9b82d] hover:shadow-lg transition-all duration-300"
          >
            Click to join us
            <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage