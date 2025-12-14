import { useState } from 'react';

const JungleSafariNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-900 via-green-800 to-emerald-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 text-white font-bold text-2xl tracking-wide hover:text-green-300 transition-colors">
              <span className="text-3xl">🌿</span>
              <span>Jungle Safari</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#home" className="nav-link">Home</a>
              <div className="relative group">
                <a href="#tours" className="nav-link">Tours</a>
                <div className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 py-2 z-50">
                  <a href="#tanzania" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Tanzania</a>
                  <a href="#kenya" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Kenya</a>
                  <a href="#rwanda" className="block px-4 py-2 text-green-900 hover:bg-green-100 rounded-lg text-sm">Rwanda</a>
                </div>
              </div>
              <a href="#destinations" className="nav-link">Destinations</a>
              <a href="#gallery" className="nav-link">Gallery</a>
              <a href="#blog" className="nav-link">Blog</a>
              <a href="#about" className="nav-link">About</a>
            </div>
          </div>

          {/* CTA Button & Contact - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+911234567890" className="text-green-100 hover:text-white text-sm font-medium transition-colors">
              📞 +91 123 456 7890
            </a>
            <a 
              href="#book" 
              className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-green-300 p-2 rounded-lg hover:bg-white/10 transition-colors"
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
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-green-200 shadow-2xl">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block px-4 py-3 text-green-900 font-semibold border-l-4 border-green-500 bg-green-50 rounded-r-lg">Home</a>
            <a href="#tours" className="block px-4 py-3 text-green-900 font-semibold hover:bg-green-100 rounded-lg">Tours</a>
            <a href="#destinations" className="block px-4 py-3 text-green-900 font-semibold hover:bg-green-100 rounded-lg">Destinations</a>
            <a href="#gallery" className="block px-4 py-3 text-green-900 font-semibold hover:bg-green-100 rounded-lg">Gallery</a>
            <a href="#blog" className="block px-4 py-3 text-green-900 font-semibold hover:bg-green-100 rounded-lg">Blog</a>
            <a href="#about" className="block px-4 py-3 text-green-900 font-semibold hover:bg-green-100 rounded-lg">About</a>
            <a href="tel:+911234567890" className="block px-4 py-3 text-green-900 font-semibold border-t border-green-100">📞 Contact</a>
            <a 
              href="#book" 
              className="block w-full text-center bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-lg mt-2 hover:shadow-xl hover:from-green-500 hover:to-emerald-600 transform hover:-translate-y-1 transition-all duration-300"
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
