import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Home1 from '../images/Home1.jpg';
import Angular from '../images/Angular.jpg';
import Frontend from '../images/Frontend.jpg';
import ReactImg from '../images/ReactImg.jpg';
import nextjs from '../images/nextjs.jpg';
import Backend from '../images/Backend.jpg';
import php2 from '../images/php2.jpg';
import DB1 from '../images/DB1.jpg';
import Symfony from '../images/Symfony.jpg';
import laravel from '../images/laravel.jpg';
import SEOImage from '../images/SEOImage.jpg';
import wordpress from '../images/wordpress.png';
import GraphicDesign from '../images/GraphicDesign.jpg';
import digitalMarketing from '../images/digitalMarketing.webp';
import MobileApp from '../images/MobileApp.jpg';
import WebHosting from '../images/WebHosting.jpg';

// Banner data
const bannerImages = [
  {
    img: Frontend,
    title: 'Master Web Development',
    subtitle: 'Start your journey with our comprehensive courses',
    
    ctaLink: '#courses'
  },
  {
    img: ReactImg,
    title: 'Become a React Expert',
    subtitle: 'Learn from industry professionals with real-world projects',
  
    ctaLink: '#courses'
  },
  {
    img: Backend,
    title: 'Full-Stack Development',
    subtitle: 'Frontend to backend - complete training package',
  
    ctaLink: '#courses'
  },
  {
    img: MobileApp,
    title: 'Mobile App Development',
    subtitle: 'Build cross-platform apps with React Native',
  
    ctaLink: '#courses'
  }
];

// Course list
const courses = [
  {
    title: 'Frontend Web Development',
    desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries. Build responsive, interactive websites. Practice real-world frontend projects.',
    img: Frontend,
    duration: '3 Months',
  },
  {
    title: 'React JS Masterclass',
    desc: 'Understand React core concepts like hooks, components, props, and state. Build SPAs with routing and API integration. Project-based learning.',
    img: ReactImg,
    duration: '3 Months',
  },
  {
    title: 'Next JS Bootcamp',
    desc: 'Master server-side rendering with Next.js. Learn routing, API routes, dynamic pages. Build production-ready apps using React + Next.js.',
    img: nextjs,
    duration: '3 Months',
  },
  {
    title: 'Angular Framework Essentials',
    desc: 'Learn Angular structure, components, and services. Use RxJS for state and HTTP handling. Build scalable enterprise-level applications.',
    img: Angular,
    duration: '3 Months',
  },
  {
    title: 'Backend Development Course',
    desc: 'Cover Node.js, Express, REST APIs, and authentication. Build server-side logic and connect to databases. Secure backend implementation.',
    img: Backend,
    duration: '3 Months',
  },
  {
    title: 'PHP Programming Course',
    desc: 'Understand PHP fundamentals and syntax. Handle forms, sessions, and dynamic content. Integrate PHP with MySQL databases.',
    img: php2,
    duration: '3 Months',
  },
  {
    title: 'Database Management',
    desc: 'Master SQL for MySQL and basics of MongoDB. Learn data modeling, relationships, and database optimization. Build secure data-driven apps.',
    img: DB1,
    duration: '2 Months',
  },
  {
    title: 'Laravel Framework',
    desc: 'Work with MVC architecture and Blade templates. Build RESTful APIs and admin dashboards. Learn routing, middleware, and authentication.',
    img: laravel,
    duration: '3 Months',
  },
  {
    title: 'Symfony Development',
    desc: 'Explore Symfony bundles, components, and environment. Build structured, testable, and scalable PHP applications. Enterprise-level skills.',
    img: Symfony,
    duration: '3 Months',
  },
  {
    title: 'WordPress Website Design',
    desc: 'Create websites using WordPress themes and plugins. Customize pages with Elementor. Learn blogging, SEO, and basic eCommerce setup.',
    img: wordpress,
    duration: '2 Months',
  },
  {
    title: 'Graphic Design Fundamentals',
    desc: 'Use tools like Adobe Photoshop and Illustrator. Design logos, social media posts, and marketing banners. Develop creative skills.',
    img: GraphicDesign,
    duration: '3 Months',
  },
  {
    title: 'SEO & Google Ads',
    desc: 'Improve website rankings using SEO best practices. Run ad campaigns using Google Ads. Understand targeting, keywords, and analytics.',
    img: SEOImage,
    duration: '3 Months',
  },
  {
    title: 'Web Hosting',
    desc: 'Learn domain registration, DNS setup, and cPanel essentials. Host static and dynamic websites with FTP and file manager. Manage databases, emails, and SSL certificates.',
    img: WebHosting,
    duration: '2 Months',
  },
  {
    title: 'Digital Marketing Mastery',
    desc: 'Master social media marketing, email campaigns, and content strategy. Learn tools like Google Analytics and Meta Ads Manager. Plan, execute, and optimize marketing funnels.',
    img: digitalMarketing,
    duration: '2 Months',
  },
  {
    title: 'Mobile App Development',
    desc: 'Build Android and iOS apps using React Native or Flutter. Learn UI design, navigation, API integration, and deployment. Gain full-stack mobile development experience.',
    img: MobileApp,
    duration: '3 Months',
  },
];

// Helper function
const getFirstThreeWords = (title) => {
  const words = title.trim().split(/\s+/);
  return words.length > 3 ? words.slice(0, 3).join(' ') + '...' : title;
};

const Courses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 10000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Banner Slider */}
      <section className="relative h-[200px] md:h-[350px] w-full overflow-hidden bg-gray-100">
        {/* Slides */}
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {bannerImages.map((banner, index) => (
            <div 
              key={index} 
              className="w-full flex-shrink-0 relative"
            >
              <img
                src={banner.img}
                alt={banner.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
                    {banner.title}
                  </h1>
                  <p className="text-lg md:text-2xl text-white mb-8 animate-fadeIn delay-100">
                    {banner.subtitle}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
          aria-label="Next slide"
        >
          <FiChevronRight size={28} />
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Course Cards Grid */}
      <section id="courses" className="py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#016fbe] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    loading="lazy"
                    onError={(e) => (e.target.src = Home1)}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2 text-left">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#016fbe] transition-colors">
                    {getFirstThreeWords(course.title)}
                  </h3>
                  <span className="text-sm font-medium text-[#016fbe]">
                    Duration: {course.duration}
                  </span>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {course.desc}
                  </p>
                  <button className="mt-4 text-[#016fbe] font-semibold hover:underline self-start">
                    Learn More →
                  </button>
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