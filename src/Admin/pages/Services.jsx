import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaSearch,
  FaFilter,
  FaSort,
  FaEye,
  FaEyeSlash,
  FaServer,
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaChartLine
} from 'react-icons/fa';

const ServicesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Sample services data - replace with your actual data fetching logic
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: <FaGlobe className="text-blue-500" />,
      status: 'active',
      createdAt: '2023-05-15',
      order: 1,
      description: 'Create scalable, custom web platforms using modern frameworks with secure backend integration and responsive design for all devices.'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: <FaMobileAlt className="text-green-500" />,
      status: 'active',
      createdAt: '2023-06-20',
      order: 2,
      description: 'Build cross-platform or native mobile apps with powerful features, sleek UI, and smooth performance.'
    },
    {
      id: 3,
      title: 'Game Development',
      icon: <FaGamepad className="text-purple-500" />,
      status: 'inactive',
      createdAt: '2023-07-10',
      order: 3,
      description: 'Design immersive and engaging 2D/3D games using Unity and advanced development engines.'
    },
    {
      id: 4,
      title: 'SEO & Google Ads',
      icon: <FaChartLine className="text-orange-500" />,
      status: 'active',
      createdAt: '2023-04-05',
      order: 4,
      description: 'Boost your online presence with targeted Google Ads, keyword optimization, and analytics-driven SEO strategies.'
    }
  ];

  // Filter and sort services
  const filteredServices = services
    .filter(service => 
      service.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(service => 
      statusFilter === 'all' || service.status === statusFilter
    )
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
      if (sortBy === 'order') return a.order - b.order;
      return 0;
    });

  const toggleStatus = (serviceId) => {
    console.log('Toggling status for service:', serviceId);
  };

  const handleDelete = (serviceId) => {
    console.log('Deleting service:', serviceId);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Services Management</h1>
        <Link 
          to="/admin/services/add" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center w-full md:w-auto"
        >
          <FaPlus className="mr-2" />
          Add New Service
        </Link>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Status Filter */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaFilter className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          
          {/* Sort By */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSort className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="order">Display Order</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredServices.map((service) => (
              <tr key={service.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-gray-100">
                      {service.icon}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{service.title}</div>
                      <div className="text-sm text-gray-500">{new Date(service.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 line-clamp-2">{service.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {service.order}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleStatus(service.id)}
                      className={`${service.status === 'active' ? 'text-yellow-600 hover:text-yellow-900' : 'text-green-600 hover:text-green-900'}`}
                      title={service.status === 'active' ? 'Deactivate' : 'Activate'}
                    >
                      {service.status === 'active' ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <Link
                      to={`/admin/services/edit/${service.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between bg-white px-4 py-3 rounded-b-lg shadow">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredServices.length}</span> of{' '}
            <span className="font-medium">{services.length}</span> services
          </p>
        </div>
        <div className="flex space-x-2">
          <button 
            className="px-3 py-1 border border-gray-300 rounded text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
            disabled
          >
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

export default ServicesManagement;