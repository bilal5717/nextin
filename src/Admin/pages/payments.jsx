import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaSearch, FaEye } from 'react-icons/fa';

const AdminPayments = () => {
  const [payments, setPayments] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data with paid and remaining amounts
  const mockPayments = [
    {
      id: 'PAY001',
      studentName: 'John Doe',
      email: 'john@example.com',
      phone: '03001234567',
      courses: ['Frontend Web Development', 'React JS Masterclass'],
      totalAmount: 55000,
      paidAmount: 55000, // Full amount paid
      remainingAmount: 0,
      paymentMethod: 'JazzCash',
      transactionId: 'TRX123456',
      status: 'pending',
      proofUrl: '#',
      submissionDate: '2025-07-20',
    },
    {
      id: 'PAY002',
      studentName: 'Jane Smith',
      email: 'jane@example.com',
      phone: '03009876543',
      courses: ['Full Stack Development'],
      totalAmount: 75000,
      paidAmount: 75000, 
      remainingAmount: 0,
      paymentMethod: 'Meezan Bank',
      transactionId: 'TRX789012',
      status: 'verified',
      proofUrl: '#',
      submissionDate: '2025-07-19',
    },
  ];

  useEffect(() => {
    // In a real application, fetch payments from API
    setPayments(mockPayments);
  }, []);

  const handleVerify = (paymentId) => {
    setPayments(payments.map(payment => 
      payment.id === paymentId ? { ...payment, status: 'verified' } : payment
    ));
    // In a real app, make API call to update status
    alert(`Payment ${paymentId} verified successfully!`);
  };

  const handleReject = (paymentId) => {
    setPayments(payments.map(payment => 
      payment.id === paymentId ? { ...payment, status: 'rejected' } : payment
    ));
    // In a real app, make API call to update status
    alert(`Payment ${paymentId} rejected.`);
  };

  const filteredPayments = payments.filter(payment => {
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    const matchesSearch = 
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Payment Management</h1>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-gray-700 mb-2 text-sm">Search Payments</label>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, or transaction ID"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-2 text-sm">Filter by Status</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Courses</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paid</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPayments.map(payment => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{payment.studentName}</div>
                  <div className="text-sm text-gray-500">{payment.email}</div>
                  <div className="text-sm text-gray-500">{payment.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{payment.courses.join(', ')}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.totalAmount.toLocaleString('en-PK')} PKR
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.paidAmount.toLocaleString('en-PK')} PKR
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.remainingAmount.toLocaleString('en-PK')} PKR
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.paymentMethod}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {payment.transactionId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    payment.status === 'verified' ? 'bg-green-100 text-green-800' :
                    payment.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    ' Dai-100 text-yellow-800'
                  }`}>
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <a
                      href={payment.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEye />
                    </a>
                    {payment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleVerify(payment.id)}
                          className="text-green-600 hover:text-green-800"
                        >
                          <FaCheckCircle />
                        </button>
                        <button
                          onClick={() => handleReject(payment.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <FaTimesCircle />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredPayments.length === 0 && (
        <div className="text-center py-6 text-gray-500">
          No payments found matching the criteria
        </div>
      )}
    </div>
  );
};

export default AdminPayments;