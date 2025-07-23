import React, { useState } from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { TextInput, Button, Card, Title, Group } from '@mantine/core';

const initialMessages = [
  {
    name: 'John Doe',
    phoneNo: '+92 300 1234567',
    message: 'Interested in the Frontend Development course.',
  },
  {
    name: 'Jane Smith',
    phoneNo: '+92 310 9876543',
    message: 'Need more details about the online classes.',
  },
  {
    name: 'Alice Johnson',
    phoneNo: '+92 320 4567890',
    message: 'Looking forward to the Full Stack program.',
  },
];

const Messages = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [viewingIndex, setViewingIndex] = useState(null);

  const handleDelete = (index) => {
    const updated = [...messages];
    updated.splice(index, 1);
    setMessages(updated);
  };

  const handleView = (index) => {
    setViewingIndex(index);
  };

  const handleBack = () => {
    setViewingIndex(null);
  };

  if (viewingIndex !== null) {
    const message = messages[viewingIndex];
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <Title order={2} className="text-[#016fbe] mb-6">Message Details</Title>
        <Card shadow="md" padding="lg" radius="md" withBorder className="bg-white">
          <div className="space-y-4">
            <p><strong>Name:</strong> {message.name}</p>
            <p><strong>Phone No:</strong> {message.phoneNo}</p>
            <p><strong>Message:</strong> {message.message}</p>
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
      <Title order={2} className="text-[#016fbe] mb-6">Messages Management</Title>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
          <thead className="bg-[#016fbe] text-white">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Phone No</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{message.name}</td>
                <td className="px-4 py-3 whitespace-nowrap">{message.phoneNo}</td>
                <td className="px-4 py-3">{message.message}</td>
                <td className="px-4 py-3 flex space-x-3">
                  <button onClick={() => handleView(index)} className="text-blue-600 hover:text-blue-800">
                    <FaEye />
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
    </div>
  );
};

export default Messages;