import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Star, Calendar, Settings, User, Phone, Mail, MessageCircle, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const helpSections = [
  {
    icon: Star,
    title: "Inicio",
    description: "Comienza a usar nuestro portal hospitalario. Conoce sus funciones y cómo aprovecharlas.",
    buttonText: "Empezar ahora",
    color: "text-yellow-600"
  },
  {
    icon: Calendar,
    title: "Agendar",
    description: "Agenda tus citas médicas, consulta tu horario y recibe recordatorios importantes.",
    buttonText: "Agendar cita",
    color: "text-blue-600"
  },
  {
    icon: Settings,
    title: "Servicios",
    description: "Conoce los servicios disponibles como laboratorio, urgencias, farmacia y más.",
    buttonText: "Ver servicios",
    color: "text-green-600"
  },
  {
    icon: User,
    title: "Contacto",
    description: "Contáctanos por email, WhatsApp o visita nuestras oficinas administrativas.",
    buttonText: "Contáctanos",
    color: "text-purple-600"
  }
];

const frequentQuestions = [
  "¿Cómo puedo agendar una cita con un especialista?",
  "¿Qué debo hacer si necesito cancelar o reprogramar mi cita?",
  "¿El hospital acepta mi seguro médico?",
  "¿Cómo puedo obtener mis resultados de laboratorio o estudios médicos?",
  "¿Dónde puedo encontrar información sobre los servicios de emergencia del hospital?",
  "¿Qué debo llevar conmigo a la cita médica?",
  "¿Cuál es el horario de atención del hospital?",
  "¿Cómo puedo contactar con el departamento de facturación para preguntas sobre mi factura?",
  "¿El hospital tiene algún servicio de transporte para pacientes?",
  "¿Dónde puedo obtener información sobre los programas de salud y prevención que ofrece el hospital?"
];

const hospitalAreas = [
  {
    title: "Consulta Externa",
    image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY29uc3VsdGF0aW9uJTIwZG9jdG9yfGVufDF8fHx8MTc1ODk5ODU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Laboratorio",
    image: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NTkwMjk0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Enfermería",
    image: "https://images.unsplash.com/photo-1730181731945-9556e10bfc7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbnVyc2UlMjBjYXJlfGVufDF8fHx8MTc1OTEyMzAxOHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function HelpView() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Necesitas ayuda?
        </h1>
        
        {/* Search Bar */}
        <Card className="max-w-2xl mx-auto p-3 md:p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="¿Cómo podemos ayudarte?"
              className="pl-10 pr-20 md:pr-24 bg-gray-50 border-gray-200"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3 md:px-4 bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
              Buscar
            </Button>
          </div>
        </Card>
      </div>

      {/* Help Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {helpSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <Card key={index} className="p-4 md:p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 flex items-center justify-center ${section.color}`}>
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{section.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{section.description}</p>
                </div>
                
                {/* Button */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
                  {section.buttonText}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Frequent Questions */}
        <Card className="p-4 md:p-6">
          <h2 className="font-semibold text-gray-900 mb-4 md:mb-6 text-lg md:text-xl">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-3">
            {frequentQuestions.map((question, index) => (
              <button
                key={index}
                className="w-full text-left p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm md:text-base text-blue-600 group-hover:text-blue-800 transition-colors">
                    {question}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Hospital Areas */}
        <Card className="p-4 md:p-6">
          <h2 className="font-semibold text-gray-900 mb-4 md:mb-6 text-lg md:text-xl">
            Áreas que maneja el hospital
          </h2>
          
          {/* Mobile Layout */}
          <div className="block md:hidden space-y-4">
            {hospitalAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{area.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:justify-center md:gap-8">
            {hospitalAreas.map((area, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mx-auto mb-3 group-hover:scale-105 transition-transform duration-200">
                  <ImageWithFallback
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium text-gray-900 text-sm lg:text-base group-hover:text-blue-600 transition-colors">
                  {area.title}
                </h3>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Contact Information */}
      <Card className="p-4 md:p-6">
        <h2 className="font-semibold text-gray-900 mb-4 md:mb-6 text-lg md:text-xl text-center">
          ¿Necesitas más ayuda?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phone */}
          <div className="text-center p-4 rounded-lg hover:bg-blue-50 transition-colors">
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Teléfono</h3>
            <p className="text-sm text-gray-600">+52 55 1234 5678</p>
            <p className="text-xs text-gray-500 mt-1">Lun - Vie: 8:00 AM - 6:00 PM</p>
          </div>

          {/* Email */}
          <div className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors">
            <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">Email</h3>
            <p className="text-sm text-gray-600">soporte@medikos.com</p>
            <p className="text-xs text-gray-500 mt-1">Respuesta en 24 horas</p>
          </div>

          {/* WhatsApp */}
          <div className="text-center p-4 rounded-lg hover:bg-green-50 transition-colors">
            <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-medium text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600">+52 55 1234 5679</p>
            <p className="text-xs text-gray-500 mt-1">Chat en tiempo real</p>
          </div>
        </div>
      </Card>
    </div>
  );
}