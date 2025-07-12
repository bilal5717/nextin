import Teacher from '../images/Teacher.jpeg';
import Home2 from '../images/Home2.webp';
import CountdownTimer from '../Component/CountDownTimer';
import AboutBanner from '../Component/banner/AboutBanner';
import StudentReviews from '../Component/StudentReview';
const teachers = [
  { name: 'Bilal Baqar', role: 'Founder & CEO', img: Teacher },
  { name: 'Saqlain Ahmad', role: 'Founder & Director', img: Teacher },
  { name: 'Muhammad Ramzan', role: 'Manager', img: Teacher },
  { name: 'Muzammil Amin', role: 'Team Leader', img: Teacher },
];

/* const fixedReviews = [
  "NextIn's learning environment is so supportive, and the instructors are true experts!",
  "I built my portfolio site and landed freelance work thanks to the hands-on teaching at NextIn.",
  "One of the best tech platforms in Pakistan! The quality and support exceeded expectations.",
]; */

const About = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">

    <AboutBanner Home2={Home2} />

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

      <CountdownTimer />

     <StudentReviews />

    </div>
  );
};

export default About;
