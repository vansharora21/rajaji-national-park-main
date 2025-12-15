import { useState } from 'react';

const JungleSafariNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide hover:text-gray-200 transition-colors">
              <span className="text-3xl">🌿</span>
              <span>Jungle Safari</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="/" className="nav-link text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="/about" className="nav-link text-gray-300 hover:text-white transition-colors ">About</a>  
              {/* <div className="relative group">
                <a href="#tours" className="nav-link">Tours</a>
                <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 py-2 z-50">
                  <a href="#tanzania" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Tanzania</a>
                  <a href="#kenya" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Kenya</a>
                  <a href="#rwanda" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Rwanda</a>
                </div>
              </div> */}
              {/* <a href="#destinations" className="nav-link">Destinations</a> */}
              <a href="/gallery" className="nav-link text-gray-300 hover:text-white transition-colors">Gallery</a>
              <a href="/blog" className="nav-link text-gray-300 hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* CTA Button & Contact - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+911234567890" className="text-gray-400 hover:text-gray-200 text-sm font-medium transition-colors">
              📞 +91 123 456 7890
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className={`w-8 h-8 transition-transform ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 shadow-2xl">
        <div className="px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block px-4 py-3 text-gray-200 font-semibold border-l-4 border-gray-600 bg-gray-800/50 rounded-r-lg hover:bg-gray-700/50">Home</a>
          <a href="#tours" className="block px-4 py-3 text-gray-200 font-semibold hover:bg-gray-800/50 rounded-lg">Tours</a>
          <a href="#destinations" className="block px-4 py-3 text-gray-200 font-semibold hover:bg-gray-800/50 rounded-lg">Destinations</a>
          <a href="#gallery" className="block px-4 py-3 text-gray-200 font-semibold hover:bg-gray-800/50 rounded-lg">Gallery</a>
          <a href="#blog" className="block px-4 py-3 text-gray-200 font-semibold hover:bg-gray-800/50 rounded-lg">Blog</a>
          <a href="#about" className="block px-4 py-3 text-gray-200 font-semibold hover:bg-gray-800/50 rounded-lg">About</a>
          <a href="tel:+911234567890" className="block px-4 py-3 text-gray-300 font-semibold border-t border-gray-700/50 hover:bg-gray-800/50">📞 Contact</a>
          <a 
            href="#book" 
            className="block w-full text-center bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300 mt-2"
          >
            Book Safari
          </a>
        </div>
        </div>
      )}
    </nav>
    
    </>
  );
};

export default JungleSafariNavbar;
