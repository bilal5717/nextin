import Home1 from '../images/Home1.jpg';
import WebImg2 from '../images/WebImg2.jpeg';
import MobileImg from '../images/MobileImg.jpeg';
import GameImg from '../images/Seo2.jpeg';
import Seo2 from '../images/Seo2.jpeg';

const services = [
  {
    key: 'web',
    title: 'Web Development',
    image: WebImg2,
    shortDesc:
      'Create scalable, custom web platforms using modern frameworks with secure backend integration and responsive design for all devices.',
    detailedDesc:
      'Our web development service delivers tailored, responsive websites using React, Next.js, and Node.js. We ensure lightning-fast performance, excellent SEO, accessibility, and seamless user experiences. Whether it’s a startup or enterprise, our team brings your vision to life online. We integrate secure databases, responsive design, and modern UI frameworks to provide dynamic, user-focused solutions.',
  },
  {
    key: 'mobile',
    title: 'Mobile App Development',
    image: MobileImg,
    shortDesc:
      'Build cross-platform or native mobile apps with powerful features, sleek UI, and smooth performance.',
    detailedDesc:
      'We build mobile apps using Flutter, React Native, and native SDKs to create seamless apps for both iOS and Android. From intuitive navigation to secure data handling and backend integration, we create apps that meet your business needs. Our apps are optimized for performance, user experience, and compatibility across various screen sizes and devices.',
  },
  {
    key: 'game',
    title: 'Game Development',
    image: GameImg,
    shortDesc:
      'Design immersive and engaging 2D/3D games using Unity and advanced development engines.',
    detailedDesc:
      'We develop interactive 2D and 3D games for mobile, desktop, and web platforms. Using Unity and Godot, we craft games with dynamic physics, multiplayer support, and immersive sound. Whether it’s a casual game or an action-packed title, our team delivers end-to-end game development with level design, animation, and gameplay balancing. User retention and fun are at the core of our strategy.',
  },
  {
    key: 'seo',
    title: 'SEO & Google Ads',
    image: Seo2,
    shortDesc:
      'Boost your online presence with targeted Google Ads, keyword optimization, and analytics-driven SEO strategies.',
    detailedDesc:
      'Our SEO services help you climb search rankings with on-page optimization, backlink strategies, and keyword research. We also manage Google Ads campaigns to drive paid traffic with measurable ROI. From technical SEO audits to landing page optimization, we offer complete digital marketing solutions to increase visibility, engagement, and conversions across all platforms.',
  },
];

const Services = () => (
  <div className="text-gray-800 overflow-x-hidden">

    {/* Hero Section with blue gradient */}
    <section className="w-full bg-gradient-to-r from-[#016fbe] to-[#025fa0] text-white px-4 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-extrabold">Our Services</h1>
        <p className="text-lg text-white max-w-lg">
          Explore how NextIn can transform your digital vision into reality with our powerful tech solutions.
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src={Home1}
          alt="NextIn Services Hero"
          className="rounded-lg w-full h-auto shadow-lg"
        />
      </div>
    </section>

    {/* Service Cards Section */}
    <section className="py-16 px-4 sm:px-10 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map(({ key, title, shortDesc }) => (
          <div
            key={key}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition duration-300 hover:scale-[1.03] p-6 text-left min-h-[260px] hover:bg-gradient-to-br hover:from-[#016fbe] hover:to-[#0580e5] hover:text-white"
          >
            <h3 className="text-xl font-bold mb-3 pl-1">{title}</h3>
            <p className="text-sm leading-relaxed">{shortDesc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Detailed Descriptions Section */}
    <section className="pb-20 px-4 sm:px-10 md:px-20 max-w-7xl mx-auto">
      {services.map(({ key, title, detailedDesc, image }, index) => (
        <div
          key={key}
          className={`flex flex-col md:flex-row items-center gap-6 mb-16 border-b pb-8 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2">
            <img
              src={image}
              alt=''
              className="rounded-lg shadow-md w-full h-60 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-[#016fbe] mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{detailedDesc}</p>
          </div>
        </div>
      ))}
    </section>
  </div>
);

export default Services;


