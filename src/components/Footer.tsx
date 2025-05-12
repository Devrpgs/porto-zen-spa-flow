
import { NavLink } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-spa-blue-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-4">DevPorto<span className="text-spa-green-light">Spa</span></h2>
            <p className="mb-6">A sanctuary of peace and rejuvenation where your well-being is our priority. Experience the art of relaxation.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-spa-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-spa-green-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-spa-green-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-spa-green-light transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-spa-green-light transition-colors">Services</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-spa-green-light transition-colors">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-spa-green-light transition-colors">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/contact#booking" className="hover:text-spa-green-light transition-colors">Book Appointment</NavLink>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Monday - Friday: 9am - 8pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Saturday: 10am - 6pm</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Sunday: 11am - 5pm</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" /> 
                <span>123 Relaxation Street, Porto, Portugal</span>
              </li>
              <li className="flex items-center">
                <PhoneCall size={18} className="mr-2 flex-shrink-0" /> 
                <span>+351 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" /> 
                <span>info@devportospa.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-spa-green mt-12 pt-6 text-center">
          <p>&copy; {currentYear} DevPortoSpa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
