
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
            <p className="mb-6">Um santuário de paz e rejuvenescimento onde seu bem-estar é nossa prioridade. Experimente a arte do relaxamento.</p>
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
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="hover:text-spa-green-light transition-colors">Início</NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-spa-green-light transition-colors">Serviços</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-spa-green-light transition-colors">Sobre Nós</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-spa-green-light transition-colors">Contato</NavLink>
              </li>
              <li>
                <NavLink to="/contact#booking" className="hover:text-spa-green-light transition-colors">Agendar Consulta</NavLink>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Horário de Funcionamento</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Segunda - Sexta: 9h - 20h</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Sábado: 10h - 18h</span>
              </li>
              <li className="flex items-center">
                <Clock size={18} className="mr-2" /> 
                <span>Domingo: 11h - 17h</span>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 border-b-2 border-spa-green pb-2">Entre em Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" /> 
                <span>Rua da Relaxamento 123, Porto, Portugal</span>
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
          <p>&copy; {currentYear} DevPortoSpa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
