import { FaSearch, FaPlus, FaEdit, FaTrash, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Course Management</h1>
         <Link 
          to="/admin/courses/add" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center w-full md:w-auto"
        >
          <FaPlus className="mr-2" />
          Add New Course
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Courses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course) => (
          <div key={course} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gray-200 relative">
              <div className="absolute top-2 right-2 flex space-x-2">
                
                 <Link 
          to="/admin/courses/add" 
          className="p-1 bg-white rounded-full shadow text-blue-600 hover:text-blue-800"
        >
          <FaEdit size={14} />
        </Link>
                <button className="p-1 bg-white rounded-full shadow text-red-600 hover:text-red-800">
                  <FaTrash size={14} />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Course Title {course}</h3>
              <p className="text-gray-600 text-sm mb-3">Short description of the course content and objectives.</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <FaChalkboardTeacher className="mr-1" />
                <span className="mr-4">Instructor {course}</span>
                <span>{course * 5} students</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 text-xs rounded-full 
                  ${course % 3 === 0 ? 'bg-green-100 text-green-800' : 
                    course % 2 === 0 ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                  {course % 3 === 0 ? 'Published' : course % 2 === 0 ? 'Draft' : 'Active'}
                </span>
                <span className="font-bold">${course * 20}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-lg shadow">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
            <span className="font-medium">12</span> courses
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            1
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;