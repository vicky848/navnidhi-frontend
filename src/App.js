import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Addmission from './component/Addmission';
import About from './component/About';
import Contact from './component/Contact';
import Gallery from './component/Gallery';

import './App.css';
import Service from './component/Service';
import AdminLogin from './component/AdminLogin';    
import TopBanner from './component/TopBanner';
import AdminDashboard from './component/AdminDashboard';
import Career from './component/CareerPage';


function App() {
  return (
    <BrowserRouter>

      <Navbar />
       <TopBanner/> 
       
      <Routes>
         
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/admission" element={<Addmission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />  
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
