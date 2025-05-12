
import { useState } from 'react';
import BookingCTA from "../components/BookingCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, HandCoins } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All Services" },
    { id: "relaxation", label: "Relaxation" },
    { id: "therapeutic", label: "Therapeutic" },
    { id: "specialty", label: "Specialty" },
    { id: "packages", label: "Packages" }
  ];
  
  const services = [
    {
      id: 1,
      name: "Swedish Relaxation Massage",
      description: "A gentle, full-body massage that uses long, flowing strokes to promote relaxation, ease muscle tension, and improve circulation.",
      duration: "60 min / 90 min",
      price: "€80 / €110",
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1974&auto=format&fit=crop",
      category: "relaxation",
      benefits: [
        "Reduces stress and anxiety",
        "Improves circulation",
        "Releases muscle tension",
        "Enhances mental clarity"
      ]
    },
    {
      id: 2,
      name: "Deep Tissue Massage",
      description: "A therapeutic massage that focuses on realigning deeper layers of muscles and connective tissue. Ideal for chronic pain and contracted areas.",
      duration: "60 min / 90 min",
      price: "€90 / €120",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1770&auto=format&fit=crop",
      category: "therapeutic",
      benefits: [
        "Relieves chronic pain",
        "Breaks down scar tissue",
        "Improves posture",
        "Increases range of motion"
      ]
    },
    {
      id: 3,
      name: "Hot Stone Therapy",
      description: "Smooth, heated stones are placed on specific points on the body and used with massage techniques to relax and heal the body.",
      duration: "90 min",
      price: "€120",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      category: "specialty",
      benefits: [
        "Eases muscle stiffness",
        "Increases circulation",
        "Reduces stress",
        "Promotes deep relaxation"
      ]
    },
    {
      id: 4,
      name: "Aromatherapy Massage",
      description: "Combines the power of essential oils with therapeutic massage techniques to enhance physical and emotional well-being.",
      duration: "75 min",
      price: "€95",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
      category: "relaxation",
      benefits: [
        "Reduces anxiety",
        "Enhances mood",
        "Promotes better sleep",
        "Boosts immune system"
      ]
    },
    {
      id: 5,
      name: "Sports Massage",
      description: "Focuses on specific muscle groups relevant to your physical activities, helping prevent injuries and improve performance.",
      duration: "60 min / 90 min",
      price: "€90 / €120",
      image: "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?q=80&w=2070&auto=format&fit=crop",
      category: "therapeutic",
      benefits: [
        "Prevents injuries",
        "Enhances athletic performance",
        "Reduces recovery time",
        "Increases flexibility"
      ]
    },
    {
      id: 6,
      name: "Prenatal Massage",
      description: "Specially designed for expectant mothers to relieve the physical discomforts of pregnancy and promote overall wellness.",
      duration: "60 min",
      price: "€85",
      image: "https://images.unsplash.com/photo-1610824224972-db9878a2fe2c?q=80&w=2070&auto=format&fit=crop",
      category: "specialty",
      benefits: [
        "Reduces pregnancy discomfort",
        "Alleviates back and joint pain",
        "Decreases swelling",
        "Improves sleep"
      ]
    },
    {
      id: 7,
      name: "Couples Retreat Package",
      description: "Share a relaxing experience with a loved one. Includes side-by-side massages, aromatherapy, and complimentary champagne.",
      duration: "120 min",
      price: "€240",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      category: "packages",
      benefits: [
        "Strengthens relationship",
        "Creates shared memories",
        "Promotes relaxation",
        "Full body rejuvenation"
      ]
    },
    {
      id: 8,
      name: "Ultimate Day Spa Package",
      description: "A complete day of pampering including a full body massage, facial, body scrub, and foot treatment with lunch included.",
      duration: "4 hours",
      price: "€280",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      category: "packages",
      benefits: [
        "Complete body rejuvenation",
        "Deep relaxation",
        "Skin revitalization",
        "Stress elimination"
      ]
    }
  ];
  
  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-spa-blue-light py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-spa-text mb-4">
            Our Services
          </h1>
          <p className="text-xl text-spa-text-light max-w-3xl">
            Discover our range of professional massage and body treatments designed to relax, rejuvenate, and restore your well-being.
          </p>
        </div>
      </section>
      
      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-0">
              <div className="space-y-12">
                {filteredServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1 h-64 md:h-auto">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6 md:p-8">
                        <h2 className="text-2xl font-serif font-bold text-spa-text mb-2">
                          {service.name}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-spa-text-light mb-4">
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            <span>{service.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <HandCoins size={16} className="mr-1" />
                            <span>{service.price}</span>
                          </div>
                        </div>
                        
                        <p className="text-spa-text-light mb-6">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h3 className="font-serif font-semibold text-spa-text mb-3">Benefits:</h3>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-spa-blue mr-2">•</span>
                                <span className="text-spa-text-light">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <a 
                          href="/contact#booking" 
                          className="btn-primary inline-block"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Gift Cards Section */}
      <section className="bg-spa-neutral section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
                Give the Gift of Relaxation
              </h2>
              <p className="text-spa-text-light mb-6">
                Our gift cards are perfect for birthdays, anniversaries, or just to show someone you care. Available for any service or custom amount.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Valid for 12 months from purchase date</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Elegantly packaged</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Can be used for any service or product</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Available for purchase online or in-store</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="btn-outline inline-block"
              >
                Purchase Gift Card
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1607779097040-17baf93d0d43?q=80&w=1974&auto=format&fit=crop" 
                alt="Gift card" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-lg">
                <span className="font-serif font-bold text-2xl text-spa-blue">
                  15% OFF
                </span>
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

export default Services;
