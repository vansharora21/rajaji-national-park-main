// Footer.jsx
import { TreePine, Instagram, Facebook, Youtube, Phone, Mail } from 'lucide-react'; // Assuming Lucide React icons

const Footer = () => {
  return (
    <footer className="bg-gray-900/95 border-t border-gray-800 pt-8 sm:pt-12 pb-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-12">
        {/* Company Info */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <TreePine className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
            <h2 className="text-lg sm:text-xl font-bold">Jungle Safari</h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Protecting the wild since 1982. Join us in our mission to conserve nature while experiencing its raw beauty.
          </p>
          <div className="flex gap-3 sm:gap-4 mt-2">
            <a className="text-gray-400 hover:text-green-500 transition-colors duration-300 p-2 hover:bg-green-500/10 rounded-lg" href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-green-500 transition-colors duration-300 p-2 hover:bg-green-500/10 rounded-lg" href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="text-gray-400 hover:text-green-500 transition-colors duration-300 p-2 hover:bg-green-500/10 rounded-lg" href="#" aria-label="Youtube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1">
          <h3 className="text-white font-bold mb-3 sm:mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Book Permit</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Safari Zones</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Timings & Fees</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Resort Stay</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="sm:col-span-1">
          <h3 className="text-white font-bold mb-3 sm:mb-4">Support</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Contact Us</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">FAQs</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Rules & Regulations</a></li>
            <li><a className="hover:text-green-500 transition-colors duration-300" href="#">Cancellation Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="sm:col-span-1">
          <h3 className="text-white font-bold mb-3 sm:mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 sm:gap-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-green-500" />
              +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-green-500" />
              <a href="mailto:info@junglesafari.com">info@junglesafari.com</a>
            </li>
            <li className="flex items-start gap-2">
              
              <span>National Park Gate 2,<br/>Safari Road, District 4</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">© 2023 Jungle Safari Reserve. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6 text-xs text-gray-500">
          <a className="hover:text-green-500 transition-colors duration-300" href="#">Privacy Policy</a>
          <a className="hover:text-green-500 transition-colors duration-300" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
