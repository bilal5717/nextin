import Home1 from '../images/Home1.jpg'; 

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section with Image */}
      <section className="relative w-full h-72 md:h-96">
        <img
          src={Home1}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-[#016fbe]/80 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Contact Us</h1>
          <p className="text-lg text-white">We’re here to help you. Let’s connect!</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 px-4 md:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            { title: 'Email', value: 'hr@nextin.com', icon: '📧' },
            { title: 'Phone', value: '+92 300 1234567', icon: '📞' },
            { title: 'Location', value: ' Forminates Housing Society Opposite DHA Phase 5 Lahore, Pakistan', icon: '📍' },
            { title: 'Office Hours', value: 'Mon–Fri, 10AM–6PM', icon: '🕒' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 shadow-md rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#016fbe]">{item.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
{/* Contact Section with Side-by-Side Layout */}
<section className="bg-gradient-to-r from-white/80 to-[#016fbe]/80 py-16 px-4 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    
    {/* Contact Form */}
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#016fbe] mb-6 text-center">Send Us a Message</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            placeholder="+92 300 1234567"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]"
          />
        </div>
        <div className="col-span-1">
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]"
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#016fbe]"
          />
        </div>
        <div className="col-span-1 md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-[#016fbe] text-white px-8 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* Google Map */}
    {<div className="rounded-lg overflow-hidden shadow-md">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6807.717467012947!2d74.4052879!3d31.4455558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919090013101d1b%3A0xfcb5723a0aea5a6!2sNextin%20Tech%20Hun!5e0!3m2!1sen!2s!4v1752171853448!5m2!1sen!2s" width="600" height="450" title='map' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>}

  </div>
</section>

    </div>
  );
};

export default ContactUs;
