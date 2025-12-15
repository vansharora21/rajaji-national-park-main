// App.jsx - NO BrowserRouter needed
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import JungleSafariGallery from './components/Gallary';
import JungleSafariHome from './components/Homepage';
import JungleSafariNavbar from './components/Navbar';
import ContactUs from './components/Contact';
import AboutUs from './components/About';
import BlogPage from './components/blog';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <JungleSafariNavbar />
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<JungleSafariHome />} />
          <Route path="/gallery" element={<JungleSafariGallery />} />
          <Route path="/about" element={ <AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/blog" element={<BlogPage/>} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}
