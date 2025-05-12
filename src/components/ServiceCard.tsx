
import { NavLink } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  price: string;
  link: string;
}

const ServiceCard = ({ title, description, image, duration, price, link }: ServiceCardProps) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-2xl font-serif font-semibold text-spa-text">{title}</h3>
        </div>
        
        <div className="flex items-center text-sm text-spa-text-light mb-4 space-x-4">
          <span>{duration}</span>
          <span className="font-semibold text-spa-blue-dark">{price}</span>
        </div>
        
        <p className="text-spa-text-light mb-4">{description}</p>
        
        <div className="flex justify-between items-center">
          <NavLink 
            to={link}
            className="text-spa-blue-dark font-medium hover:text-spa-blue transition-colors"
          >
            Learn More
          </NavLink>
          <NavLink 
            to="/contact#booking" 
            className="btn-outline text-sm"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
