
import { useState } from 'react';
import BookingCTA from "../components/BookingCTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, HandCoins } from "lucide-react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "Todos os Serviços" },
    { id: "relaxation", label: "Relaxamento" },
    { id: "therapeutic", label: "Terapêutico" },
    { id: "specialty", label: "Especialidade" },
    { id: "packages", label: "Pacotes" }
  ];
  
  const services = [
    {
      id: 1,
      name: "Massagem de Relaxamento Sueca",
      description: "Uma massagem suave de corpo inteiro que usa movimentos longos e fluidos para promover o relaxamento, aliviar a tensão muscular e melhorar a circulação.",
      duration: "60 min / 90 min",
      price: "R$ 80 / R$ 110",
      image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=1974&auto=format&fit=crop",
      category: "relaxation",
      benefits: [
        "Reduz o estresse e ansiedade",
        "Melhora a circulação",
        "Alivia a tensão muscular",
        "Aumenta a clareza mental"
      ]
    },
    {
      id: 2,
      name: "Massagem Terapêutica",
      description: "Uma massagem terapêutica que se concentra no realinhamento de camadas mais profundas de músculos e tecido conjuntivo. Ideal para dores crônicas e áreas contraídas.",
      duration: "60 min / 90 min",
      price: "R$ 90 / R$ 120",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1770&auto=format&fit=crop",
      category: "therapeutic",
      benefits: [
        "Alivia dores crônicas",
        "Quebra tecido cicatricial",
        "Melhora a postura",
        "Aumenta a amplitude de movimento"
      ]
    },
    {
      id: 3,
      name: "Terapia com Pedras Quentes",
      description: "Pedras lisas e aquecidas são colocadas em pontos específicos do corpo e utilizadas com técnicas de massagem para relaxar e curar o corpo.",
      duration: "90 min",
      price: "R$ 120",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
      category: "specialty",
      benefits: [
        "Alivia rigidez muscular",
        "Aumenta a circulação",
        "Reduz o estresse",
        "Promove relaxamento profundo"
      ]
    },
    {
      id: 4,
      name: "Massagem Aromaterápica",
      description: "Combina o poder dos óleos essenciais com técnicas de massagem terapêutica para melhorar o bem-estar físico e emocional.",
      duration: "75 min",
      price: "R$ 95",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop",
      category: "relaxation",
      benefits: [
        "Reduz a ansiedade",
        "Melhora o humor",
        "Promove um sono melhor",
        "Fortalece o sistema imunológico"
      ]
    },
    {
      id: 5,
      name: "Massagem Desportiva",
      description: "Concentra-se em grupos musculares específicos relevantes para suas atividades físicas, ajudando a prevenir lesões e melhorar o desempenho.",
      duration: "60 min / 90 min",
      price: "R$ 90 / R$ 120",
      image: "https://images.unsplash.com/photo-1617952986600-802f965dcdbc?q=80&w=2070&auto=format&fit=crop",
      category: "therapeutic",
      benefits: [
        "Previne lesões",
        "Melhora o desempenho atlético",
        "Reduz o tempo de recuperação",
        "Aumenta a flexibilidade"
      ]
    },
    {
      id: 6,
      name: "Massagem Pré-natal",
      description: "Especialmente concebida para futuras mães para aliviar os desconfortos físicos da gravidez e promover o bem-estar geral.",
      duration: "60 min",
      price: "R$ 85",
      image: "https://images.unsplash.com/photo-1610824224972-db9878a2fe2c?q=80&w=2070&auto=format&fit=crop",
      category: "specialty",
      benefits: [
        "Reduz o desconforto da gravidez",
        "Alivia dores nas costas e articulações",
        "Diminui o inchaço",
        "Melhora o sono"
      ]
    },
    {
      id: 7,
      name: "Pacote Retiro para Casais",
      description: "Compartilhe uma experiência relaxante com um ente querido. Inclui massagens lado a lado, aromaterapia e champanhe complementar.",
      duration: "120 min",
      price: "R$ 240",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      category: "packages",
      benefits: [
        "Fortalece o relacionamento",
        "Cria memórias compartilhadas",
        "Promove relaxamento",
        "Rejuvenescimento completo"
      ]
    },
    {
      id: 8,
      name: "Pacote Dia de Spa Completo",
      description: "Um dia completo de mimos, incluindo massagem corporal completa, facial, esfoliação corporal e tratamento para os pés com almoço incluído.",
      duration: "4 horas",
      price: "R$ 280",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",
      category: "packages",
      benefits: [
        "Rejuvenescimento completo do corpo",
        "Relaxamento profundo",
        "Revitalização da pele",
        "Eliminação do estresse"
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
            Nossos Serviços
          </h1>
          <p className="text-xl text-spa-text-light max-w-3xl">
            Descubra nossa gama de massagens profissionais e tratamentos corporais projetados para relaxar, rejuvenescer e restaurar seu bem-estar.
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
                          <h3 className="font-serif font-semibold text-spa-text mb-3">Benefícios:</h3>
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
                          Agendar Agora
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
                Dê o Presente do Relaxamento
              </h2>
              <p className="text-spa-text-light mb-6">
                Nossos vouchers de presente são perfeitos para aniversários, datas comemorativas ou apenas para mostrar a alguém que você se importa. Disponíveis para qualquer serviço ou valor personalizado.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Válido por 12 meses a partir da data de compra</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Elegantemente embalado</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Pode ser usado para qualquer serviço ou produto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spa-blue mr-2">•</span>
                  <span className="text-spa-text-light">Disponível para compra online ou na loja</span>
                </li>
              </ul>
              <a 
                href="/contact" 
                className="btn-outline inline-block"
              >
                Comprar Vale-Presente
              </a>
            </div>
            
            <div className="relative">
              <img 
                src="/public/cupom.jpg" 
                alt="Vale-presente" 
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
