
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  const getNavbarStyles = () => {
    if (isHomePage) {
      if (isScrolled) {
        return 'bg-white bg-opacity-80 backdrop-blur-sm shadow-md py-3';
      }
      return 'bg-black bg-opacity-10 backdrop-blur-sm py-5';
    }
    return isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getNavbarStyles()}`}>
      <div className="container-custom flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <h1 className={`font-serif text-2xl md:text-3xl font-bold ${isHomePage && !isScrolled ? 'text-white' : 'text-spa-text'}`}>
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
                  isActive 
                    ? 'text-spa-blue-dark' 
                    : `${isHomePage && !isScrolled ? 'text-white hover:text-spa-blue-light' : 'text-spa-text hover:text-spa-blue'}`
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink 
            to="/contact#booking" 
            className={`${isHomePage && !isScrolled ? 'bg-spa-blue-dark hover:bg-opacity-90 text-white' : 'btn-primary'} transition-all duration-300`}
          >
            Agendar
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isHomePage && !isScrolled ? 'text-white' : 'text-spa-text'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={`md:hidden ${isHomePage ? 'bg-black bg-opacity-70' : 'bg-white'} absolute top-full left-0 w-full shadow-md py-4 animate-fade-in`}>
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `font-medium text-lg py-2 transition-colors ${
                    isActive ? 'text-spa-blue-dark' : `${isHomePage ? 'text-white hover:text-spa-blue-light' : 'text-spa-text hover:text-spa-blue'}`
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/contact#booking" 
              className={`${isHomePage ? 'bg-spa-blue-dark hover:bg-opacity-90 text-white' : 'btn-primary'} text-center`}
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
