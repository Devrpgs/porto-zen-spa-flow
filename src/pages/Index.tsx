
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BookingCTA from "../components/BookingCTA";
import { CheckCircle } from "lucide-react";

const Index = () => {
  const featuredServices = [
    {
      title: "Relaxation Massage",
      description: "Gentle strokes designed to relax your muscles and mind, relieving tension and promoting overall well-being.",
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1974&auto=format&fit=crop",
      duration: "60 min",
      price: "€80",
      link: "/services"
    },
    {
      title: "Deep Tissue Massage",
      description: "Targets deeper layers of muscles to address chronic pain and tension, ideal for those with persistent muscle problems.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1770&auto=format&fit=crop",
      duration: "75 min",
      price: "€95",
      link: "/services"
    },
    {
      title: "Hot Stone Therapy",
      description: "Uses heated stones to enhance relaxation, ease muscle tension and improve blood flow throughout the body.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      duration: "90 min",
      price: "€110",
      link: "/services"
    }
  ];
  
  const testimonials = [
    {
      name: "Maria Santos",
      quote: "DevPortoSpa has been my go-to spa for years. The atmosphere is serene and the massage therapists are incredibly skilled. I always leave feeling refreshed and renewed.",
      rating: 5
    },
    {
      name: "João Silva",
      quote: "The deep tissue massage was exactly what I needed for my back pain. The therapist was attentive to my needs and the results were amazing. Highly recommended!",
      rating: 5
    },
    {
      name: "Sophia Costa",
      quote: "From the moment you walk in, the peaceful ambience envelops you. The hot stone therapy was a life-changing experience. I'll definitely be back!",
      rating: 4
    }
  ];
  
  const benefits = [
    {
      title: "Stress Relief",
      description: "Our therapies are designed to reduce stress and promote relaxation, helping you find inner peace."
    },
    {
      title: "Pain Management",
      description: "Targeted techniques help alleviate chronic pain and muscular tension for lasting relief."
    },
    {
      title: "Improved Sleep",
      description: "Regular massages can help improve sleep quality and combat insomnia for better rest."
    },
    {
      title: "Enhanced Mood",
      description: "Experience increased release of endorphins that elevate your mood and overall well-being."
    }
  ];

  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <section className="bg-spa-neutral section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spa-text mb-4">Our Featured Services</h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Experience our most popular therapeutic treatments designed to rejuvenate your body and calm your mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="btn-outline inline-block">
              View All Services
            </a>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-spa-text mb-4">
                Transform Your Well-being With Our Expert Care
              </h2>
              <p className="text-spa-text-light mb-8">
                At DevPortoSpa, we believe in the healing power of touch and its profound effects on physical and mental health. Our therapeutic treatments are designed to address your specific needs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex">
                    <CheckCircle className="h-6 w-6 text-spa-blue mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif font-semibold text-spa-text mb-2">{benefit.title}</h3>
                      <p className="text-spa-text-light text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&w=1780&auto=format&fit=crop" 
                alt="Woman receiving massage" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-spa-blue p-4 md:p-6 rounded-lg shadow-md text-white max-w-xs">
                <p className="font-serif font-bold text-xl md:text-2xl">
                  20+ Years
                </p>
                <p>of professional experience in wellness and massage therapy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-spa-green-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spa-text mb-4">
              What Our Clients Say
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Don't just take our word for it. Hear from clients who have experienced the DevPortoSpa difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Booking CTA */}
      <BookingCTA />
    </main>
  );
};

export default Index;
