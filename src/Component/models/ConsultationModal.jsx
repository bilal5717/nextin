import { useState, useEffect } from 'react';
import { FaTimes, FaPhone, FaEnvelope, FaCalendarAlt, FaUser } from 'react-icons/fa';

const ConsultationModal = ({ isOpen, onClose, preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService,
    date: '',
    message: ''
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      service: preselectedService
    }));
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Consultation requested:', formData);
    alert(`Thank you for your ${formData.service ? formData.service + ' ' : ''}consultation request! We will contact you shortly.`);
    onClose();
  };

  if (!isOpen) return null;

  const serviceOptions = [
    { value: '', label: 'Select Service' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile App Development' },
    { value: 'game', label: 'Game Development' },
    { value: 'seo', label: 'SEO & Google Ads' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-bold text-blue-600">Free Consultation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div className="flex items-center border-b border-gray-200 pb-2">
              <FaUser className="text-blue-500 mr-3" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 py-2 outline-none"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="flex items-center border-b border-gray-200 pb-2">
              <FaEnvelope className="text-blue-500 mr-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 py-2 outline-none"
                placeholder="Email Address"
                required
              />
            </div>
            
            <div className="flex items-center border-b border-gray-200 pb-2">
              <FaPhone className="text-blue-500 mr-3" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 py-2 outline-none"
                placeholder="Phone Number"
                required
              />
            </div>
            
            <div className="flex items-center border-b border-gray-200 pb-2">
              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 py-2 outline-none bg-white"
                required
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center border-b border-gray-200 pb-2">
              <FaCalendarAlt className="text-blue-500 mr-3" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="flex-1 py-2 outline-none"
                required
              />
            </div>
            
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Request Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;