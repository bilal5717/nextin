import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  FaSave, 
  FaTimes,
  FaGlobe,
  FaMobileAlt,
  FaGamepad,
  FaChartLine
} from 'react-icons/fa';

const ServiceForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the ID if we're editing
  const isEditing = !!id;
  
  const [service, setService] = useState({
    title: '',
    icon: 'web',
    status: 'active',
    order: '',
    description: '',
    detailedDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const iconOptions = [
    { value: 'web', label: 'Web Development', icon: <FaGlobe className="text-blue-500" /> },
    { value: 'mobile', label: 'Mobile App', icon: <FaMobileAlt className="text-green-500" /> },
    { value: 'game', label: 'Game Development', icon: <FaGamepad className="text-purple-500" /> },
    { value: 'seo', label: 'SEO & Marketing', icon: <FaChartLine className="text-orange-500" /> }
  ];

  // Fetch service data if editing
  useEffect(() => {
    if (isEditing) {
      const fetchService = async () => {
        setIsLoading(true);
        try {
          // Replace with your actual API call
          // const response = await api.getService(id);
          // setService(response.data);
          
          // Mock data for demonstration
          const mockService = {
            title: 'Web Development',
            icon: 'web',
            status: 'active',
            order: '1',
            description: 'Professional web development services',
            detailedDescription: 'We build modern, responsive websites using the latest technologies.'
          };
          setService(mockService);
        } catch (error) {
          console.error('Error fetching service:', error);
          navigate('/admin/services', { replace: true });
        } finally {
          setIsLoading(false);
        }
      };
      
      fetchService();
    }
  }, [id, isEditing, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!service.title.trim()) newErrors.title = 'Title is required';
    if (!service.description.trim()) newErrors.description = 'Description is required';
    if (!service.order || isNaN(service.order)) newErrors.order = 'Valid order number is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      if (isEditing) {
        // Update existing service
        // await api.updateService(id, service);
        console.log('Updating service:', id, service);
      } else {
        // Add new service
        // await api.addService(service);
        console.log('Adding service:', service);
      }
      navigate('/admin/services');
    } catch (error) {
      console.error('Error saving service:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 text-center">
          <p>Loading service data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800">
          {isEditing ? 'Edit Service' : 'Add New Service'}
        </h2>
        <button
          onClick={() => navigate('/admin/services')}
          className="text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Service Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={service.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter service title"
          />
          {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
        </div>

        {/* Icon Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Icon *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {iconOptions.map((option) => (
              <div
                key={option.value}
                onClick={() => setService(prev => ({ ...prev, icon: option.value }))}
                className={`p-3 border rounded-lg cursor-pointer flex flex-col items-center transition-colors ${
                  service.icon === option.value 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="text-2xl mb-2">
                  {option.icon}
                </div>
                <span className="text-sm text-center">{option.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status *
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="active"
                checked={service.status === 'active'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">Active</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={service.status === 'inactive'}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-gray-700">Inactive</span>
            </label>
          </div>
        </div>

        {/* Display Order */}
        <div>
          <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-1">
            Display Order *
          </label>
          <input
            type="number"
            id="order"
            name="order"
            value={service.order}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md ${errors.order ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter display order (1-100)"
            min="1"
            max="100"
          />
          {errors.order && <p className="mt-1 text-sm text-red-600">{errors.order}</p>}
        </div>

        {/* Short Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Short Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={service.description}
            onChange={handleChange}
            rows={3}
            className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Brief description that appears in listings"
          />
          {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>

        {/* Detailed Description */}
        <div>
          <label htmlFor="detailedDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Detailed Description
          </label>
          <textarea
            id="detailedDescription"
            name="detailedDescription"
            value={service.detailedDescription}
            onChange={handleChange}
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Full description for service details page"
          />
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={() => navigate('/admin/services')}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center disabled:opacity-50"
          >
            <FaSave className="mr-2" />
            {isSubmitting ? 'Saving...' : isEditing ? 'Update Service' : 'Save Service'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;