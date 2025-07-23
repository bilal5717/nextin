import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Course from './pages/Course';
import Contact from './pages/Contact';
import EnrollForm from './pages/EnrollForm';
import CourseDetails from './pages/CourseDetails/React';
import AdminLogin from './Admin/pages/Login';
import AdminLayout from './Admin/layout/AdminLayout';
import Dashboard from './Admin/pages/Dashboard';
import Users from './Admin/pages/Users';
import Courses from './Admin/pages/Courses';
import AddCourse from './Admin/pages/Add/AddCourse';
import Banners from './Admin/pages/Banner';
import AddBanner from './Admin/pages/Add/AddBanner';
import ServicesManagement from './Admin/pages/Services';
import ServiceForm from './Admin/pages/Add/AddService';
import AdminEnrollments from './Admin/pages/Enrollments';
import AdminPayments from './Admin/pages/payments';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/enroll" element={<EnrollForm />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Route>
        <Route path="/adminToLogin" element={<AdminLogin />} />
        <Route
          path="/admin/*"
          element={
              <AdminLayout />
            
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/add" element={<AddCourse />} />
          <Route path="banners" element={<Banners />} />
<Route path="banners/add" element={<AddBanner />} />
<Route path="banners/edit/:id" element={<AddBanner />} />
<Route path="services" element={<ServicesManagement />} />
<Route path="services/add" element={<ServiceForm />} />
<Route path="service/edit/:id" element={<ServiceForm />} />

<Route path="enrollments" element={<AdminEnrollments />} />
<Route path="payments" element={<AdminPayments />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;