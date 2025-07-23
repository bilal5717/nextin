import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Course from './pages/Course';
import Contact from './pages/Contact';
import EnrollForm from './pages/EnrollForm';

import AdminLayout from './Admin/AdminLayout';
import Dashboard from './Admin/Dashboard';
import CoursesAdmin from './Admin/CoursesAdmin';
import ServicesAdmin from './Admin/ServicesAdmin';
import UsersAdmin from './Admin/UsersAdmin';
import BannerAdmin from './Admin/BannerAdmin';
import EnrolledStudent from './Admin/EnrolledStudent';
import Team from './Admin/Team';
import Reviews from './Admin/Reviews';
import Msg from './Admin/Msg';
function App() {
  return (
    <Router>
      <Routes>
        {/* Public Website Routes with Navbar/Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="enroll" element={<EnrollForm />} />
        </Route>

        {/* Admin Routes with Sidebar */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="coursesAdmin" element={<CoursesAdmin />} />
          <Route path="servicesAdmin" element={<ServicesAdmin />} />
          <Route path="usersAdmin" element={<UsersAdmin />} />
          <Route path="bannerAdmin" element={<BannerAdmin />} />
          <Route path="enrolledStudent" element={<EnrolledStudent />} />
           <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
              <Route path="msg" element={<Msg />} />
     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
