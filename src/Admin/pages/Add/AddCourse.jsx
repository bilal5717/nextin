import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaSave, 
  FaTimes,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBook,
  FaFileAlt,
  FaCheckCircle
} from 'react-icons/fa';

const AddCourse = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    longDescription: '',
    instructor: 'Muhammad Bilal',
    duration: '3 Months',
    schedule: [{ day: '', time: '' }],
    price: '',
    status: 'draft',
    prerequisites: '',
    outcomes: [''],
    syllabus: [{
      week: '',
      title: '',
      topics: ['']
    }],
    paymentOptions: [''],
    certification: {
      description: '',
      benefits: ['']
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setCourseData(prev => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const handleAddItem = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], field === 'syllabus' ? { week: '', title: '', topics: [''] } : '']
    }));
  };

  const handleRemoveItem = (field, index) => {
    setCourseData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course data:', courseData);
    // Here you would typically send the data to your API
    navigate('/admin/courses');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Add New Course</h1>
        <button 
          onClick={() => navigate('/admin/courses')}
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
              <FaBook className="mr-2 text-blue-500" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                <input
                  type="text"
                  name="title"
                  value={courseData.title}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instructor</label>
                <input
                  type="text"
                  name="instructor"
                  value={courseData.instructor}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select
                  name="duration"
                  value={courseData.duration}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                  <option>4 Months</option>
                  <option>6 Months</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  name="status"
                  value={courseData.status}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price (PKR)</label>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
              <textarea
                name="longDescription"
                value={courseData.longDescription}
                onChange={handleInputChange}
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Schedule */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaCalendarAlt className="mr-2 text-blue-500" />
              Schedule
            </h2>
            
            {courseData.schedule.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
                  <select
                    value={item.day}
                    onChange={(e) => {
                      const newSchedule = [...courseData.schedule];
                      newSchedule[index].day = e.target.value;
                      setCourseData({ ...courseData, schedule: newSchedule });
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select day</option>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="text"
                    placeholder="e.g. 6:00 PM - 8:00 PM"
                    value={item.time}
                    onChange={(e) => {
                      const newSchedule = [...courseData.schedule];
                      newSchedule[index].time = e.target.value;
                      setCourseData({ ...courseData, schedule: newSchedule });
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-end">
                  {index === 0 ? (
                    <button
                      type="button"
                      onClick={() => setCourseData({ 
                        ...courseData, 
                        schedule: [...courseData.schedule, { day: '', time: '' }] 
                      })}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                    >
                      Add Another
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('schedule', index)}
                      className="bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Outcomes */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-blue-500" />
              Learning Outcomes
            </h2>
            
            {courseData.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={outcome}
                  onChange={(e) => handleArrayChange('outcomes', index, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What will students learn?"
                />
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => handleAddItem('outcomes')}
                    className="ml-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('outcomes', index)}
                    className="ml-2 bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Syllabus */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaFileAlt className="mr-2 text-blue-500" />
              Syllabus
            </h2>
            
            {courseData.syllabus.map((item, syllabusIndex) => (
              <div key={syllabusIndex} className="mb-6 p-4 border border-gray-200 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Week/Module</label>
                    <input
                      type="text"
                      value={item.week}
                      onChange={(e) => {
                        const newSyllabus = [...courseData.syllabus];
                        newSyllabus[syllabusIndex].week = e.target.value;
                        setCourseData({ ...courseData, syllabus: newSyllabus });
                      }}
                      placeholder="e.g. Week 1-4 or Module 1"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const newSyllabus = [...courseData.syllabus];
                        newSyllabus[syllabusIndex].title = e.target.value;
                        setCourseData({ ...courseData, syllabus: newSyllabus });
                      }}
                      placeholder="e.g. HTML & CSS Fundamentals"
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Topics</label>
                  {item.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={topic}
                        onChange={(e) => {
                          const newSyllabus = [...courseData.syllabus];
                          newSyllabus[syllabusIndex].topics[topicIndex] = e.target.value;
                          setCourseData({ ...courseData, syllabus: newSyllabus });
                        }}
                        placeholder="e.g. HTML5 semantic elements"
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {topicIndex === 0 ? (
                        <button
                          type="button"
                          onClick={() => {
                            const newSyllabus = [...courseData.syllabus];
                            newSyllabus[syllabusIndex].topics.push('');
                            setCourseData({ ...courseData, syllabus: newSyllabus });
                          }}
                          className="ml-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                        >
                          Add
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            const newSyllabus = [...courseData.syllabus];
                            newSyllabus[syllabusIndex].topics = newSyllabus[syllabusIndex].topics.filter((_, i) => i !== topicIndex);
                            setCourseData({ ...courseData, syllabus: newSyllabus });
                          }}
                          className="ml-2 bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end mt-2">
                  {syllabusIndex === 0 ? (
                    <button
                      type="button"
                      onClick={() => handleAddItem('syllabus')}
                      className="bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                    >
                      Add Module
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleRemoveItem('syllabus', syllabusIndex)}
                      className="bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                    >
                      Remove Module
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Payment Options */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaMoneyBillWave className="mr-2 text-blue-500" />
              Payment Options
            </h2>
            
            {courseData.paymentOptions.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleArrayChange('paymentOptions', index, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Full payment (5% discount)"
                />
                {index === 0 ? (
                  <button
                    type="button"
                    onClick={() => handleAddItem('paymentOptions')}
                    className="ml-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                  >
                    Add
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('paymentOptions', index)}
                    className="ml-2 bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Certification */}
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
              <FaChalkboardTeacher className="mr-2 text-blue-500" />
              Certification
            </h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="certification.description"
                value={courseData.certification.description}
                onChange={(e) => {
                  setCourseData({
                    ...courseData,
                    certification: {
                      ...courseData.certification,
                      description: e.target.value
                    }
                  });
                }}
                rows={3}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe the certification students will receive"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Benefits</label>
              {courseData.certification.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => {
                      const newBenefits = [...courseData.certification.benefits];
                      newBenefits[index] = e.target.value;
                      setCourseData({
                        ...courseData,
                        certification: {
                          ...courseData.certification,
                          benefits: newBenefits
                        }
                      });
                    }}
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. Validates Angular proficiency"
                  />
                  {index === 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setCourseData({
                          ...courseData,
                          certification: {
                            ...courseData.certification,
                            benefits: [...courseData.certification.benefits, '']
                          }
                        });
                      }}
                      className="ml-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-md text-sm hover:bg-blue-200"
                    >
                      Add
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const newBenefits = courseData.certification.benefits.filter((_, i) => i !== index);
                        setCourseData({
                          ...courseData,
                          certification: {
                            ...courseData.certification,
                            benefits: newBenefits
                          }
                        });
                      }}
                      className="ml-2 bg-red-100 text-red-700 px-3 py-2 rounded-md text-sm hover:bg-red-200"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center"
          >
            <FaSave className="mr-2" />
            Save Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;