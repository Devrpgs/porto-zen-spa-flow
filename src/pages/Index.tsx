
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import BookingCTA from "../components/BookingCTA";
import { CheckCircle } from "lucide-react";

const Index = () => {
  const featuredServices = [
    {
      title: "Massagem Relaxante",
      description: "Movimentos suaves projetados para relaxar seus músculos e mente, aliviando a tensão e promovendo o bem-estar geral.",
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1974&auto=format&fit=crop",
      duration: "60 min",
      price: "R$ 80",
      link: "/services"
    },
    {
      title: "Massagem Terapêutica",
      description: "Atinge camadas mais profundas dos músculos para tratar dores crônicas e tensão, ideal para aqueles com problemas musculares persistentes.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1770&auto=format&fit=crop",
      duration: "75 min",
      price: "R$ 95",
      link: "/services"
    },
    {
      title: "Terapia com Pedras Quentes",
      description: "Utiliza pedras aquecidas para aumentar o relaxamento, aliviar a tensão muscular e melhorar o fluxo sanguíneo por todo o corpo.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      duration: "90 min",
      price: "R$ 110",
      link: "/services"
    }
  ];
  
  const testimonials = [
    {
      name: "Maria Santos",
      quote: "O DevPortoSpa tem sido meu spa preferido por anos. O ambiente é sereno e os massagistas são incrivelmente habilidosos. Sempre saio me sentindo revigorada e renovada.",
      rating: 5
    },
    {
      name: "João Silva",
      quote: "A massagem terapêutica era exatamente o que eu precisava para minha dor nas costas. O terapeuta estava atento às minhas necessidades e os resultados foram surpreendentes. Altamente recomendado!",
      rating: 5
    },
    {
      name: "Sophia Costa",
      quote: "Desde o momento em que você entra, o ambiente tranquilo te envolve. A terapia com pedras quentes foi uma experiência transformadora. Certamente voltarei!",
      rating: 4
    }
  ];
  
  const benefits = [
    {
      title: "Alívio do Estresse",
      description: "Nossas terapias são projetadas para reduzir o estresse e promover o relaxamento, ajudando você a encontrar paz interior."
    },
    {
      title: "Controle da Dor",
      description: "Técnicas específicas ajudam a aliviar dores crônicas e tensão muscular para um alívio duradouro."
    },
    {
      title: "Melhora do Sono",
      description: "Massagens regulares podem ajudar a melhorar a qualidade do sono e combater a insônia para um descanso melhor."
    },
    {
      title: "Humor Elevado",
      description: "Experimente o aumento da liberação de endorfinas que elevam seu humor e bem-estar geral."
    }
  ];

  return (
    <main>
      <Hero />
      
      {/* Services Section */}
      <section className="bg-spa-neutral section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-spa-text mb-4">Nossos Serviços em Destaque</h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Experimente nossos tratamentos terapêuticos mais populares, projetados para rejuvenescer seu corpo e acalmar sua mente.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="btn-outline inline-block">
              Ver Todos os Serviços
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
                Transforme Seu Bem-Estar Com Nossos Cuidados Especializados
              </h2>
              <p className="text-spa-text-light mb-8">
                No DevPortoSpa, acreditamos no poder curativo do toque e seus profundos efeitos na saúde física e mental. Nossos tratamentos terapêuticos são projetados para atender às suas necessidades específicas.
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
                alt="Mulher recebendo massagem" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-5 -right-5 bg-spa-blue p-4 md:p-6 rounded-lg shadow-md text-white max-w-xs">
                <p className="font-serif font-bold text-xl md:text-2xl">
                  +20 Anos
                </p>
                <p>de experiência profissional em bem-estar e terapia de massagem</p>
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
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Não confie apenas em nossa palavra. Ouça os clientes que experimentaram a diferença do DevPortoSpa.
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
