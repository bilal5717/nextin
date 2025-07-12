import React from 'react';

const AboutBanner = ({Home2}) => {
  return (
    <section className="bg-[conic-gradient(at_top_right,_#016fbe,_#ffffff,_#025fa0)] text-white px-4 md:px-20 py-20 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl font-extrabold">About NextIn</h1>
        <p className="text-lg leading-relaxed">
          NextIn is a premier IT training institute dedicated to empowering learners with industry-ready skills. Founded by passionate educators and tech experts, we deliver hands-on, real-world training across web development, mobile applications, game development, and digital marketing. Our mission is to bridge the technology skills gap and build confident professionals.
        </p>
      </div>
      <div className="md:w-1/2 about-banner-img">
        <img src={Home2} alt="About NextIn" className="rounded-lg w-full h-auto shadow-lg" />
      </div>
    </section>
  );
};

export default AboutBanner;