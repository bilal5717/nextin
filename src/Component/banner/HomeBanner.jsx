const HeroSection = ({ heroImage }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-8 md:py-10">
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#016fbe] leading-snug">
          Lead Your Industry with Next‑Level Innovation
        </h1>
        <p className="text-lg font-semibold uppercase text-[#016fbe] tracking-wide leading-relaxed">
          Your Complete IT Partner
        </p>
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          We specialize in delivering customized digital solutions through a versatile and hybrid working model — from idea to launch.
        </p>
        <div className="pt-2">
          <a
            href="/services"
            className="inline-block bg-[#016fbe] text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Explore Our Services
          </a>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;