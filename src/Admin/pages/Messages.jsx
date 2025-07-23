import React, { useState } from 'react';

const AdminMessages = () => {
  // Sample data for demonstration
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+92 300 1234567',
      subject: 'Inquiry',
      message: 'Interested in your services.',
      date: '2025-07-23',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+92 321 9876543',
      subject: 'Support',
      message: 'Need help with setup.',
      date: '2025-07-22',
    },
  ]);

  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#016fbe] mb-6 text-center">Admin - Manage Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-[#016fbe] text-white">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.length > 0 ? (
              messages.map((message) => (
                <tr key={message.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="px-4 py-2">{message.name}</td>
                  <td className="px-4 py-2">{message.email}</td>
                  <td className="px-4 py-2">{message.phone}</td>
                  <td className="px-4 py-2">{message.subject}</td>
                  <td className="px-4 py-2">{message.date}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <button
                      className="bg-[#016fbe] text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
                      onClick={() => alert(message.message)} // Simple view action
                    >
                      View
                    </button>
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
                      onClick={() => handleDelete(message.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-2 text-center text-gray-500">
                  No messages found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminMessages;