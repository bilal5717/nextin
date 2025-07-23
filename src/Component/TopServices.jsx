import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServicesSection = ({ services }) => {
  return (
    <section className="bg-gray-50 py-8 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional solutions tailored to meet your specific needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, i) => (
            <Link
              to="/services"
              key={i}
              className="bg-white border border-gray-200 hover:border-[#016fbe] transition-all duration-300 hover:shadow-lg group overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#016fbe] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#016fbe] font-semibold">Learn more</span>
                  <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#016fbe] transition-colors" />
                </div>
              </div>
            </Link>
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
  );
};

export default ServicesSection;
