import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ?
    "bg-indigo text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'

  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => document.body.classList.remove('overflow-hidden')
  }, [isOpen])

  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-indigo-700/70 border-b border-white/20 supports-[backdrop-filter]:bg-indigo-700/60">
        <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src={logo}
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2 font-bricolage">Propertiers</span>
            </NavLink>

            {/* Desktop search and links */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {/* Search Bar - Desktop */}
              <div className="relative w-64">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 font-bricolage"
                />
              </div>
              
              <div className="flex space-x-2">
                <NavLink to="/" className={`${linkClass} font-bricolage p-3`}>Home</NavLink>
                <NavLink to="/jobs" className={`${linkClass} font-bricolage p-3`}>Get a room</NavLink>
                <NavLink to="/add-job" className={`${linkClass} font-bricolage p-3`}>Upload your room</NavLink>
                <NavLink to="/add-job" className={`${linkClass} font-bricolage p-3`}>Get a roommate</NavLink>
              </div>
            </div>

            {/* Mobile search and menu buttons */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Search Button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Toggle search"
                onClick={() => setIsSearchOpen((v) => !v)}
              >
                <FiSearch className="h-6 w-6" />
              </button>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={() => setIsOpen((v) => !v)}
              >
                {/* Menu / Close icons */}
                <span className={isOpen ? 'hidden' : 'block'}>
                  <FiMenu className="h-7 w-7" />
                </span>
                <span className={isOpen ? 'block' : 'hidden'}>
                  <FiX className="h-7 w-7" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar - Independent overlay (outside nav) */}
      <div
        className={`md:hidden fixed top-20 left-0 right-0 bg-indigo-700/95 backdrop-blur-md border-b border-white/10 z-40 transform transition-all duration-300 ease-in-out ${
          isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-3">
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 h-5 w-5" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 font-bricolage"
            />
          </div>
        </div>
      </div>

      {/* Mobile off-canvas panel and overlay (outside nav, at root level) */}
      {/* Backdrop overlay */}
      <div
        className={`md:hidden fixed inset-0 top-20 bg-black/20 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Off-canvas panel (70% width) */}
      <aside
        id="mobile-menu"
        className={`md:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-[70vw] max-w-sm bg-white/80 shadow-2xl border-l border-gray-200 z-[9999] transform transition-transform duration-300 ease-in-out backdrop-blur-md ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="px-6 py-6 space-y-4">
          <NavLink to="/" className="block p-3 text-indigo-700 hover:bg-indigo-50 rounded-md font-medium font-bricolage" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/jobs" className="block p-3 text-indigo-700 hover:bg-indigo-50 rounded-md font-medium font-bricolage" onClick={() => setIsOpen(false)}>
            Get a Room
          </NavLink>
          <NavLink to="/add-job" className="block p-3 text-indigo-700 hover:bg-indigo-50 rounded-md font-medium font-bricolage" onClick={() => setIsOpen(false)}>
            Upload a room
          </NavLink>
          <NavLink to="/add-job" className="block p-3 text-indigo-700 hover:bg-indigo-50 rounded-md font-medium font-bricolage" onClick={() => setIsOpen(false)}>
            Get a roommate
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Navbar