import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSave, 
  FaTimes,
  FaImage,
  FaLink,
  FaListOl,
  FaEye,
  FaEyeSlash,
  FaUpload
} from 'react-icons/fa';

const AddBanner = () => {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState({
    title: '',
    position: 'home_hero',
    status: 'active',
    link: '',
    order: 1,
    image: null,
    previewImage: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerData(prev => ({
        ...prev,
        image: file,
        previewImage: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Banner data:', bannerData);
    // Here you would typically send the data to your API
    navigate('/admin/banners');
  };

  const toggleStatus = () => {
    setBannerData(prev => ({
      ...prev,
      status: prev.status === 'active' ? 'inactive' : 'active'
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Add New Banner</h1>
        <button 
          onClick={() => navigate('/admin/banners')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaTimes className="mr-1" /> Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaImage className="mr-2 text-blue-500" />
              Banner Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={bannerData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <select
                  name="position"
                  value={bannerData.position}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="home_hero">Homepage Hero</option>
                  <option value="home_top">Homepage Top</option>
                  <option value="home_bottom">Homepage Bottom</option>
                  <option value="course_promo">Course Promo</option>
                  <option value="sidebar">Sidebar</option>
                  <option value="popup">Popup</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link URL</label>
                <div className="flex items-center">
                  <FaLink className="text-gray-400 mr-2" />
                  <input
                    type="url"
                    name="link"
                    value={bannerData.link}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/path"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                <div className="flex items-center">
                  <FaListOl className="text-gray-400 mr-2" />
                  <input
                    type="number"
                    name="order"
                    min="1"
                    value={bannerData.order}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <button
                  type="button"
                  onClick={toggleStatus}
                  className={`flex items-center px-4 py-2 rounded-md ${bannerData.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                >
                  {bannerData.status === 'active' ? (
                    <>
                      <FaEye className="mr-2" />
                      Active
                    </>
                  ) : (
                    <>
                      <FaEyeSlash className="mr-2" />
                      Inactive
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaImage className="mr-2 text-blue-500" />
              Banner Image
            </h2>
            
            <div className="flex flex-col items-center">
              {bannerData.previewImage ? (
                <div className="mb-4">
                  <img 
                    src={bannerData.previewImage} 
                    alt="Banner preview" 
                    className="max-w-full h-64 object-contain rounded border border-gray-200"
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                  <span className="text-gray-500">Banner preview will appear here</span>
                </div>
              )}
              
              <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow tracking-wide border border-blue cursor-pointer hover:bg-blue-100">
                <FaUpload className="text-blue-500 text-2xl mb-2" />
                <span className="text-base leading-normal">Select an image</span>
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </label>
              
              <p className="mt-2 text-sm text-gray-500">
                Recommended size: 1920x1080px (for hero banners) or 800x400px (for other banners)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center"
          >
            <FaSave className="mr-2" />
            Save Banner
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBanner;