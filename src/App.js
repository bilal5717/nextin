import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Course from './pages/Course';
import Contact from './pages/Contact';
import EnrollForm from './pages/EnrollForm';
import CourseDetails from './pages/CourseDetails/React';
import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="course" element={<Course />} />
          <Route path="services" element={<Services />} />

          <Route path="contact" element={<Contact />} />
          <Route path="/enroll" element={<EnrollForm />} />
           <Route path="/courses/:courseId" element={<CourseDetails />} />
          {/* Add more pages here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
