import React from 'react'
import  { useState } from 'react';
const EnrollForm = () => {
     const [dropdownOpen, setDropdownOpen] = useState(false);
      const [selectedCourse, setSelectedCourse] = useState('Select a course');
     const coursesList = [
    'Full Stack Development',
    'Graphic Designing',
    'SEO & Google Ads',
    'Frontend Development',
    'Backend Development',
    'React Js Development',
    'Angular Framework',
    'Symfony Programming',
    'PHP Programming',
    'Laravel',
    'App Development',
    'Database',
    'Digital Marketing',
    'Web Hosting',
    'WordPress'
  ];
  return (
    <div>
      <section className="py-16 px-4 sm:px-6 md:px-20 bg-gradient-to-r from-white to-[#016fbe]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-800">
            <h2 className="text-4xl font-bold text-[#016fbe]">Register Now</h2>
            <p className="text-lg">Enroll in our industry-ready courses and launch your tech career. We’ll contact you after registration!</p>
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>Live classes with expert instructors</li>
              <li>Real-world projects & training</li>
              <li>Internship and career assistance</li>
            </ul>
          </div>

          <form className="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" placeholder="Your Name" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="you@example.com" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" placeholder="+92 300 1234567" className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-[#016fbe] focus:border-[#016fbe]" />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">Select Course</label>
              <div onClick={() => setDropdownOpen(!dropdownOpen)} className="mt-1 w-full px-4 py-2 border rounded-md bg-white cursor-pointer relative">
                {selectedCourse}
              </div>
              {dropdownOpen && (
                <ul className="absolute z-[1200px] w-full bg-white border rounded-md mt-1 max-h-40 overflow-y-auto shadow-lg">
                  {coursesList.map((course, idx) => (
                    <li key={idx} onClick={() => { setSelectedCourse(course); setDropdownOpen(false); }} className="px-4 py-2 hover:bg-[#016fbe] hover:text-white cursor-pointer text-sm">
                      {course}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit" className="w-full bg-[#016fbe] text-white py-2 rounded hover:bg-blue-700 transition">
              Submit Registration
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EnrollForm
