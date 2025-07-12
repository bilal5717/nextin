import Home1 from '../images/Home1.jpg';
import WebImg2 from '../images/WebImg2.jpeg';
import MobileImg from '../images/MobileImg.png';
import GameImg from '../images/game.webp';
import Seo2 from '../images/seo2.jpg';

const services = [
  {
    key: 'web',
    title: 'Web Development',
    image: WebImg2,
    shortDesc: 'Create scalable, custom web platforms using modern frameworks with secure backend integration and responsive design for all devices.',
    detailedDesc: "Our web development service delivers tailored, responsive websites using React, Next.js, and laravel. We ensure lightning-fast performance, excellent SEO, accessibility, and seamless user experiences. Whether it's a startup or enterprise, our team brings your vision to life online. We integrate secure databases, responsive design, and modern UI frameworks to provide dynamic, user-focused solutions.",
  },
  {
    key: 'mobile',
    title: 'Mobile App Development',
    image: MobileImg,
    shortDesc: 'Build cross-platform or native mobile apps with powerful features, sleek UI, and smooth performance.',
    detailedDesc: "We build mobile apps using Flutter, React Native, and native SDKs to create seamless apps for both iOS and Android. From intuitive navigation to secure data handling and backend integration, we create apps that meet your business needs. Our apps are optimized for performance, user experience, and compatibility across various screen sizes and devices.",
  },
  {
    key: 'game',
    title: 'Game Development',
    image: GameImg,
    shortDesc: 'Design immersive and engaging 2D/3D games using Unity and advanced development engines.',
    detailedDesc: "We develop interactive 2D and 3D games for mobile, desktop, and web platforms. Using Unity and Godot, we craft games with dynamic physics, multiplayer support, and immersive sound. Whether it's a casual game or an action-packed title, our team delivers end-to-end game development with level design, animation, and gameplay balancing. User retention and fun are at the core of our strategy.",
  },
  {
    key: 'seo',
    title: 'SEO & Google Ads',
    image: Seo2,
    shortDesc: 'Boost your online presence with targeted Google Ads, keyword optimization, and analytics-driven SEO strategies.',
    detailedDesc: "Our SEO services help you climb search rankings with on-page optimization, backlink strategies, and keyword research. We also manage Google Ads campaigns to drive paid traffic with measurable ROI. From technical SEO audits to landing page optimization, we offer complete digital marketing solutions to increase visibility, engagement, and conversions across all platforms.",
  },
];

const Services = () => (
  <div className="text-gray-800 bg-gradient-to-b from-white to-blue-50">
    {/* Hero Section */}
    <section className="relative w-full h-64 md:h-96">
      <img
        src={Home1}
        alt="Services Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Services</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Your goals. Our expertise. Let's achieve them together.
        </p>
        <div className="mt-8 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>

    {/* Service Cards Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-lg text-blue-600 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ key, title, shortDesc, image }) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative border border-blue-100 h-full flex flex-col"
          >
           
            
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors duration-300 mr-4">
                  <svg className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 flex-grow">
                {shortDesc}
              </p>
              
              <a 
                href={`#${key}`} 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300 mt-auto"
              >
                Explore service
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Detailed Services Section */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Service Details</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            Dive deeper into our specialized services and how they can benefit your business
          </p>
        </div>

        {services.map(({ key, title, detailedDesc, image }, index) => (
          <div 
            key={key} 
            id={key}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 mb-20`}
          >
            <div className="md:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl h-80 w-full">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-blue-600/20"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="flex items-center mb-6">
                <span className="text-4xl font-bold text-blue-600 mr-4">0{index + 1}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {detailedDesc}
              </p>
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss how we can help you achieve your business goals with our tailored solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Get a Free Consultation
          </button>
          
        </div>
      </div>
    </section>
  </div>
);

export default Services;