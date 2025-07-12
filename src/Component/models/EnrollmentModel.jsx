import { useState, useRef } from 'react';
import { FaTimes, FaUser, FaBook, FaMoneyBillWave, FaCheck, FaUpload, FaTrash, FaReceipt } from 'react-icons/fa';

// Import all course images
import Frontend from '../../images/Frontend.png';
import ReactImg from '../../images/ReactImg.jpg';
import nextjs from '../../images/nextjs.png';
import Angular from '../../images/Angular.jpg';
import Backend from '../../images/Backend.jpg';
import php2 from '../../images/php2.jpg';
import DB1 from '../../images/DB1.jpg';
import laravel from '../../images/laravel.jpg';
import Symfony from '../../images/Symfony.jpg';
import wordpress from '../../images/wordpress.png';
import GraphicDesign from '../../images/graphic.jpg';
import SEO from '../../images/seo1.jpeg';
import WebHosting from '../../images/WebHosting.jpg';
import DigitalMarketing from '../../images/digitalMarketing.webp';
import MobileApp from '../../images/mobileApp.jpg';
import FullStackImg from '../../images/courseimg3new.jpeg';
// Courses data with all images properly assigned
const coursesData = {
  frontend: {
    title: 'Frontend Web Development',
    desc: 'Learn HTML, CSS, JavaScript, and popular UI libraries.',
    fee: '30,000 PKR',
    duration: '3 Months',
    img: Frontend
  },
  fullStack: {
    title: 'Full Stack Development',
    desc: 'Combine frontend and backend skills to become a complete web developer.',
    fee: '70,000 PKR',
    duration: '6 Months',
    img: FullStackImg
  },
  react: {
    title: 'React JS Masterclass',
    desc: 'Understand React core concepts like hooks and components.',
    fee: '25,000 PKR',
    duration: '3 Months',
    img: ReactImg
  },
  nextjs: {
    title: 'Next JS Bootcamp',
    desc: 'Master server-side rendering with Next.js.',
    fee: '30,000 PKR',
    duration: '3 Months',
    img: nextjs
  },
  angular: {
    title: 'Angular Framework Essentials',
    desc: 'Learn Angular structure, components, and services.',
    fee: '30,000 PKR',
    duration: '3 Months',
    img: Angular
  },
  backend: {
    title: 'Backend Development with PHP',
    desc: 'Master server-side programming with PHP and frameworks.',
    fee: '35,000 PKR',
    duration: '4 Months',
    img: Backend
  },
  php: {
    title: 'Professional PHP Development',
    desc: 'Master PHP from fundamentals to advanced concepts.',
    fee: '25,000 PKR',
    duration: '3 Months',
    img: php2
  },
  database: {
    title: 'Professional Database Management',
    desc: 'Master SQL for relational databases and NoSQL fundamentals.',
    fee: '25,000 PKR',
    duration: '3 Months',
    img: DB1
  },
  laravel: {
    title: 'Laravel Framework Mastery',
    desc: 'Build modern web applications with Laravel.',
    fee: '35,000 PKR',
    duration: '4 Months',
    img: laravel
  },
  symfony: {
    title: 'Enterprise Symfony Development',
    desc: 'Master Symfony framework for building scalable applications.',
    fee: '35,000 PKR',
    duration: '4 Months',
    img: Symfony
  },
  wordpress: {
    title: 'WordPress Development Mastery',
    desc: 'Learn to build professional WordPress websites.',
    fee: '20,000 PKR',
    duration: '3 Months',
    img: wordpress
  },
  graphic: {
    title: 'Professional Graphic Design',
    desc: 'Master Adobe Photoshop, Illustrator and design principles.',
    fee: '40,000 PKR',
    duration: '3 Months',
    img: GraphicDesign
  },
  seo: {
    title: 'SEO & Digital Marketing',
    desc: 'Master search engine optimization techniques.',
    fee: '30,000 PKR',
    duration: '2 Months',
    img: SEO
  },
  hosting: {
    title: 'Web Hosting & Server Management',
    desc: 'Learn to deploy, manage and optimize web servers.',
    fee: '10,000 PKR',
    duration: '6 Weeks',
    img: WebHosting
  },
  marketing: {
    title: 'Digital Marketing Professional',
    desc: 'Master social media marketing, Google Ads, and analytics.',
    fee: '30,000 PKR',
    duration: '3 Months',
    img: DigitalMarketing
  },
  mobileApp: {
    title: 'Mobile App Development',
    desc: 'Learn to build native and cross-platform mobile applications.',
    fee: '70,000 PKR',
    duration: '4 Months',
    img: MobileApp
  }
};

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedCourses: [],
    message: '',
    paymentMethod: '',
    transactionId: '',
    transactionProof: null
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);
  const REGISTRATION_FEE = 5000;
  
  const paymentOptions = [
    {
      id: 'jazzcash',
      name: 'JazzCash',
      number: '03077875533',
      accountName: 'Muhammad Bilal',
      icon: <FaMoneyBillWave className="text-green-600" />
    },
    {
      id: 'meezan',
      name: 'Meezan Bank',
      number: '02170110289915',
      accountName: 'Mudassar Amin',
      icon: <FaMoneyBillWave className="text-blue-600" />
    },
    {
      id: 'easypaisa',
      name: 'EasyPaisa',
      number: '03077875533',
      accountName: 'Muhammad Bilal',
      icon: <FaMoneyBillWave className="text-orange-600" />
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCourseSelect = (courseKey, isChecked) => {
    setFormData(prev => {
      if (isChecked) {
        return {
          ...prev,
          selectedCourses: [...prev.selectedCourses, courseKey]
        };
      } else {
        return {
          ...prev,
          selectedCourses: prev.selectedCourses.filter(key => key !== courseKey)
        };
      }
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUploadError('');
    
    if (!file) return;

    // Validate file type and size
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      setUploadError('Please upload JPG, PNG, or PDF files only');
      return;
    }

    if (file.size > maxSize) {
      setUploadError('File size must be less than 5MB');
      return;
    }

    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // After "upload" completes
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        transactionProof: file
      }));
    }, 1200);
  };

  const removeProof = () => {
    setFormData(prev => ({
      ...prev,
      transactionProof: null
    }));
    setUploadProgress(0);
    setUploadError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const calculateCourseTotal = () => {
    return formData.selectedCourses.reduce((total, courseKey) => {
      const course = coursesData[courseKey];
      if (!course || !course.fee) return total;
      
      const feeValue = parseInt(course.fee.replace(/[^0-9]/g, '')) || 0;
      return total + feeValue;
    }, 0);
  };

  const calculateTotal = () => {
    const courseTotal = calculateCourseTotal();
    return courseTotal + REGISTRATION_FEE;
  };

  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-PK') + ' PKR';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.transactionProof) {
      setUploadError('Please upload transaction proof');
      return;
    }
    
    // Here you would typically send the form data to your backend
    console.log('Enrollment submitted:', {
      ...formData,
      totalAmount: calculateTotal(),
      courses: formData.selectedCourses.map(key => coursesData[key].title)
    });
    
    alert('Enrollment submitted successfully! We will verify your payment and contact you shortly.');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white">
          <h2 className="text-xl font-bold text-blue-600">Course Enrollment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes size={20} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          {/* Personal Information */}
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-700 flex items-center">
              <FaUser className="mr-2" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-1 text-sm">Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-sm">Email Address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 text-sm">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                  placeholder="03001234567"
                />
              </div>
            </div>
          </div>

          {/* Course Selection */}
          <div className="p-4 bg-blue-50 rounded-lg mt-4">
            <h3 className="font-semibold text-blue-700 flex items-center mb-3">
              <FaBook className="mr-2" />
              Select Courses*
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(coursesData).map(([key, course]) => (
                <label key={key} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-blue-100 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.selectedCourses.includes(key)}
                    onChange={(e) => handleCourseSelect(key, e.target.checked)}
                    className="mt-1 text-blue-600"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{course.title}</div>
                    <div className="text-sm text-gray-600">{course.duration}</div>
                    <div className="font-semibold text-blue-700 mt-1">
                      {course.fee}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          {formData.selectedCourses.length > 0 && (
            <div className="p-4 bg-gray-50 rounded-lg border mt-4">
              <h3 className="font-semibold text-gray-700 mb-3">Payment Summary</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                      <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {formData.selectedCourses.map(courseKey => {
                      const course = coursesData[courseKey];
                      return (
                        <tr key={courseKey}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                            {course.title}
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                            {course.fee}
                          </td>
                        </tr>
                      );
                    })}
                    
                    <tr>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        Registration Fee
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                        {formatCurrency(REGISTRATION_FEE)}
                      </td>
                    </tr>
                    
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        Subtotal
                      </td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 text-right">
                        {formatCurrency(calculateCourseTotal())}
                      </td>
                    </tr>
                    
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-gray-900">Total Amount</td>
                      <td className="px-4 py-2 whitespace-nowrap text-sm font-bold text-gray-900 text-right">
                        {formatCurrency(calculateTotal())}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Payment Options */}
          {formData.selectedCourses.length > 0 && (
            <div className="p-4 bg-gray-50 rounded-lg border mt-4">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <FaMoneyBillWave className="mr-2" />
                Payment Options*
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {paymentOptions.map((option) => (
                  <div 
                    key={option.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                      formData.paymentMethod === option.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      paymentMethod: option.id
                    }))}
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-3">
                        {option.icon}
                      </div>
                      <h4 className="font-medium text-gray-800">{option.name}</h4>
                      {formData.paymentMethod === option.id && (
                        <FaCheck className="ml-auto text-green-500" />
                      )}
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number:</span>
                        <span className="font-mono font-bold">{option.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-medium">{option.accountName}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {formData.paymentMethod && (
                <div className="mt-4">
                  <label className="block text-gray-700 mb-2 text-sm">
                    Transaction/Reference Number*
                    <span className="text-xs text-gray-500 ml-1">(After making payment)</span>
                  </label>
                  <input
                    type="text"
                    name="transactionId"
                    value={formData.transactionId}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                    placeholder="Enter transaction ID from payment"
                  />
                </div>
              )}

              {formData.paymentMethod && (
                <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-100">
                  <h4 className="font-medium text-blue-800 mb-2">Payment Instructions</h4>
                  <ol className="list-decimal list-inside text-sm space-y-1 text-gray-700">
                    <li>Send <strong>{formatCurrency(calculateTotal())}</strong> to the selected account</li>
                    <li>Include your name in the payment details if possible</li>
                    <li>Save the transaction receipt/reference number</li>
                    <li>Enter the transaction ID above and submit the form</li>
                    <li>We'll verify your payment and confirm enrollment within 24 hours</li>
                  </ol>
                </div>
              )}
            </div>
          )}

          {/* Transaction Proof Upload */}
          {formData.paymentMethod && formData.transactionId && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
                <FaReceipt className="mr-2" />
                Transaction Proof*
              </h3>
              
              {!formData.transactionProof ? (
                <>
                  <div 
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-colors"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <FaUpload className="mx-auto text-gray-400 text-2xl mb-2" />
                    <p className="text-gray-600 mb-1">Upload screenshot of payment confirmation</p>
                    <p className="text-xs text-gray-500">(JPG, PNG, or PDF under 5MB)</p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="hidden"
                    />
                  </div>
                  {uploadError && (
                    <p className="text-red-500 text-sm mt-2">{uploadError}</p>
                  )}
                </>
              ) : (
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaUpload className="text-blue-500 mr-2" />
                      <span className="font-medium text-gray-800 truncate max-w-xs">
                        {formData.transactionProof.name}
                      </span>
                    </div>
                    <button 
                      onClick={removeProof}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  )}
                  
                  {uploadProgress === 100 && (
                    <div className="mt-2 text-green-600 text-sm flex items-center">
                      <FaCheck className="mr-1" /> Upload complete
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Additional Information */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-1 text-sm">Additional Notes (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="2"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Any special requests or questions..."
            ></textarea>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                formData.selectedCourses.length === 0 || 
                !formData.paymentMethod ||
                !formData.transactionId ||
                !formData.transactionProof
              }
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentModal;