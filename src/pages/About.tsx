
import TeamMember from "../components/TeamMember";
import BookingCTA from "../components/BookingCTA";
import { CheckCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Lead Massage Therapist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "With over 15 years of experience, Ana specializes in therapeutic massage techniques that address chronic pain and tension.",
      specialties: ["Deep Tissue", "Sports Massage", "Myofascial Release"]
    },
    {
      name: "Marco Oliveira",
      role: "Senior Massage Therapist",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
      bio: "Marco combines traditional massage techniques with modern approaches to create personalized relaxation experiences.",
      specialties: ["Swedish Massage", "Hot Stone Therapy", "Aromatherapy"]
    },
    {
      name: "Sofia Costa",
      role: "Wellness Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bio: "Sofia is passionate about holistic wellness and specializes in treatments that nurture both body and mind.",
      specialties: ["Prenatal Massage", "Reflexology", "Meditation Guidance"]
    },
    {
      name: "Carlos Mendes",
      role: "Massage Therapist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "Carlos focuses on athletic recovery and performance enhancement, working with athletes of all levels.",
      specialties: ["Sports Recovery", "Trigger Point Therapy", "Injury Rehabilitation"]
    }
  ];
  
  const milestones = [
    {
      year: "2007",
      title: "Our Beginning",
      description: "DevPortoSpa was founded with a mission to provide exceptional massage therapy in a serene environment."
    },
    {
      year: "2012",
      title: "Expansion",
      description: "We expanded our services and facility to accommodate our growing clientele and team."
    },
    {
      year: "2016",
      title: "Award Recognition",
      description: "Recognized as Porto's Best Spa and Wellness Center by the Local Business Association."
    },
    {
      year: "2021",
      title: "New Techniques",
      description: "Introduced innovative massage techniques and treatments based on the latest research."
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every treatment, ensuring the highest quality experience."
    },
    {
      title: "Personalization",
      description: "We tailor each service to meet the unique needs of every client."
    },
    {
      title: "Continuous Learning",
      description: "Our team regularly updates their skills with the latest techniques and research."
    },
    {
      title: "Holistic Approach",
      description: "We believe in treating the whole person—mind, body, and spirit."
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-spa-blue-light py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-spa-text mb-4">
            About Us
          </h1>
          <p className="text-xl text-spa-text-light max-w-3xl">
            Learn about our journey, our team, and our dedication to helping you achieve wellness and relaxation.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
                Our Story
              </h2>
              <p className="text-spa-text-light mb-4">
                Founded in 2007, DevPortoSpa began with a simple mission: to create a sanctuary of peace and healing in the heart of Porto. What started as a small studio with just two therapists has grown into a premier wellness destination.
              </p>
              <p className="text-spa-text-light mb-4">
                Our founder, Teresa Almeida, envisioned a space where traditional massage techniques would meet modern approaches to wellness, creating experiences that nurture both body and mind.
              </p>
              <p className="text-spa-text-light mb-6">
                Today, we continue to uphold her vision, constantly evolving our services while staying true to our core values of excellence, personalization, and holistic care.
              </p>
              
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-16 h-16 object-cover rounded-full border-2 border-spa-blue"
                />
                <div className="ml-4">
                  <p className="font-serif font-semibold text-spa-text">Teresa Almeida</p>
                  <p className="text-sm text-spa-text-light">Founder & Director</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1974&auto=format&fit=crop" 
                alt="Spa atmosphere" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?q=80&w=1974&auto=format&fit=crop" 
                alt="Massage treatment" 
                className="rounded-lg shadow-md w-full h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-spa-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Our Core Values
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              These principles guide everything we do at DevPortoSpa, from how we design our treatments to how we interact with our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-spa-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-spa-blue-dark" />
                </div>
                <h3 className="font-serif font-bold text-xl text-spa-text mb-2">{value.title}</h3>
                <p className="text-spa-text-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Our Journey
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Key milestones in our history of providing exceptional wellness services.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-spa-blue-light"></div>
            
            {/* Milestones */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center justify-${index % 2 === 0 ? 'end' : 'start'} md:justify-center mb-4`}>
                    <div className="bg-spa-blue text-white font-bold py-2 px-6 rounded-full z-10">
                      {milestone.year}
                    </div>
                  </div>
                  
                  <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className="md:w-1/2 p-4"></div>
                    <div className="md:w-1/2 p-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-serif font-bold text-xl text-spa-text mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-spa-text-light">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="section-padding bg-spa-green-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Our highly trained professionals are dedicated to providing exceptional experiences tailored to your unique needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Facility */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Our Facility
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Designed with your comfort and relaxation in mind, our spa features top-quality amenities in a serene environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1974&auto=format&fit=crop" 
                alt="Reception area" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Welcoming Reception</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1629195896116-8a1148e0ea89?q=80&w=1975&auto=format&fit=crop" 
                alt="Treatment room" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Peaceful Treatment Rooms</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                alt="Relaxation area" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Serene Relaxation Lounge</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <BookingCTA />
    </main>
  );
};

export default About;
