import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Course from './pages/Course';
import Contact from './pages/Contact';
import EnrollForm from './pages/EnrollForm';

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
          {/* Add more pages here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
