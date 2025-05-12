
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Descubra o Verdadeiro Relaxamento
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Escape do cotidiano e mergulhe em um mundo de tranquilidade e rejuvenescimento no DevPortoSpa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <NavLink to="/services" className="btn-primary text-center">
              Conheça Nossos Serviços
            </NavLink>
            <NavLink to="/contact#booking" className="bg-white text-spa-text hover:bg-spa-neutral-dark font-medium py-3 px-6 rounded-md transition-colors duration-300 text-center">
              Agendar Consulta
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Rolar para Baixo</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
