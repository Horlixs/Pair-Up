import React from 'react'
import { Link } from 'react-router-dom'

const Redirect = () => {
  return (
    <section className="bg-[#151b23] h-[100vh] font-inter p-auto">
    <div className="container m-auto max-w-2xl py-24">
      <div
        className="bg-[#0d1117] px-6 py-8 mb-4 shadow-md rounded-md m-4 md:m-0"
      >
        <p className='text-white text-center'>Thank you for Joining our waitlist, Please do well to join our WhatsApp group below to stay tuned.
        </p>
        <Link
                to={`https://chat.whatsapp.com/H7FqnrpKOzYHzbVmsZMpGu`}
                className="bg-[#e9b82d] block text-center mt-10 hover:bg-[#151b23] hover:text-[#e9b82d] hover:border-[#e9b82d] hover:shadow-[#e9b82d] text-black font-bold py-3 text-lg px-8 border rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Join Group
        </Link>
    </div>
    </div>
    </section>
  )
}

export default Redirect