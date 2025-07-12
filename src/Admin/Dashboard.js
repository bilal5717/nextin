import React from 'react';
import { User, BookOpen, Users, FolderKanban, CalendarDays } from 'lucide-react';

const Dashboard = () => {
  const recentUsers = [
    { name: 'Ali Raza', email: 'ali@example.com', joined: '2025-07-02' },
    { name: 'Fatima Zahra', email: 'fatima@example.com', joined: '2025-07-01' },
    { name: 'Usman Tariq', email: 'usman@example.com', joined: '2025-06-29' },
  ];

  const enrolledStudents = [
    { name: 'Ayesha Malik', course: 'Frontend Development', enrolled: '2025-07-03' },
    { name: 'Hamza Khan', course: 'Mobile App Development', enrolled: '2025-07-02' },
    { name: 'Zainab Noor', course: 'Data Science', enrolled: '2025-07-01' },
  ];

  const summaryCards = [
    {
      title: 'Total Students',
      count: 120,
      icon: <User className="text-blue-500" size={28} />,
      color: 'bg-blue-100',
    },
    {
      title: 'Total Courses',
      count: 12,
      icon: <BookOpen className="text-green-500" size={28} />,
      color: 'bg-green-100',
    },
    {
      title: 'Total Users',
      count: 230,
      icon: <Users className="text-purple-500" size={28} />,
      color: 'bg-purple-100',
    },
    {
      title: 'Total Projects',
      count: 35,
      icon: <FolderKanban className="text-yellow-500" size={28} />,
      color: 'bg-yellow-100',
    },
  ];

  const renderAvatar = (name) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('');
    return (
      <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
        {initials}
      </div>
    );
  };

  return (
    <div className="p-6 space-y-8  min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl p-5 shadow-md flex items-center justify-between ${card.color}`}
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-700">{card.title}</h2>
              <p className="text-2xl font-bold text-gray-900">{card.count}</p>
            </div>
            <div>{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Recent Users</h3>
          <ul className="space-y-4">
            {recentUsers.map((user, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                {renderAvatar(user.name)}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <CalendarDays size={16} />
                  {user.joined}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recently Enrolled Students */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Recently Enrolled Students</h3>
          <ul className="space-y-4">
            {enrolledStudents.map((student, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
              >
                {renderAvatar(student.name)}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-800">{student.name}</p>
                  <p className="text-xs text-gray-500">Enrolled in {student.course}</p>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <CalendarDays size={16} />
                  {student.enrolled}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
