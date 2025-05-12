
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/services' },
    { name: 'Sobre', path: '/about' },
    { name: 'Contato', path: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <h1 className="text-spa-text font-serif text-2xl md:text-3xl font-bold">
            DevPorto<span className="text-spa-blue-dark">Spa</span>
          </h1>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-medium text-lg transition-colors ${
                  isActive ? 'text-spa-blue-dark' : 'text-spa-text hover:text-spa-blue'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/contact#booking" 
            className="btn-primary"
          >
            Agendar
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-spa-text"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `font-medium text-lg py-2 transition-colors ${
                    isActive ? 'text-spa-blue-dark' : 'text-spa-text hover:text-spa-blue'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact#booking" 
              className="btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Agendar
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
