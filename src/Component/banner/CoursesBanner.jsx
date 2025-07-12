import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Frontend from '../../images/Frontend.png';
import ReactImg from '../../images/ReactImg.jpg';
import Backend from '../../images/Backend.jpg';
import MobileApp from '../../images/mobileApp.jpg';

const BannerSlider = () => {
  // Banner data - specific to this component
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
  }, [isAutoPlaying, bannerImages.length]);

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
    <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
      {/* Slides */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerImages.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={banner.img}
              alt={banner.title}
              className="w-full h-full  course-banner"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
               
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
  );
};

export default BannerSlider;