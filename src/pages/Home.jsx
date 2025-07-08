import  { useState } from 'react';
import React from 'react';
import Home1 from '../images/Home1.jpg';
import courseimg3new from '../images/courseimg3new.jpeg';
import Courseimg4 from '../images/Courseimg4.jpeg';
import GraphicDesign from '../images/GraphicDesign.jpg';
import Webdev from '../images/Webdev.jpeg';
import AppDev1 from '../images/AppDev1.jpeg';
import seo1 from '../images/seo1.jpeg';
import { Users, Clock, ShieldCheck, Code, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Select a course');

 const features = [
  { 
    icon: <Users className="text-white" />, 
    title: "Flexible Hiring",
    text: 'From individuals to full teams, scale as needed' 
  },
  { 
    icon: <Clock className="text-white" />, 
    title: "Transparent Pricing",
    text: 'Pay hourly or per project, no long-term contracts' 
  },
  { 
    icon: <ShieldCheck className="text-white" />, 
    title: "Quality Assurance",
    text: 'Post-launch support with 45-day warranty period' 
  },
  { 
    icon: <Code className="text-white" />, 
    title: "Full Stack Expertise",
    text: 'Web, mobile, and IT support - all in one place' 
  },
  { 
    icon: <Briefcase className="text-white" />, 
    title: "Dedicated Management",
    text: 'Professional project manager from start to finish' 
  },
];

  const coursesList = [
    'Full Stack Development',
    'Graphic Designing',
    'SEO & Google Ads',
    'Frontend Development',
    'Backend Development',
    'React Js Development',
    'Angular Framework',
    'Symfony Programming',
    'PHP Programming',
    'Laravel',
    'App Development',
    'Database',
    'Digital Marketing',
    'Web Hosting',
    'WordPress'
  ];

  const courses = [
    {
      img: courseimg3new,
      title: "Full Stack Development",
      desc: "Combine frontend and backend skills to become a complete web developer.",
      duration: "6 Months"
    },
    {
      img: GraphicDesign,
      title: "Graphic Designing",
      desc: "Master tools like Photoshop & Illustrator to design logos, posters, and UI elements.",
      duration: "3 Months"
    },
    {
      img: Courseimg4,
      title: "SEO & Google Ads",
      desc: "Optimize search visibility and run effective ad campaigns for online growth.",
      duration: "2 Months"
    },
  ];

  const services = [
    {
      img: Webdev,
      title: "Web Development",
      desc: "Custom websites with responsive design, SEO optimization, and modern UI/UX."
    },
    {
      img: AppDev1,
      title: "App Development",
      desc: "Build Android and iOS apps with seamless performance and cross-platform support."
    },
    {
      img: seo1,
      title: "SEO & Google Ads",
      desc: "Increase traffic and conversions with targeted keywords and ad campaigns."
    },
  ];

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-8 md:py-10">
  <div className="md:w-1/2 space-y-5">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#016fbe] leading-snug">
      Lead Your Industry with Next‑Level Innovation
    </h1>
    <p className="text-lg font-semibold uppercase text-[#016fbe] tracking-wide leading-relaxed">
      Your Complete IT Partner
    </p>
    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
      We specialize in delivering customized digital solutions through a versatile and hybrid working model — from idea to launch.
    </p>
    <div className="pt-2">
      <a
        href="/services"
        className="inline-block bg-[#016fbe] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Explore Our Services
      </a>
    </div>
  </div>
  <div className="md:w-1/2 mt-10 md:mt-0">
    <img
      src={Home1}
      alt="Hero"
      className="w-full h-auto rounded-lg"
    />
  </div>
</section>


     {/* Courses Section */}
<section className="py-8 px-4 sm:px-6 md:px-20 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-4">Our Courses</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover our comprehensive learning programs designed for your success</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, i) => (
        <div key={i} className="bg-white border border-gray-200 hover:border-[#016fbe] transition-all duration-300 hover:shadow-lg group overflow-hidden">
          <div className="relative overflow-hidden h-48">
            <img 
              src={course.img} 
              alt={course.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white font-medium">{course.duration}</span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#016fbe] transition-colors">{course.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{course.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-[#016fbe] font-semibold">{course.price || 'Enroll Now'}</span>
              <button className="text-gray-400 hover:text-[#016fbe] transition-colors">
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <Link 
        to="/course" 
        className="inline-flex items-center px-6 py-3 border border-[#016fbe] text-[#016fbe] font-semibold hover:bg-[#016fbe] hover:text-white transition-colors duration-300"
      >
        View All Courses <FiArrowRight className="ml-2" />
      </Link>
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="bg-gray-50 py-8 px-4 sm:px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-4">Our Services</h2>
    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Professional solutions tailored to meet your specific needs</p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {services.map((service, i) => (
        <div key={i} className="bg-white border border-gray-200 hover:border-[#016fbe] transition-all duration-300 hover:shadow-lg group overflow-hidden">
          <div className="relative overflow-hidden h-48">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#016fbe] transition-colors">{service.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{service.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-[#016fbe] font-semibold">Learn more</span>
              <button className="text-gray-400 hover:text-[#016fbe] transition-colors">
                <FiArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <Link 
        to="/services" 
        className="inline-flex items-center px-6 py-3 border border-[#016fbe] text-[#016fbe] font-semibold hover:bg-[#016fbe] hover:text-white transition-colors duration-300"
      >
        Explore All Services <FiArrowRight className="ml-2" />
      </Link>
    </div>
  </div>
</section>

     {/* Why Partner Section */}
<section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#016fbe] mb-6">Why Partner With NextIn?</h2>
    <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-lg">
      Discover the competitive advantages that make us the ideal partner for your growth
    </p>
    
    <div className="flex flex-wrap justify-center gap-8 lg:flex-nowrap">
      {features.map((feature, idx) => (
        <div 
          key={idx} 
          className="relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group min-w-[240px] flex-1"
        >
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Animated border effect */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#016fbe]/20 transition-all duration-500 rounded-lg pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Icon container with gradient */}
            <div className="mb-6 p-4 bg-gradient-to-r from-[#016fbe] to-blue-400 rounded-lg shadow-md">
              {React.cloneElement(feature.icon, { 
                className: "w-8 h-8 text-white",
                size: 24
              })}
            </div>
            
            <h5 className=" font-bold text-gray-800 mb-3">{feature.title || "Feature"}</h5>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              {feature.text}
            </p>
          </div>
        </div>
      ))}
    </div>
    
    {/* CTA Section */}
    <div className="mt-20 text-center">
      <button className="relative px-8 py-4 bg-gradient-to-r from-[#016fbe] to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#0160a8] hover:to-blue-600 overflow-hidden group">
        <span className="relative z-10 flex items-center justify-center">
          Become a Partner <FiArrowRight className="ml-3" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0160a8] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  </div>
</section>

      {/* Register Section */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-white to-[#016fbe]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl font-bold text-[#016fbe]">Register Now</h2>
            <p className="text-lg">Enroll in our industry-ready courses and launch your tech career. We’ll contact you after registration!</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Live classes with expert instructors</li>
              <li>Real-world projects & training</li>
              <li>Internship and career assistance</li>
            </ul>
          </div>

          <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Your Name" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Select Course</label>
              <div onClick={() => setDropdownOpen(!dropdownOpen)} className="mt-1 w-full px-4 py-2 border rounded-md bg-white cursor-pointer relative">
                {selectedCourse}
              </div>
              {dropdownOpen && (
                <ul className="absolute z-[1200px] w-full bg-white border rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
                  {coursesList.map((course, idx) => (
                    <li key={idx} onClick={() => { setSelectedCourse(course); setDropdownOpen(false); }} className="px-4 py-2 hover:bg-[#016fbe] hover:text-white cursor-pointer text-sm">
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit" className="w-full bg-[#016fbe] text-white py-2 rounded hover:bg-blue-700 transition">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;