import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group, Checkbox } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';

const initialBanners = [
  {
    bannerTitle: 'Summer Sale',
    bannerName: 'Big Discount',
    slogan: 'Get up to 70% off!',
    description: '<p>Exclusive offers for a limited time only.</p>',
    image: null,
    showButton: true,
    buttonText: 'Shop Now',
  },
  {
    bannerTitle: 'New Arrivals',
    bannerName: '2025 Collection',
    slogan: 'Fresh trends every season',
    description: '<p>Check out our latest fashion arrivals for 2025.</p>',
    image: null,
    showButton: false,
    buttonText: '',
  },
];

const BannerAdmin = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    bannerTitle: '',
    bannerName: '',
    slogan: '',
    description: '',
    image: null,
    showButton: false,
    buttonText: '',
  });
  const [previewImage, setPreviewImage] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditForm(banners[index]);
    setPreviewImage(banners[index].image || null);
  };

  const handleDelete = (index) => {
    const updated = [...banners];
    updated.splice(index, 1);
    setBanners(updated);
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
    const updated = [...banners];
    updated[editingIndex] = editForm;
    setBanners(updated);
    setEditingIndex(null);
    setPreviewImage(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setPreviewImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Title order={2} className="text-[#016fbe] mb-6">Banner Management</Title>

      {editingIndex !== null ? (
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <TextInput
            label="Banner Title"
            value={editForm.bannerTitle}
            onChange={(e) => handleFormChange('bannerTitle', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Banner Name"
            value={editForm.bannerName}
            onChange={(e) => handleFormChange('bannerName', e.target.value)}
            required
            className="mb-4"
          />
          <TextInput
            label="Slogan Text"
            value={editForm.slogan}
            onChange={(e) => handleFormChange('slogan', e.target.value)}
            required
            className="mb-4"
          />
           <div className="mb-4">
            <Checkbox
              label="Show Button?"
              checked={editForm.showButton}
              onChange={(e) => handleFormChange('showButton', e.currentTarget.checked)}
            />
          </div>

          {editForm.showButton && (
            <TextInput
              label="Button Text"
              value={editForm.buttonText}
              onChange={(e) => handleFormChange('buttonText', e.target.value)}
              className="mb-4"
            />
          )}

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
            <label className="block font-medium mb-2">Upload Banner Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {previewImage && (
              <img
                src={previewImage}
                alt="Banner Preview"
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
                <th className="px-4 py-3 text-left">Banner Title</th>
                <th className="px-4 py-3 text-left">Banner Name</th>
                <th className="px-4 py-3 text-left">Slogan</th>
                <th className="px-4 py-3 text-left">Button Text</th>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">{banner.bannerTitle}</td>
                  <td className="px-4 py-3">{banner.bannerName}</td>
                  <td className="px-4 py-3">{banner.slogan}</td>
                  <td className="px-4 py-3">{banner.showButton ? banner.buttonText : '—'}</td>
                  <td className="px-4 py-3">
                    {banner.image && (
                      <img
                        src={banner.image}
                        alt="Banner"
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

export default BannerAdmin;
