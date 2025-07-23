import { FaUsers, FaBook, FaChartLine, FaDollarSign } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <FaUsers size={24} />
            </div>
            <div>
              <p className="text-gray-500">Total Students</p>
              <p className="text-2xl font-bold">1,245</p>
              <p className="text-green-500 text-sm">↑ 12% from last month</p>
            </div>
          </div>
        </div>

        {/* Active Courses */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <FaBook size={24} />
            </div>
            <div>
              <p className="text-gray-500">Active Courses</p>
              <p className="text-2xl font-bold">24</p>
              <p className="text-green-500 text-sm">↑ 3 new courses</p>
            </div>
          </div>
        </div>

        {/* Enrollment Rate */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <FaChartLine size={24} />
            </div>
            <div>
              <p className="text-gray-500">Enrollment Rate</p>
              <p className="text-2xl font-bold">78%</p>
              <p className="text-green-500 text-sm">↑ 5% from last month</p>
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <FaDollarSign size={24} />
            </div>
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$24,567</p>
              <p className="text-green-500 text-sm">↑ 8.2% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Enrollments */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Enrollments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Student {item}</div>
                        <div className="text-sm text-gray-500">student{item}@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Course {item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May {15 + item}, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;