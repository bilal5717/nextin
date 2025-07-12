import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';

const initialStudents = [
  {
    name: 'John Doe',
    phoneNo: '+92 300 1234567',
    email: 'john.doe@example.com',
    courseName: 'Frontend Development',
    courseType: 'Physical',
    description: '<p>Enrolled on July 01, 2025. Actively participating in live sessions.</p>',
    image: null,
  },
  {
    name: 'Jane Smith',
    phoneNo: '+92 310 9876543',
    email: 'jane.smith@example.com',
    courseName: 'Backend Development',
    courseType: 'Online',
    description: '<p>Joined on June 15, 2025. Working on Node.js projects.</p>',
    image: null,
  },
  {
    name: 'Alice Johnson',
    phoneNo: '+92 320 4567890',
    email: 'alice.johnson@example.com',
    courseName: 'Full Stack Development',
    courseType: 'Physical',
    description: '<p>Enrolled on July 03, 2025. Excelling in both frontend and backend.</p>',
    image: null,
  },
];

const EnrolledStudents = () => {
  const [students, setStudents] = useState(initialStudents);
  const [editingIndex, setEditingIndex] = useState(null);
  const [viewingIndex, setViewingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', phoneNo: '', email: '', courseName: '', courseType: '', description: '', image: null });
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(students[index]);
    setPreviewImage(students[index].image || null);
  };

  const handleView = (index) => {
    setViewingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  const handleFormChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setEditForm({ ...editForm, image: imageUrl });
    }
  };

  const handleFormSubmit = () => {
    const updated = [...students];
    updated[editingIndex] = editForm;
    setStudents(updated);
    setEditingIndex(null);
    setPreviewImage(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setPreviewImage(null);
  };

  const handleBack = () => {
    setViewingIndex(null);
  };

  if (viewingIndex !== null) {
    const student = students[viewingIndex];
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <Title order={2} className="text-[#016fbe] mb-6">Student Details</Title>
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <div className="space-y-4">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Phone No:</strong> {student.phoneNo}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course Name:</strong> {student.courseName}</p>
            <p><strong>Course Type:</strong> {student.courseType}</p>
            <div className="mb-4">
              <strong>Description:</strong>
              <div dangerouslySetInnerHTML={{ __html: student.description }} className="mt-2" />
            </div>
            {student.image && (
              <img
                src={student.image}
                alt="Student"
                className="mt-3 rounded-md shadow-md border border-gray-300 w-64 h-40 object-cover"
              />
            )}
            <Button color="blue" onClick={handleBack} className="mt-4">
              Back
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} className="text-[#016fbe] mb-6">Enrolled Students</Title>

      {editingIndex !== null ? (
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <TextInput
            label="Name"
            value={editForm.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Phone No"
            value={editForm.phoneNo}
            onChange={(e) => handleFormChange('phoneNo', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Email"
            value={editForm.email}
            onChange={(e) => handleFormChange('email', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Course Name"
            value={editForm.courseName}
            onChange={(e) => handleFormChange('courseName', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Course Type"
            value={editForm.courseType}
            onChange={(e) => handleFormChange('courseType', e.target.value)}
            required
            className="mb-4"
          />
          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <RichTextEditor
              value={editForm.description}
              onChange={(value) => handleFormChange('description', value)}
              styles={{ content: { minHeight: 300 } }}
              className="h-[400px]"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Student Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
                className="mt-3 rounded-md shadow-md border border-gray-300 w-64 h-40 object-cover"
              />
            )}
          </div>
          <Group position="right" className="mt-4 space-x-2">
            <Button variant="outline" color="gray" onClick={handleCancel}>
              Cancel
            </Button>
            <Button color="blue" onClick={handleFormSubmit}>
              Save Changes
            </Button>
          </Group>
        </Card>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
            <thead className="bg-[#016fbe] text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone No</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Course Name</th>
                <th className="px-4 py-3 text-left">Course Type</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{student.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{student.phoneNo}</td>
                  <td className="px-4 py-3">{student.email}</td>
                  <td className="px-4 py-3">{student.courseName}</td>
                  <td className="px-4 py-3">{student.courseType}</td>
                  <td className="px-4 py-3 flex space-x-3">
                    <button onClick={() => handleView(index)} className="text-blue-600 hover:text-blue-800">
                      <FaEye />
                    </button>
                    <button onClick={() => handleEdit(index)} className="text-blue-600 hover:text-blue-800">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(index)} className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EnrolledStudents;