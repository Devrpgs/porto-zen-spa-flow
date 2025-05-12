
import { NavLink } from 'react-router-dom';

const BookingCTA = () => {
  return (
    <section className="bg-spa-blue-light py-20">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spa-text mb-4">
              Ready to Experience Deep Relaxation?
            </h2>
            <p className="text-spa-text-light text-lg mb-8">
              Take the first step towards a more relaxed you. Book your appointment today and enjoy our professional massage services.
            </p>
            <NavLink 
              to="/contact#booking" 
              className="btn-primary inline-block"
            >
              Book Your Appointment
            </NavLink>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop" 
                alt="Spa relaxation" 
                className="w-full h-80 object-cover object-center"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg md:max-w-xs">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-spa-text-light">Over 500 5-star reviews</span>
              </div>
              <p className="text-spa-text font-medium italic">
                "The best massage experience I've ever had. Professional staff and amazing atmosphere."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
