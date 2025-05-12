
interface TestimonialCardProps {
  name: string;
  quote: string;
  image?: string;
  rating: number;
}

const TestimonialCard = ({ name, quote, image, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 relative">
      {/* Quote mark */}
      <div className="absolute top-4 left-4 text-6xl text-spa-blue-light opacity-30 font-serif">"</div>
      
      <div className="relative z-10">
        <div className="flex mb-4">
          {/* Rating stars */}
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        
        <blockquote className="text-spa-text italic mb-6">{quote}</blockquote>
        
        <div className="flex items-center">
          {image ? (
            <img src={image} alt={name} className="w-12 h-12 object-cover rounded-full mr-4" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-spa-blue-light text-spa-blue-dark flex items-center justify-center font-bold mr-4">
              {name.split(' ').map(part => part[0]).join('')}
            </div>
          )}
          <div>
            <p className="font-medium text-spa-text">{name}</p>
            <p className="text-sm text-spa-text-light">Verified Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
