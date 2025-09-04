import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AddJobPage = ({ addJobSubmit }) => {
    const [fullName, setfullName] = useState('');
    const [contactEmail, setContactEmail] = useState('')
    const [contactPhone, setContactPhone] = useState('')
    const [gender, setGender] = useState('Male')
    const [status, setStatus] = useState('Yes')
    const [school, setSchool] = useState('University of Ilorin (PS)')
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    const submitForm = async (e) => {
      e.preventDefault();
    
      const newJob = {
        fullName,
        contactEmail,
        contactPhone,
        gender,
        status,
        school,
        description,
      };
    
      const res = await addJobSubmit(newJob);
    
      if (res.error) {
        toast.error("Failed to submit: " + res.error);
      } else {
        toast.success("Thank you for your Registration");
        navigate("/join-group");
      }
    };

  return (
    <>
    <section className="bg-[#151b23] text-white font-inter text-sm">
      <div className="container mx-0 sm:m-auto max-w-2xl py-5 sm:py-10">
        <div
          className="bg-[#0d1117] px-8 py-8 mb-4 shadow-md rounded-lg m-4 md:m-0"
        >
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-[#e9b82d] text-center font-semibold mb-6">Register</h2>

            <div className="mb-4">
              <label htmlFor="full_name" className="block text-white/60 font-regular mb-2"
                >Full Name<span className='text-[#ff0000]'> *</span></label
              >
              <input
                type="text"
                id="full_name"
                name="full_name"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                placeholder="Type in your full name"
                required
                value={fullName}
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-white/60 font-regular mb-2"
                >Email<span className='text-[#ff0000]'> *</span></label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                placeholder="Your Email address"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-white/60 font-regular mb-2"
                >Phone Number <span className='text-sm'>(Preferrably Whatsapp)</span><span className='text-[#ff0000]'> *</span></label
              >
              <input
                type="text"
                id="contact_phone"
                name="contact_phone"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                placeholder="Your phone number"
                required
                value={contactPhone}
                onChange={(e) =>{
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                  setContactPhone(value);
                  }
                }}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-white/60 font-regular mb-2"
                >Gender<span className='text-[#ff0000]'> *</span></label
              >
              <select
                id="type"
                name="type"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="status" className="block text-white/60 font-regular mb-2"
                >Have an hostel?<span className='text-[#ff0000]'> *</span></label
              >
              <select
                id="status"
                name="status"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                placeholder='Select Status'
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Yes">Yes, I only need a roommate</option>
                <option value="No">No, I'm seeking for an hostel and a roommate</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="school" className="block text-white/60 font-regular mb-2"
                >School<span className='text-[#ff0000]'> *</span></label
              >
              <select
                id="school"
                name="school"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                required
                value={school}
                onChange={(e) => setSchool(e.target.value)}
              > Select an Option
                <option value="University of Ilorin (PS)" className='bg-[#151b23] text-white py-2'>University of Ilorin(PS)</option>
                <option value="University of Ilorin (COHS)" className='bg-[#151b23] text-white py-2'>University of Ilorin(COHS)</option>
                <option value="Kwara State University" className='bg-[#151b23] text-white py-2'>Kwara State University</option>
                <option value="Kwara State Polytechnic" className='bg-[#151b23] text-white py-2'>Kwara State Polytechnic</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-white/60 font-regular mb-2"
                >Short Info about yourself<span className='text-[#ff0000]'> *</span></label
              >
              <textarea
                id="description"
                name="description"
                className="bg-[#151b23] rounded w-full py-3 px-2"
                rows="4"
                required
                placeholder="Let us know about you..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <button
                className="bg-[#e9b82d] hover:bg-[#151b23] hover:text-[#e9b82d] hover:border-[#e9b82d] text-black font-bold py-3 text-lg px-8 border rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default AddJobPage