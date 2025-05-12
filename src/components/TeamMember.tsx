
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

const TeamMember = ({ name, role, image, bio, specialties }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-4 aspect-h-5 relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-spa-text mb-1">{name}</h3>
        <p className="text-spa-blue mb-4">{role}</p>
        <p className="text-spa-text-light mb-4">{bio}</p>
        
        <div>
          <h4 className="font-medium text-spa-text mb-2">Specialties:</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span 
                key={index}
                className="bg-spa-blue-light text-spa-blue-dark text-sm py-1 px-3 rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
