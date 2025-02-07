import  { useEffect } from 'react';

const Contact = () => {
  useEffect(()=>{
//  document.title ='Contacts Us || NH MIZAN'
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };

  return (
    <div className=" min-h-screen flex flex-col items-center py-10 px-4">
      <h1 className="text-center my-8 text-5xl text-white font-bold">Contact  <span className="span-color">Us!</span></h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex md:max-w-4xl w-full">
        {/* Left Section: Contact Form */}
        <div className="md:w-2/3 p-6">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                rows="5"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section: Contact Information */}
        <div className="md:w-1/3 bg-blue-500 text-white p-6 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="mb-4">
            If you have any questions, feel free to contact us! We’d love to hear from you.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold">Address</h4>
              <p>123 Matrimony Street, Dinajpur, Bangladesh</p>
            </div>
            <div>
              <h4 className="font-bold">Phone</h4>
              <p>+880 1846-494272</p>
            </div>
            <div>
              <h4 className="font-bold">Email</h4>
              <p>nhmizan999@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
