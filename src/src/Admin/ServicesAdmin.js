import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';

const initialServices = [
  {
    title: 'Web Design',
    description: '<p>We create modern and responsive website designs.</p>',
    image: null,
  },
  {
    title: 'SEO Optimization',
    description: '<p>Improve your website ranking on Google and Bing.</p>',
    image: null,
  },
  {
    title: 'App Development',
    description: '<p>We build Android and iOS applications.</p>',
    image: null,
  },
];

const ServicesAdmin = () => {
  const [services, setServices] = useState(initialServices);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '', image: null });
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(services[index]);
    setPreviewImage(services[index].image || null);
  };

  const handleDelete = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
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
    const updated = [...services];
    updated[editingIndex] = editForm;
    setServices(updated);
    setEditingIndex(null);
    setPreviewImage(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setPreviewImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} className="text-[#016fbe] mb-6">Services Management</Title>

      {editingIndex !== null ? (
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <TextInput
            label="Service Title"
            value={editForm.title}
            onChange={(e) => handleFormChange('title', e.target.value)}
            required
            className="mb-4"
          />

          <div className="mb-4">
            <label className="block font-medium mb-1">Service Description</label>
            <RichTextEditor
              value={editForm.description}
              onChange={(value) => handleFormChange('description', value)}
              styles={{ content: { minHeight: 300 } }}
              className="h-[400px]"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-2">Upload Service Image</label>
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
                <th className="px-4 py-3 text-left">Service Title</th>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{service.title}</td>
                  <td className="px-4 py-3">
                    {service.image && (
                      <img
                        src={service.image}
                        alt="service"
                        className="w-20 h-14 object-cover border rounded shadow"
                      />
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-3">
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

export default ServicesAdmin;
