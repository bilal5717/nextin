import Teacher from '../images/Teacher.jpeg';
import Home1 from '../images/Home1.jpg';

const teachers = [
  { name: 'Alice Johnson', role: 'Web Dev Instructor', img: Teacher },
  { name: 'Bilal Khan', role: 'Mobile Dev Instructor', img: Teacher },
  { name: 'Cara Smith', role: 'Game Dev Instructor', img: Teacher },
  { name: 'Danish Ali', role: 'SEO & Marketing Instructor', img: Teacher },
];

const fixedReviews = [
  "NextIn's learning environment is so supportive, and the instructors are true experts!",
  "I built my portfolio site and landed freelance work thanks to the hands-on teaching at NextIn.",
  "One of the best tech platforms in Pakistan! The quality and support exceeded expectations.",
];

const About = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#016fbe] to-[#025fa0] text-white px-4 md:px-20 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold">About NextIn</h1>
          <p className="text-lg leading-relaxed">
            NextIn is a premier IT training institute dedicated to empowering learners with industry-ready skills. Founded by passionate educators and tech experts, we deliver hands-on, real-world training across web development, mobile applications, game development, and digital marketing. Our mission is to bridge the technology skills gap and build confident professionals.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={Home1} alt="About NextIn" className="rounded-lg w-full h-auto shadow-lg" />
        </div>
      </section>

      {/* Expert Teachers */}
      <section className="py-16 px-4 md:px-20">
        <h2 className="text-4xl font-bold text-[#016fbe] text-center mb-10">Meet Our Expert Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teachers.map(t => (
            <div key={t.name} className="bg-white rounded-xl shadow-md p-6 text-center">
              <img src={t.img} alt={t.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
              <p className="text-sm text-[#016fbe]">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Success */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-[#016fbe] text-center mb-8">Student Success</h2>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-8 max-w-5xl mx-auto">
          {[
            { num: '1,500+', label: 'Graduates' },
            { num: '85%', label: 'Job Placement' },
            { num: '4.8/5', label: 'Avg. Rating' },
            { num: '200+', label: 'Projects Completed' }
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl font-extrabold text-[#016fbe]">{stat.num}</div>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Student Reviews */}
      <section className="py-16 px-4 md:px-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-[#016fbe] text-center mb-10">What Our Students Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {fixedReviews.map((text, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 border-l-4 border-[#016fbe]">
              <p className="italic text-gray-700 leading-relaxed">"{text}"</p>
              <p className="text-right mt-4 font-semibold text-[#016fbe]">— Student</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
