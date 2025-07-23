import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';

const initialTeam = [
  {
    name: 'John Doe',
    designation: 'Senior Developer',
    description: '<p>Experienced in React and Node.js, leading frontend projects.</p>',
    image: null,
  },
  {
    name: 'Jane Smith',
    designation: 'Project Manager',
    description: '<p>Oversees project timelines and team coordination.</p>',
    image: null,
  },
  {
    name: 'Alice Johnson',
    designation: 'UI/UX Designer',
    description: '<p>Specializes in creating intuitive user interfaces.</p>',
    image: null,
  },
];

const Team = () => {
  const [team, setTeam] = useState(initialTeam);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', designation: '', description: '', image: null });
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(team[index]);
    setPreviewImage(team[index].image || null);
  };

  const handleDelete = (index) => {
    const updated = [...team];
    updated.splice(index, 1);
    setTeam(updated);
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
    const updated = [...team];
    updated[editingIndex] = editForm;
    setTeam(updated);
    setEditingIndex(null);
    setPreviewImage(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setPreviewImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} className="text-[#016fbe] mb-6">Team Management</Title>

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
            label="Designation"
            value={editForm.designation}
            onChange={(e) => handleFormChange('designation', e.target.value)}
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
            <label className="block font-medium mb-2">Upload Team Image</label>
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
                <th className="px-4 py-3 text-left">Designation</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{member.name}</td>
                  <td className="px-4 py-3">{member.designation}</td>
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

export default Team;