import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Placeholder reviews data (replace with your actual fixedReviews array)
const fixedReviews = [
  "NextIn transformed my career with hands-on web development training. The instructors are amazing!",
  "The digital marketing course was a game-changer. I now run successful campaigns with confidence.",
  "Learning game development at NextIn was fun and practical. Highly recommend their programs!",
  "The mobile app development course gave me the skills to build my own app from scratch."
];

const StudentReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true, // Enable center mode for active slide
    centerPadding: '0px', // No padding to ensure center slide is prominent
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false, // Disable center mode on smaller screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
    // Ensure active-slide class is applied after each transition
    afterChange: (current) => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach(slide => slide.classList.remove('active-slide'));
      const activeSlide = document.querySelector(`.slick-slide[data-index="${current}"]`);
      if (activeSlide) activeSlide.classList.add('active-slide');
    },
    // Initialize the first active slide
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll('.slick-slide');
      slides.forEach(slide => slide.classList.remove('active-slide'));
      setTimeout(() => {
        const activeSlide = document.querySelector(`.slick-slide[data-index="${next}"]`);
        if (activeSlide) activeSlide.classList.add('active-slide');
      }, 0);
    },
  };

  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#016fbe] text-center mb-12 drop-shadow-md tracking-tight">
        Voices of Our Students
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {fixedReviews.map((text, i) => (
            <div key={i} className="px-4">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border-l-4 border-[#016fbe] transition-all duration-300 hover:shadow-2xl">
                <div className="flex items-start mb-4">
                  <svg className="w-8 h-8 text-[#016fbe] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.403c-2.995 1.411-4.996 4.098-4.996 7.206h-2.003l-.001 8.391h-2.979zm-10.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.403c-2.995 1.411-5.003 4.098-5.003 7.206h-2.003l-.001 8.391h-2.989z"/>
                  </svg>
                  <p className="text-gray-800 italic text-lg leading-relaxed font-medium">"{text}"</p>
                </div>
                <p className="text-right mt-4 font-semibold text-[#016fbe] text-base">— Student</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .slick-slide {
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 0.6;
          transform: scale(0.85);
        }
        .slick-slide.active-slide {
          opacity: 1;
          transform: scale(1.15);
          z-index: 10;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #016fbe;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #016fbe;
          opacity: 1;
        }
        .slick-center .slick-slide {
          opacity: 1 !important;
          transform: scale(1.15) !important;
          z-index: 10 !important;
        }
      `}</style>
    </section>
  );
};

export default StudentReviews;