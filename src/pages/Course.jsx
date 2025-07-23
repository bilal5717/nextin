import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Home1 from '../images/Home1.jpg';
import Frontend from '../images/Frontend.png';
import ReactImg from '../images/ReactImg.jpg';
import nextjs from '../images/nextjs.png';
import Angular from '../images/Angular.jpg';
import Backend from '../images/Backend.jpg';
import php2 from '../images/php2.jpg';
import DB1 from '../images/DB1.jpg';
import laravel from '../images/laravel.jpg';
import Symfony from '../images/Symfony.jpg';
import wordpress from '../images/wordpress.png';
import GraphicDesign from '../images/graphic.jpg';
import courseimg3new from '../images/courseimg3new.jpeg';
import SEOImage from '../images/SEOImage.jpg';
import WebHosting from '../images/WebHosting.jpg';
import digitalMarketing from '../images/digitalMarketing.webp';
import MobileApp from '../images/mobileApp.jpg';

const Courses = () => {
  const navigate = useNavigate();

  // Course data with IDs for routing
  const courses = [
    {
      id: 'frontend',
      title: 'Frontend Web Development',
      desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.',
      img: Frontend,
      duration: '3 Months',
    },
    {
      id: 'react',
      title: 'React JS Masterclass',
      desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.',
      img: ReactImg,
      duration: '3 Months',
    },
    {
      id: 'nextjs',
      title: 'Next JS Bootcamp',
      desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.',
      img: nextjs,
      duration: '3 Months',
    },
    {
      id: 'angular',
      title: 'Angular Framework Essentials',
      desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.',
      img: Angular,
      duration: '3 Months',
    },
    {
      id: 'backend',
      title: 'Backend Development Course',
      desc: 'Cover Node.js, Express, REST APIs, and authentication. Build server-side logic and connect to databases. Secure backend implementation.',
      img: Backend,
      duration: '3 Months',
    },
    {
      id: 'php',
      title: 'PHP Programming Course',
      desc: 'Understand PHP fundamentals and syntax. Handle forms, sessions, and dynamic content. Integrate PHP with MySQL databases.',
      img: php2,
      duration: '3 Months',
    },
    {
      id: 'database',
      title: 'Database Management',
      desc: 'Master SQL for MySQL and basics of MongoDB. Learn data modeling, relationships, and database optimization. Build secure data-driven apps.',
      img: DB1,
      duration: '2 Months',
    },
    {
      id: 'laravel',
      title: 'Laravel Framework',
      desc: 'Work with MVC architecture and Blade templates. Build RESTful APIs and admin dashboards. Learn routing, middleware, and authentication.',
      img: laravel,
      duration: '3 Months',
    },
    {
      id: 'symfony',
      title: 'Symfony Development',
      desc: 'Explore Symfony bundles, components, and environment. Build structured, testable, and scalable PHP applications. Enterprise-level skills.',
      img: Symfony,
      duration: '3 Months',
    },
    {
      id: 'wordpress',
      title: 'WordPress Website Design',
      desc: 'Create websites using WordPress themes and plugins. Customize pages with Elementor. Learn blogging, SEO, and basic eCommerce setup.',
      img: wordpress,
      duration: '2 Months',
    },
    {
      id: 'graphic',
      title: 'Graphic Design Fundamentals',
      desc: 'Use tools like Adobe Photoshop and Illustrator. Design logos, social media posts, and marketing banners. Develop creative skills.',
      img: GraphicDesign,
      duration: '3 Months',
    },
    {
      id: 'seo',
      title: 'SEO & Google Ads',
      desc: 'Improve website rankings using SEO best practices. Run ad campaigns using Google Ads. Understand targeting, keywords, and analytics.',
      img: SEOImage,
      duration: '3 Months',
    },
    {
      id: 'hosting',
      title: 'Web Hosting',
      desc: 'Learn domain registration, DNS setup, and cPanel essentials. Host static and dynamic websites with FTP and file manager. Manage databases, emails, and SSL certificates.',
      img: WebHosting,
      duration: '2 Months',
    },
    {
      id: 'marketing',
      title: 'Digital Marketing Mastery',
      desc: 'Master social media marketing, email campaigns, and content strategy. Learn tools like Google Analytics and Meta Ads Manager. Plan, execute, and optimize marketing funnels.',
      img: digitalMarketing,
      duration: '2 Months',
    },
    {
      id: 'mobileApp',
      title: 'Mobile App Development',
      desc: 'Build Android and iOS apps using React Native or Flutter. Learn UI design, navigation, API integration, and deployment. Gain full-stack mobile development experience.',
      img: MobileApp,
      duration: '3 Months',
    },
    {
      id: "fullStack",
      img: courseimg3new,
      title: "Full Stack Development",
      desc: "Combine frontend and backend skills to become a complete web developer.",
      duration: "6 Months"
    },
  ];

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      <section className="relative w-full h-52 md:h-200">
        <img
          src={Home1}
          alt="Courses Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-[#016fbe]/80 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">All Offered Courses</h1>
          <p className="text-lg text-white">Turn your dreams into skills, and your skills into success</p>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div 
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="bg-white border border-gray-200 hover:border-[#016fbe] transition-all duration-300 hover:shadow-lg group overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => (e.target.src = Home1)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{course.duration}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#016fbe] transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#016fbe] font-semibold">Read More</span>
                    <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#016fbe] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;