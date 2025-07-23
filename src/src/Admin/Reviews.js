import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group, Select } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';

const initialReviews = {
  student: [
    {
      name: 'John Doe',
      reviews: 'Great course! Learned a lot about React.',
    },
    {
      name: 'Jane Smith',
      reviews: 'Excellent support from instructors.',
    },
  ],
  client: [
    {
      name: 'Alice Johnson',
      reviews: 'Impressed with the project delivery.',
    },
    {
      name: 'Bob Wilson',
      reviews: 'Highly professional team.',
    },
  ],
};

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', reviews: '' });
  const [reviewType, setReviewType] = useState('student');

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(reviews[reviewType][index]);
  };

  const handleDelete = (index) => {
    const updated = [...reviews[reviewType]];
    updated.splice(index, 1);
    setReviews({ ...reviews, [reviewType]: updated });
  };

  const handleFormChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  const handleFormSubmit = () => {
    const updated = [...reviews[reviewType]];
    updated[editingIndex] = editForm;
    setReviews({ ...reviews, [reviewType]: updated });
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} className="text-[#016fbe] mb-6">Reviews Management</Title>

      <div className="mb-6">
        <Select
          label="Review Type"
          value={reviewType}
          onChange={setReviewType}
          data={[
            { value: 'student', label: 'Student Reviews' },
            { value: 'client', label: 'Client Reviews' },
          ]}
          className="w-64"
        />
      </div>

      {editingIndex !== null ? (
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <TextInput
            label="Name"
            value={editForm.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
            required
            className="mb-4"
          />
          <div className="mb-4">
            <label className="block font-medium mb-1">Reviews</label>
            <RichTextEditor
              value={editForm.reviews}
              onChange={(value) => handleFormChange('reviews', value)}
              styles={{ content: { minHeight: 300 } }}
              className="h-[400px]"
            />
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
                <th className="px-4 py-3 text-left">Reviews</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews[reviewType].map((review, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{review.name}</td>
                  <td className="px-4 py-3">{review.reviews}</td>
                  <td className="px-4 py-3 flex space-x-3">
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

export default Reviews;