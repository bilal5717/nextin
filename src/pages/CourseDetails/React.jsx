import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowLeft, FiClock, FiCalendar, FiDollarSign, FiUser, FiAward } from 'react-icons/fi';
import { FaCheckCircle } from 'react-icons/fa';
import Home1 from '../../images/Home1.jpg';
import CourseData from '../../utilities/data/CourseData'; // Import the CourseData component
import EnrollmentModal from '../../Component/models/EnrollmentModel';
const CourseDetails = () => {
  const { courseId } = useParams();
  const coursesData = CourseData(); // Get the course data
  const course = coursesData[courseId] || coursesData.frontend; // Default to frontend if not found
const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  return (
    <div className="bg-white text-gray-800">
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4 px-4 sm:px-6 md:px-20">
        <Link 
          to="/course" 
          className="inline-flex items-center text-[#016fbe] hover:text-[#014a8c] transition-colors"
        >
          <FiArrowLeft className="mr-2" />
          Back to All Courses
        </Link>
      </div>

      {/* Course Header */}
      <section className="py-8 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Course Image */}
          <div className="md:w-1/3 lg:w-2/5">
            <img 
              src={course.img} 
              alt={course.title} 
              className="w-full h-auto rounded-lg shadow-md"
              onError={(e) => (e.target.src = Home1)}
            />
          </div>
          
          {/* Course Basic Info */}
          <div className="md:w-2/3 lg:w-3/5">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{course.longDesc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <FiClock className="text-[#016fbe] text-xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50  rounded-lg">
                <FiCalendar className="text-[#016fbe] text-xl mr-3" size={50} />
                <div>
                  <p className="text-sm text-gray-500">Schedule</p>
                  <p className="font-semibold">
                    {course.schedule.map(s => `${s.day} ${s.time}`).join(', ')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                <FiDollarSign className="text-[#016fbe] text-xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Course Fee</p>
                  <p className="font-semibold">{course.fee}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
  onClick={() => setIsEnrollModalOpen(true)}
  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-white"
>
  Enroll Now
</button>
             {/*  <button className="border border-[#016fbe] text-[#016fbe] hover:bg-[#016fbe]/10 px-6 py-3 rounded-md font-medium transition-colors" disabled>
                Download Syllabus
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Course Details Sections */}
      <section className="py-12 px-4 sm:px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Course Syllabus */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
                  Course Syllabus
                </h2>
                <div className="space-y-6">
                  {course.syllabus.map((module, index) => (
                    <div key={index} className="border-l-2 border-[#016fbe] pl-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {module.week || module.weeks || module.module || module.phase}: {module.title}
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {module.topics.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#016fbe] mr-2">•</span>
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Payment Options */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2">
                  Payment Options
                </h2>
                <div className="space-y-4">
                  {course.paymentOptions.map((option, index) => (
                    <div key={index} className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-[#016fbe] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-[#016fbe]/10 flex items-center justify-center mr-4">
                        <span className="text-[#016fbe] font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 font-medium">{option}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Course Requirements */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
                  Requirements
                </h3>
                <p className="text-gray-700">{course.prerequisites}</p>
              </div>
              
              {/* Instructor Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
                  Instructor
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <FiUser className="text-gray-400 text-2xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{course.instructor.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{course.instructor.bio}</p>
                    <div className="mt-3">
                      <h5 className="text-sm font-semibold text-gray-700">Expertise:</h5>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {course.instructor.expertise.map((skill, i) => (
                          <span key={i} className="bg-[#016fbe]/10 text-[#016fbe] text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certification */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2">
                  Certification
                </h3>
                <div className="flex items-start">
                  <FiAward className="text-[#016fbe] text-2xl mr-4 mt-1" />
                  <div>
                    <p className="text-gray-700">
                      {course.certification?.description || 'Upon successful completion, students will receive a verified certificate of completion that can be shared on LinkedIn and with potential employers.'}
                    </p>
                    {course.certification?.benefits && (
                      <ul className="mt-2 space-y-2">
                        {course.certification.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-[#016fbe] mr-2">•</span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Enrollment CTA */}
              <div className="bg-[#016fbe] p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-2">Ready to Enroll?</h3>
                <p className="mb-4">Start your journey to becoming a {course.title.split(' ')[0]} expert today.</p>
                <button className="w-full bg-white text-[#016fbe] hover:bg-gray-100 font-semibold py-3 px-4 rounded-md transition-colors" onClick={() => setIsEnrollModalOpen(true)}>
                  Join the Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <EnrollmentModal 
  isOpen={isEnrollModalOpen} 
  onClose={() => setIsEnrollModalOpen(false)} 
/>
      {/* Related Courses */}
      <section className="py-12 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(coursesData)
              .filter(([id]) => id !== courseId)
              .slice(0, 3)
              .map(([id, relatedCourse]) => (
                <Link 
                  to={`/courses/${id}`} 
                  key={id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <img 
                      src={relatedCourse.img} 
                      alt={relatedCourse.title} 
                      className="h-full w-full object-cover"
                      onError={(e) => (e.target.src = Home1)}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{relatedCourse.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedCourse.desc}
                    </p>
                    <div className="text-[#016fbe] font-medium text-sm hover:underline">
                      View Details
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;