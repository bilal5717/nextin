import { useState, useEffect } from 'react';
import { 
  FaSearch, 
  FaFilter, 
  FaCheckCircle, 
  FaTimesCircle,
  FaTimes, 
  FaEye, 
  FaDownload, 
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMoneyBillWave
} from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const AdminEnrollments = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    course: 'all',
    paymentMethod: 'all',
    dateRange: 'all'
  });

  // Mock data - replace with API calls in a real application
  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data that matches the enrollment form structure
        const mockData = [
          {
            id: 'enr-001',
            name: 'Ali Ahmed',
            email: 'ali.ahmed@example.com',
            phone: '03001234567',
            selectedCourses: ['frontend', 'react'],
            courses: ['Frontend Web Development', 'React JS Masterclass'],
            paymentMethod: 'jazzcash',
            transactionId: 'JZ123456789',
            transactionProof: 'jazzcash-receipt.jpg',
            totalAmount: 55000,
            status: 'pending',
            createdAt: '2023-05-15T10:30:00Z',
            notes: 'Interested in morning classes'
          },
          {
            id: 'enr-002',
            name: 'Sara Khan',
            email: 'sara.khan@example.com',
            phone: '03111234567',
            selectedCourses: ['fullStack'],
            courses: ['Full Stack Development'],
            paymentMethod: 'easypaisa',
            transactionId: 'EP987654321',
            transactionProof: 'easypaisa-receipt.png',
            totalAmount: 75000,
            status: 'approved',
            createdAt: '2023-05-10T14:45:00Z',
            notes: ''
          },
          {
            id: 'enr-003',
            name: 'Usman Malik',
            email: 'usman.malik@example.com',
            phone: '03331234567',
            selectedCourses: ['backend', 'laravel'],
            courses: ['Backend Development with PHP', 'Laravel Framework Mastery'],
            paymentMethod: 'meezan',
            transactionId: 'MZ456789123',
            transactionProof: 'meezan-receipt.pdf',
            totalAmount: 70000,
            status: 'rejected',
            createdAt: '2023-05-05T09:15:00Z',
            notes: 'Payment made from different account'
          },
          {
            id: 'enr-004',
            name: 'Fatima Riaz',
            email: 'fatima.riaz@example.com',
            phone: '03211234567',
            selectedCourses: ['graphic', 'seo'],
            courses: ['Professional Graphic Design', 'SEO & Digital Marketing'],
            paymentMethod: 'jazzcash',
            transactionId: 'JZ789123456',
            transactionProof: 'jazzcash-receipt-2.jpg',
            totalAmount: 70000,
            status: 'pending',
            createdAt: '2023-05-18T16:20:00Z',
            notes: 'Requesting discount'
          }
        ];
        
        setEnrollments(mockData);
        setFilteredEnrollments(mockData);
      } catch (error) {
        console.error('Error fetching enrollments:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchEnrollments();
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...enrollments];
    
    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(enrollment => 
        enrollment.name.toLowerCase().includes(term) ||
        enrollment.email.toLowerCase().includes(term) ||
        enrollment.phone.includes(term) ||
        enrollment.transactionId.toLowerCase().includes(term)
      );
    }
    
    // Status filter
    if (filters.status !== 'all') {
      result = result.filter(enrollment => enrollment.status === filters.status);
    }
    
    // Course filter
    if (filters.course !== 'all') {
      result = result.filter(enrollment => 
        enrollment.selectedCourses.includes(filters.course)
      );
    }
    
    // Payment method filter
    if (filters.paymentMethod !== 'all') {
      result = result.filter(enrollment => 
        enrollment.paymentMethod === filters.paymentMethod
      );
    }
    
    // Date range filter (simplified for demo)
    if (filters.dateRange !== 'all') {
      const now = new Date();
      result = result.filter(enrollment => {
        const created = new Date(enrollment.createdAt);
        const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
        
        if (filters.dateRange === 'today') return diffDays === 0;
        if (filters.dateRange === 'week') return diffDays <= 7;
        if (filters.dateRange === 'month') return diffDays <= 30;
        return true;
      });
    }
    
    setFilteredEnrollments(result);
  }, [enrollments, searchTerm, filters]);

  const handleStatusChange = (id, newStatus) => {
    setEnrollments(prev => 
      prev.map(enrollment => 
        enrollment.id === id ? { ...enrollment, status: newStatus } : enrollment
      )
    );
    setSelectedEnrollment(null); // Close details after status change
  };

  const getStatusBadge = (status) => {
    const baseClass = 'px-2 py-1 rounded-full text-xs font-medium';
    switch (status) {
      case 'approved':
        return `${baseClass} bg-green-100 text-green-800`;
      case 'rejected':
        return `${baseClass} bg-red-100 text-red-800`;
      case 'pending':
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      default:
        return `${baseClass} bg-gray-100 text-gray-800`;
    }
  };

  const getPaymentMethod = (method) => {
    switch (method) {
      case 'jazzcash':
        return 'JazzCash';
      case 'easypaisa':
        return 'EasyPaisa';
      case 'meezan':
        return 'Meezan Bank';
      default:
        return 'Unknown';
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-PK', options);
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-PK') + ' PKR';
  };

  const refreshData = () => {
    setLoading(true);
    // In a real app, this would refetch from the API
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className=" bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Enrollment Management</h1>
      
      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-2 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, phone or transaction ID..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            onClick={refreshData}
            className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <FiRefreshCw className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center">
            <FaFilter className="text-gray-500 mr-2" />
            <select
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          
          <div>
            <select
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filters.course}
              onChange={(e) => setFilters({...filters, course: e.target.value})}
            >
              <option value="all">All Courses</option>
              <option value="frontend">Frontend Development</option>
              <option value="fullStack">Full Stack</option>
              <option value="react">React JS</option>
              <option value="backend">Backend</option>
              <option value="laravel">Laravel</option>
              <option value="graphic">Graphic Design</option>
              <option value="seo">SEO</option>
            </select>
          </div>
          
          <div>
            <select
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filters.paymentMethod}
              onChange={(e) => setFilters({...filters, paymentMethod: e.target.value})}
            >
              <option value="all">All Payment Methods</option>
              <option value="jazzcash">JazzCash</option>
              <option value="easypaisa">EasyPaisa</option>
              <option value="meezan">Meezan Bank</option>
            </select>
          </div>
          
          <div>
            <select
              className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={filters.dateRange}
              onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
          </div>
        </div>
      </div>
      {/* Enrollments Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="p-8 text-center">
            <div className="animate-pulse flex flex-col space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        ) : filteredEnrollments.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No enrollments found matching your criteria
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEnrollments.map((enrollment) => (
                  <tr key={enrollment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{enrollment.name}</div>
                      <div className="text-sm text-gray-500">{enrollment.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {enrollment.courses.slice(0, 2).join(', ')}
                        {enrollment.courses.length > 2 && ` +${enrollment.courses.length - 2} more`}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatCurrency(enrollment.totalAmount)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {getPaymentMethod(enrollment.paymentMethod)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusBadge(enrollment.status)}>
                        {enrollment.status.charAt(0).toUpperCase() + enrollment.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(enrollment.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => setSelectedEnrollment(enrollment)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        <FaEye className="inline mr-1" /> View
                      </button>
                      {enrollment.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusChange(enrollment.id, 'approved')}
                            className="text-green-600 hover:text-green-900 mr-3"
                          >
                            <FaCheckCircle className="inline mr-1" /> Approve
                          </button>
                          <button
                            onClick={() => handleStatusChange(enrollment.id, 'rejected')}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTimesCircle className="inline mr-1" /> Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
      {/* Enrollment Details Modal */}
      {selectedEnrollment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-blue-600">
                Enrollment Details - {selectedEnrollment.name}
              </h2>
              <button 
                onClick={() => setSelectedEnrollment(null)} 
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Student Information */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-3">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Full Name</label>
                    <p className="font-medium">{selectedEnrollment.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Email</label>
                    <p className="font-medium flex items-center">
                      <FaEnvelope className="mr-2 text-gray-500" />
                      {selectedEnrollment.email}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Phone</label>
                    <p className="font-medium flex items-center">
                      <FaPhone className="mr-2 text-gray-500" />
                      {selectedEnrollment.phone}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Enrollment Date</label>
                    <p className="font-medium flex items-center">
                      <FaCalendarAlt className="mr-2 text-gray-500" />
                      {formatDate(selectedEnrollment.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Courses Information */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-3">Selected Courses</h3>
                <div className="space-y-3">
                  {selectedEnrollment.courses.map((course, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-2">
                      <span className="font-medium">{course}</span>
                      <span className="text-sm text-gray-600">
                        {selectedEnrollment.selectedCourses[index] === 'fullStack' && '70,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'frontend' && '30,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'react' && '25,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'backend' && '35,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'laravel' && '35,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'graphic' && '40,000 PKR'}
                        {selectedEnrollment.selectedCourses[index] === 'seo' && '30,000 PKR'}
                      </span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-medium">Registration Fee</span>
                    <span className="text-sm text-gray-600">5,000 PKR</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2 font-bold">
                    <span>Total Amount</span>
                    <span>{formatCurrency(selectedEnrollment.totalAmount)}</span>
                  </div>
                </div>
              </div>
              
              {/* Payment Information */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-3">Payment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Payment Method</label>
                    <p className="font-medium flex items-center">
                      <FaMoneyBillWave className="mr-2 text-gray-500" />
                      {getPaymentMethod(selectedEnrollment.paymentMethod)}
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Transaction ID</label>
                    <p className="font-medium">{selectedEnrollment.transactionId}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Payment Proof</label>
                    <div className="flex items-center justify-between p-3 bg-white rounded border">
                      <div className="flex items-center">
                        <FaDownload className="mr-2 text-blue-500" />
                        <span className="font-medium">{selectedEnrollment.transactionProof}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Notes */}
              {selectedEnrollment.notes && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-700 mb-3">Additional Notes</h3>
                  <p className="text-gray-700">{selectedEnrollment.notes}</p>
                </div>
              )}
              
              {/* Status Actions */}
              <div className="flex justify-end space-x-3 pt-4 border-t">
                {selectedEnrollment.status === 'pending' && (
                  <>
                    <button
                      onClick={() => {
                        handleStatusChange(selectedEnrollment.id, 'approved');
                        setSelectedEnrollment(null);
                      }}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Approve Enrollment
                    </button>
                    <button
                      onClick={() => {
                        handleStatusChange(selectedEnrollment.id, 'rejected');
                        setSelectedEnrollment(null);
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Reject Enrollment
                    </button>
                  </>
                )}
                <button
                  onClick={() => setSelectedEnrollment(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEnrollments;