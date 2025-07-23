import { Outlet, Link, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaUsers, 
  FaBook, 
  FaChartLine, 
  FaCog, 
  FaSignOutAlt,
  FaImage,
  FaSlidersH,
  FaServer,
  FaClipboardList,
  FaMoneyBillWave
} from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/adminToLogin');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white min-h-screen p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-6 mt-2 px-2">Admin Panel</h2>
        <nav className="flex-1 space-y-2">
          <Link 
            to="/admin" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </Link>
          <Link 
            to="/admin/users" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaUsers className="mr-3" />
            Users
          </Link>
          <Link 
            to="/admin/courses" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaBook className="mr-3" />
            Courses
          </Link>
          <Link 
            to="/admin/services" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaServer className="mr-3" />
            Services
          </Link>
          <Link 
            to="/admin/banners" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaImage className="mr-3" />
            Banners
          </Link>
          <Link 
            to="/admin/enrollments" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaClipboardList className="mr-3" />
            Enrollments
          </Link>
          <Link 
            to="/admin/payments" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaMoneyBillWave className="mr-3" />
            Payments
          </Link>
          <Link 
            to="/admin/analytics" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaChartLine className="mr-3" />
            Analytics
          </Link>
          <Link 
            to="/admin/settings" 
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            <FaCog className="mr-3" />
            Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2 rounded hover:bg-gray-700 transition-colors text-left"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;