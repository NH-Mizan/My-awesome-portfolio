import { useEffect } from 'react';

import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

import { TbLocationFilled } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';

const Contact = () => {
  useEffect(() => {
    //  document.title ='Contacts Us || NH MIZAN'
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div id='contact' className=" min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-center my-8 text-5xl text-white font-bold">Contact  <span className="span-color">Us!</span></h1>
      <div className="border-2 border-[#61557c]  shadow-lg rounded-lg overflow-hidden md:flex md:max-w-4xl w-full">
        {/* Left Section: Contact Form */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 border-[#61557c] "
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2  rounded-lg focus:outline-none focus:ring focus:ring-blue-300  border-[#61557c] "
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 border-[#61557c]"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <div className="btn-pro text-sm text-center ">  <button type="submit" className="flex items-center gap-2"> <TbLocationFilled className='text-xl' /> Send </button></div>

          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="md:w-1/3  text-white p-6 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="mb-4">
            If you have any questions, feel free to contact us! We’d love to hear from you.
          </p>
          <div className="space-y-4">
            <div>
              
            </div>
            <div>
             
            </div>
            <div className="flex items-center gap-6">

            <FaLocationDot className='w-12'/> 

              <div >
              <h4 className="font-bold">Address</h4>
              <p className='font-bold'> Dinajpur, Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-6">

            <FaPhoneAlt className='w-12'/>

              <div >
              <h4 className="font-bold">Phone</h4>
              <p className='font-bold'>+880 1846-494272</p>
              </div>
            </div>
            <div className="flex items-center gap-6">

              <TfiEmail className='w-12'/>
              <div >
                <h4 className="font-bold">Email</h4>
                <p className='font-bold'>nhmizan999@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
