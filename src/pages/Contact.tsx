
import { useRef, useEffect } from 'react';
import ContactForm from "../components/ContactForm";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Contact = () => {
  const bookingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (window.location.hash === "#booking" && bookingRef.current) {
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, []);

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-spa-blue-light py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-spa-text mb-4">
            Contato
          </h1>
          <p className="text-xl text-spa-text-light max-w-3xl">
            Entre em contato conosco para agendamentos, dúvidas ou feedback. Estamos aqui para ajudá-lo em sua jornada de bem-estar.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl font-serif font-bold text-spa-text mb-6">
                Fale Conosco
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-spa-blue-light p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-spa-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-spa-text mb-1">Endereço</h3>
                    <p className="text-spa-text-light">
                      Rua da Relaxamento, 123<br />
                      Porto, 4000-123<br />
                      Portugal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-blue-light p-3 rounded-full mr-4">
                    <PhoneCall className="h-6 w-6 text-spa-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-spa-text mb-1">Telefone</h3>
                    <p className="text-spa-text-light">+351 123 456 789</p>
                    <p className="text-spa-text-light">+351 987 654 321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-blue-light p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-spa-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-spa-text mb-1">Email</h3>
                    <p className="text-spa-text-light">info@devportospa.com</p>
                    <p className="text-spa-text-light">agendamentos@devportospa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-spa-blue-light p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-spa-blue-dark" />
                  </div>
                  <div>
                    <h3 className="font-medium text-spa-text mb-1">Horário de Funcionamento</h3>
                    <div className="text-spa-text-light">
                      <div className="grid grid-cols-2 gap-2">
                        <span>Segunda a Sexta:</span>
                        <span>9h - 20h</span>
                        <span>Sábado:</span>
                        <span>10h - 18h</span>
                        <span>Domingo:</span>
                        <span>11h - 17h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-serif font-semibold text-xl text-spa-text mb-4">Siga-nos</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="bg-spa-blue-light hover:bg-spa-blue text-spa-blue-dark hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="bg-spa-blue-light hover:bg-spa-blue text-spa-blue-dark hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="bg-spa-blue-light hover:bg-spa-blue text-spa-blue-dark hover:text-white p-3 rounded-full transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-spa-text mb-6">
                Envie uma Mensagem
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48097.09293046605!2d-8.65104613314583!3d41.15786542644548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465abc4e153c1%3A0xa648d95640b114bc!2sPorto%2C%20Portugal!5e0!3m2!1sen!2sus!4v1684626902470!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="DevPortoSpa localização"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section ref={bookingRef} id="booking" className="section-padding bg-spa-neutral">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Agende sua Visita
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Escolha seu método preferido para agendar uma sessão com nossos terapeutas especializados.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="phone">
              <TabsList className="mb-8 w-full">
                <TabsTrigger value="phone" className="w-1/3">Telefone</TabsTrigger>
                <TabsTrigger value="form" className="w-1/3">Formulário Online</TabsTrigger>
                <TabsTrigger value="email" className="w-1/3">Email</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phone" className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-serif font-semibold text-xl text-spa-text mb-3">
                    Agende por Telefone
                  </h3>
                  <p className="text-spa-text-light mb-4">
                    Ligue diretamente para falar com nossa recepcionista, que irá ajudá-lo a selecionar o tratamento perfeito e agendar sua visita.
                  </p>
                  <div className="flex items-center text-lg font-medium text-spa-blue">
                    <PhoneCall className="h-5 w-5 mr-2" />
                    +351 123 456 789
                  </div>
                  <p className="text-spa-text-light mt-4">
                    Disponível durante nosso horário de funcionamento:<br />
                    Segunda a Sexta: 9h - 20h<br />
                    Sábado: 10h - 18h<br />
                    Domingo: 11h - 17h
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="form" className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-serif font-semibold text-xl text-spa-text mb-4">
                    Formulário de Agendamento Online
                  </h3>
                  <p className="text-spa-text-light mb-6">
                    Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento.
                  </p>
                  
                  <div className="text-center my-12">
                    <p className="text-spa-text-light italic">
                      Formulário de agendamento online em breve! Por enquanto, por favor, ligue para nós ou envie um email para agendar sua visita.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-serif font-semibold text-xl text-spa-text mb-3">
                    Agende por Email
                  </h3>
                  <p className="text-spa-text-light mb-4">
                    Envie-nos um email com sua data, horário e tratamento preferidos, e responderemos em até 24 horas para confirmar seu agendamento.
                  </p>
                  <div className="flex items-center text-lg font-medium text-spa-blue">
                    <Mail className="h-5 w-5 mr-2" />
                    agendamentos@devportospa.com
                  </div>
                  <p className="text-spa-text-light mt-4">
                    Por favor, inclua as seguintes informações:
                  </p>
                  <ul className="list-disc list-inside text-spa-text-light ml-4 mt-2">
                    <li>Seu nome</li>
                    <li>Número de telefone para contato</li>
                    <li>Tratamento desejado</li>
                    <li>Data e hora preferidas</li>
                    <li>Quaisquer requisitos especiais</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-spa-text mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-spa-text-light max-w-2xl mx-auto">
              Encontre respostas para perguntas comuns sobre nossos serviços e políticas.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-spa-neutral p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-spa-text mb-2">Com que antecedência devo chegar para minha consulta?</h3>
              <p className="text-spa-text-light">Recomendamos chegar 15 minutos antes do horário agendado para preencher qualquer documentação e começar sua jornada de relaxamento.</p>
            </div>
            
            <div className="bg-spa-neutral p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-spa-text mb-2">Qual é a política de cancelamento?</h3>
              <p className="text-spa-text-light">Solicitamos um aviso de pelo menos 24 horas para cancelamentos, para evitar uma taxa de cancelamento. Entendemos que emergências acontecem, então entre em contato o mais rápido possível.</p>
            </div>
            
            <div className="bg-spa-neutral p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-spa-text mb-2">Vocês oferecem vale-presentes?</h3>
              <p className="text-spa-text-light">Sim, oferecemos vale-presentes para todos os nossos serviços. Eles podem ser adquiridos pessoalmente ou entrando em contato conosco diretamente.</p>
            </div>
            
            <div className="bg-spa-neutral p-6 rounded-lg">
              <h3 className="font-serif font-semibold text-spa-text mb-2">O que devo vestir durante minha massagem?</h3>
              <p className="text-spa-text-light">Você será adequadamente coberto durante sua massagem. Despe-se ao seu nível de conforto. Nossos terapeutas são treinados em técnicas profissionais de cobertura para garantir sua privacidade e conforto.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
