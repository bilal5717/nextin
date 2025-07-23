import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const TopCourses = ({ courses }) => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <section className="py-8 px-4 sm:px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#016fbe] mb-4">Our Top Courses</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our comprehensive learning programs designed for your success
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div 
              key={i} 
              onClick={() => handleCourseClick(course.id || i)} // Fallback to index if no id
              className="bg-white border border-gray-200 hover:border-[#016fbe] transition-all duration-300 hover:shadow-lg group overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={course.img} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{course.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#016fbe] transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#016fbe] font-semibold">
                    {course.price || 'Enroll Now'}
                  </span>
                  <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#016fbe] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/course" 
            className="inline-flex items-center px-6 py-3 border border-[#016fbe] text-[#016fbe] font-semibold hover:bg-[#016fbe] hover:text-white transition-colors duration-300"
          >
            View All Courses <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCourses;