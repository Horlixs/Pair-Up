import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="relative bg-black bg-cover bg-center lg:bg-left min-h-[80vh] sm:min-h-[85vh] flex items-center py-12 sm:py-20"
  style={{ backgroundImage: "url('/image/hero-bg.jpeg')" }}
>
  {/* Base dark overlay (all screens) */}
  <div className="absolute inset-0 bg-black/80 lg:bg-black/60 pointer-events-none"></div>

  {/* Desktop-only gradient mask */}
  <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-0 text-center lg:text-left">
    <h1 className="font-bricolage text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
      Get a room, <br />
      from the <span className="text-[#e9b82d]">Comfort</span>
      <br />
      of your <span className="text-[#e9b82d]">Room...</span>
    </h1>
    <p className="mt-4 max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none mx-auto lg:mx-0 text-base sm:text-lg md:text-xl font-thin text-white font-bricolage text-center lg:text-left">
  Find the perfect room that fits your taste, budget and needs
</p>




    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 w-full sm:w-auto">
  <Link
    to="/roommates"
    className="w-[85vw] sm:w-auto px-6 py-3 bg-[#e9b82d] rounded-sm text-black font-bricolage hover:bg-[#e9b81a] text-center"
  >
    Get a roommate
  </Link>
  <Link
    to="/hostels"
    className="w-[85vw] sm:w-auto px-6 py-3 bg-indigo-700 rounded-sm text-white font-bricolage hover:bg-indigo-800 text-center flex items-center justify-center"
  >
    Explore Our Available Hostels
    <FaArrowRight className="inline ml-2" />
  </Link>
</div>
  </div>

  {/* Right-side illustration (desktop only) */}
  <img
    src="/image/Booking.svg"
    alt=""
    className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 w-[32%] max-w-[480px] z-10"
    aria-hidden="true"
  />
</section>

  )
}

export default Hero