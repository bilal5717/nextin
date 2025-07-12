import  { useState } from 'react';
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
  const [ setCourseType] = useState("Physical");



  const features = [
    { icon: <Users size={32} className="text-[#016fbe]" />, text: 'Flexible hiring — from individuals to full teams.' },
    { icon: <Clock size={32} className="text-[#016fbe]" />, text: 'Pay hourly or per project, no long contracts.' },
    { icon: <ShieldCheck size={32} className="text-[#016fbe]" />, text: 'Post-launch support with 45-day warranty.' },
    { icon: <Code size={32} className="text-[#016fbe]" />, text: 'Full-stack dev for web, mobile, IT support.' },
    { icon: <Briefcase size={32} className="text-[#016fbe]" />, text: 'Dedicated project manager from start to end.' },
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
      <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-16 md:py-20">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#016fbe]">
            Empower Your Business with Cutting‑Edge Solutions
          </h1>
          <p className="text-lg font-semibold uppercase text-[#016fbe]">Your Complete IT Partner</p>
          <p className="text-gray-700">
            We specialize in delivering customized digital solutions through a versatile and hybrid working model — from idea to launch.
          </p>
          <button className="mt-4 bg-[#016fbe] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
            Explore Our Services
          </button>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={Home1} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-10">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left flex flex-col h-full hover:text-[#016fbe]">
              <img src={course.img} alt={course.title} className="mb-4 rounded h-40 w-full object-cover" />
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <p className="text-sm mb-2 text-[#016fbe] font-semibold">{course.duration}</p>
              <p className="text-gray-700 text-sm">{course.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/course" className="inline-flex items-center text-[#016fbe] font-semibold hover:underline">
            View All Courses <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition text-left flex flex-col h-full">
              <img src={service.img} alt={service.title} className="h-40 w-full object-cover rounded mb-4" />
              <h3 className="text-lg font-semibold text-[#016fbe] mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className="inline-flex items-center text-[#016fbe] font-semibold hover:underline">
            Explore Services <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-12">Why Partner With NextIn?</h2>
        <div className="flex justify-between max-w-7xl mx-auto gap-4 flex-wrap md:flex-nowrap">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center bg-white h-40 w-full md:w-[17%] p-4 rounded-2xl shadow-md border border-transparent hover:border-[#016fbe] transition">
              <div className="mb-3">{feature.icon}</div>
              <p className="text-gray-700 text-sm font-medium">{feature.text}</p>
            </div>
          ))}
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
{/* New Section for Course Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Course Type</label>
        <div className="mt-2 flex space-x-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="courseType"
              value="Physical"
              onChange={() => {
                setCourseType("Physical");
                setSelectedCourse(""); // Reset selected course when type changes
                // Example physical courses
              }}
              className="form-radio text-[#016fbe] focus:ring-[#016fbe]"
              defaultChecked
            />
            <span className="ml-2 text-sm">Physical</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="courseType"
              value="Online"
              onChange={() => {
                setCourseType("Online");
                setSelectedCourse(""); // Reset selected course when type changes
               // Example online courses
              }}
              className="form-radio text-[#016fbe] focus:ring-[#016fbe]"
            />
            <span className="ml-2 text-sm">Online</span>
          </label>
        </div>
      </div>

      {/* Course Dropdown */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700">Select Course</label>
        <div onClick={() => setDropdownOpen(!dropdownOpen)} className="mt-1 w-full px-4 py-2 border rounded-md bg-white cursor-pointer relative">
          {selectedCourse || "Select a course"}
        </div>
        {dropdownOpen && (
          <ul className="absolute z-[1200px] w-full bg-white border rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
            {coursesList.map((course, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setSelectedCourse(course);
                  setDropdownOpen(false);
                }}
                className="px-4 py-2 hover:bg-[#016fbe] hover:text-white cursor-pointer text-sm"
              >
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