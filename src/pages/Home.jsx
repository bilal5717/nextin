import React from 'react';
import HeroSection from '../Component/banner/HomeBanner';
import TopCourses from '../Component/TopCourses';
import ServicesSection from '../Component/TopServices';
import Home1 from '../images/Home1.jpg';
import courseimg3new from '../images/courseimg3new.jpeg';
import Courseimg4 from '../images/Courseimg4.jpeg';
import GraphicDesign from '../images/graphic.jpg';
import Webdev from '../images/Webdev.jpeg';
import AppDev1 from '../images/AppDev1.jpeg'; 
import seo1 from '../images/seo1.jpeg';
import { Users, Clock, ShieldCheck, Code, Briefcase } from 'lucide-react';

const Home = () => {
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

  

  const courses = [
    {
      id: "fullStack",
      img: courseimg3new,
      title: "Full Stack Development",
      desc: "Combine frontend and backend skills to become a complete web developer.",
      duration: "6 Months"
    },
    {
      id: 'graphic',
      img: GraphicDesign,
      title: "Graphic Designing",
      desc: "Master tools like Photoshop & Illustrator to design logos, posters, and UI elements.",
      duration: "3 Months"
    },
    {
      id: 'seo',
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
      <HeroSection heroImage={Home1} />

     <TopCourses courses={courses} />

     <ServicesSection services={services} />

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
    {/* <div className="mt-20 text-center">
      <button className="relative px-8 py-4 bg-gradient-to-r from-[#016fbe] to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-[#0160a8] hover:to-blue-600 overflow-hidden group">
        <span className="relative z-10 flex items-center justify-center">
          Become a Partner <FiArrowRight className="ml-3" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0160a8] to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div> */}
  </div>
</section>

      
    </div>
  );
};

export default Home;