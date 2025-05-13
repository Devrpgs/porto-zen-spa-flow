
import TeamMember from "../components/TeamMember";
import BookingCTA from "../components/BookingCTA";
import { CheckCircle } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Massagista Principal",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      bio: "Com mais de 15 anos de experiência, Ana é especializada em técnicas de massagem terapêutica que tratam dores crônicas e tensão.",
      specialties: ["Massagem Profunda", "Massagem Desportiva", "Liberação Miofascial"]
    },
    {
      name: "Marco Oliveira",
      role: "Massagista Sênior",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop",
      bio: "Marco combina técnicas tradicionais de massagem com abordagens modernas para criar experiências personalizadas de relaxamento.",
      specialties: ["Massagem Sueca", "Terapia com Pedras Quentes", "Aromaterapia"]
    },
    {
      name: "Sofia Costa",
      role: "Especialista em Bem-Estar",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      bio: "Sofia é apaixonada por bem-estar holístico e especializada em tratamentos que nutrem tanto o corpo quanto a mente.",
      specialties: ["Massagem Pré-natal", "Reflexologia", "Orientação de Meditação"]
    },
    {
      name: "Carlos Mendes",
      role: "Terapeuta de Massagem",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      bio: "Carlos se concentra na recuperação atlética e melhoria de desempenho, trabalhando com atletas de todos os níveis.",
      specialties: ["Recuperação Esportiva", "Terapia de Pontos-Gatilho", "Reabilitação de Lesões"]
    }
  ];
  
  const milestones = [
    {
      year: "2007",
      title: "Nosso Início",
      description: "DevPortoSpa foi fundado com a missão de fornecer terapia de massagem excepcional em um ambiente sereno."
    },
    {
      year: "2012",
      title: "Expansão",
      description: "Expandimos nossos serviços e instalações para acomodar nossa clientela e equipe crescentes."
    },
    {
      year: "2016",
      title: "Reconhecimento",
      description: "Reconhecido como o Melhor Spa e Centro de Bem-Estar do Porto pela Associação de Negócios Locais."
    },
    {
      year: "2021",
      title: "Novas Técnicas",
      description: "Introduzimos técnicas inovadoras de massagem e tratamentos baseados nas pesquisas mais recentes."
    }
  ];

  const values = [
    {
      title: "Excelência",
      description: "Buscamos a excelência em cada tratamento, garantindo uma experiência da mais alta qualidade."
    },
    {
      title: "Personalização",
      description: "Adaptamos cada serviço para atender às necessidades únicas de cada cliente."
    },
    {
      title: "Aprendizado Contínuo",
      description: "Nossa equipe atualiza regularmente suas habilidades com as técnicas e pesquisas mais recentes."
    },
    {
      title: "Abordagem Holística",
      description: "Acreditamos em tratar a pessoa inteira—mente, corpo e espírito."
    }
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-spa-blue-light py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-spa-text mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-spa-text-light max-w-3xl">
            Conheça nossa jornada, nossa equipe e nossa dedicação em ajudar você a alcançar bem-estar e relaxamento.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
                Nossa História
              </h2>
              <p className="text-spa-text-light mb-4">
                Fundado em 2007, o DevPortoSpa começou com uma missão simples: criar um santuário de paz e cura no coração do Porto. O que começou como um pequeno estúdio com apenas dois terapeutas cresceu e se tornou um destino de bem-estar de primeira linha.
              </p>
              <p className="text-spa-text-light mb-4">
                Nossa fundadora, Teresa Almeida, imaginou um espaço onde técnicas tradicionais de massagem se encontrariam com abordagens modernas de bem-estar, criando experiências que nutrem tanto o corpo quanto a mente.
              </p>
              <p className="text-spa-text-light mb-6">
                Hoje, continuamos a defender sua visão, evoluindo constantemente nossos serviços enquanto permanecemos fiéis aos nossos valores fundamentais de excelência, personalização e cuidado holístico.
              </p>
              
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Fundadora" 
                  className="w-16 h-16 object-cover rounded-full border-2 border-spa-blue"
                />
                <div className="ml-4">
                  <p className="font-serif font-semibold text-spa-text">Teresa Almeida</p>
                  <p className="text-sm text-spa-text-light">Fundadora & Diretora</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=1974&auto=format&fit=crop" 
                alt="Ambiente do spa" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?q=80&w=1974&auto=format&fit=crop" 
                alt="Tratamento de massagem" 
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
              Nossos Valores Fundamentais
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Estes princípios orientam tudo o que fazemos no DevPortoSpa, desde como projetamos nossos tratamentos até como interagimos com nossos clientes.
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
              Nossa Jornada
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Marcos importantes em nossa história de fornecimento de serviços excepcionais de bem-estar.
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
              Conheça Nossa Equipe de Especialistas
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Nossos profissionais altamente treinados são dedicados a proporcionar experiências excepcionais adaptadas às suas necessidades únicas.
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
              Nossas Instalações
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Projetadas com seu conforto e relaxamento em mente, nossas instalações apresentam comodidades de alta qualidade em um ambiente sereno.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1974&auto=format&fit=crop" 
                alt="Área de recepção" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Recepção Acolhedora</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="/public/sala.jpg" 
                alt="Sala de tratamento" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Salas de Tratamento Tranquilas</h3>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop" 
                alt="Área de relaxamento" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-serif font-semibold text-spa-text">Lounge de Relaxamento Sereno</h3>
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
