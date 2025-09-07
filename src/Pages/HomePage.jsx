import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/Pair.svg' // make sure your logo is in this path

const HomePage = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero-bg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* Logo */}
      <div className="relative z-10 mb-8">
        <img src={logo} alt="Pair Up Logo" className="w-50 sm:w-70 md:w-70 mx-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 text-center lg:text-center">
        <h1 className="font-inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
          Need a <span className="text-[#e9b82d]">Roommate</span>
          <br />
          from your <span className="text-[#e9b82d]">Room...?</span>
        </h1>

        <p className="mt-4 max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white font-inter mx-auto">
          Let's pair you up with someone
        </p>

        <div className="mt-8 flex justify-center lg:justify-start">
          <Link
            to="/register"
            className="bg-[#e9b82d] m-auto text-black py-3 px-8 rounded-full text-base sm:text-lg border hover:bg-[#151b23] hover:text-[#e9b82d] hover:border-[#e9b82d] hover:shadow-lg transition-all duration-300"
          >
            Click here to Register
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomePage