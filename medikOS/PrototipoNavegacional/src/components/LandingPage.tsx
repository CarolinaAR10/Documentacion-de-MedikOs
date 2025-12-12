import { 
  Heart, 
  Users, 
  Clock, 
  Shield, 
  Stethoscope,
  Activity,
  FlaskConical,
  Microscope,
  Syringe,
  Scan,
  Dumbbell,
  UserCheck,
  Building2,
  Search,
  TrendingUp
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LandingPageProps {
  onNavigateToLogin: () => void;
}

const services = [
  {
    icon: Stethoscope,
    title: "Consulta General",
    description: "Atención primaria y diagnóstico de enfermedades comunes.",
  },
  {
    icon: Activity,
    title: "Especialidades Médicas",
    description: "Cardiología, Pediatría, Ginecología, Neurología y más.",
  },
  {
    icon: Heart,
    title: "Emergencias",
    description: "Servicio de urgencias las 24 horas.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio Clínico",
    description: "Análisis de sangre y estudios de laboratorio.",
  },
  {
    icon: Scan,
    title: "Imagenología",
    description: "Radiografías, ultrasonidos y resonancias magnéticas.",
  },
  {
    icon: Dumbbell,
    title: "Rehabilitación Física",
    description: "Terapias para recuperación de movilidad y dolor.",
  },
  {
    icon: Syringe,
    title: "Cirugías",
    description: "Procedimientos quirúrgicos con equipos de última generación.",
  },
  {
    icon: UserCheck,
    title: "Personal",
    description: "Contamos con un personal capacitado y capaz de hacer su trabajo.",
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Equipo Médico Especializado",
    description: "Profesionales altamente capacitados en diversas especialidades.",
  },
  {
    icon: Building2,
    title: "Infraestructura Moderna",
    description: "Equipadas con la más alta tecnología para diagnósticos precisos.",
  },
  {
    icon: Clock,
    title: "Atención 24/7",
    description: "Urgencias disponibles todos los días del año.",
  },
  {
    icon: Heart,
    title: "Programas de Salud",
    description: "Planes de prevención y bienestar para ti y tu familia.",
  },
  {
    icon: TrendingUp,
    title: "Investigación y Desarrollo",
    description: "Tratamientos innovadores para mejores soluciones.",
  },
  {
    icon: Shield,
    title: "Seguridad y Confianza",
    description: "Protocolos estrictos de bioseguridad para protección del paciente.",
  },
];

const doctors = [
  { image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyODQwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1548544507-7de0e7a931d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDF8fHx8MTc2MTI4NjM1Nnww&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjEyODYzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjEyODYzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1682706841478-88eb8995357b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdGV0aG9zY29wZXxlbnwxfHx8fDE3NjEyODYzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1758575514487-0390fcacc339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwdW5pZm9ybXxlbnwxfHx8fDE3NjExOTQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1622567182060-95c7dcf6a2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjEyODYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { image: "https://images.unsplash.com/photo-1758204054877-fb1c7ba85ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEyODYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
];

export function LandingPage({ onNavigateToLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 inline-block">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto">
              {/* Medical Cross Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Background circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-blue-300 opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-blue-400 opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-blue-500 opacity-60"></div>
                  </div>
                  
                  {/* White Cross */}
                  <div className="relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
                    <div className="absolute bg-blue-500 w-8 h-16 sm:w-12 sm:h-24 rounded-lg"></div>
                    <div className="absolute bg-blue-500 w-16 h-8 sm:w-24 sm:h-12 rounded-lg"></div>
                    <div className="absolute bg-white w-2 h-12 sm:w-3 sm:h-16"></div>
                    <div className="absolute bg-white w-12 h-2 sm:w-16 sm:h-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-gray-900 mb-4">MedikOS</h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl text-gray-900 mb-6">Atención Médica de Calidad</h2>
          
          {/* Description */}
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 px-4">
            MedikOS ofrece atención integral con profesionales altamente capacitados y tecnología de punta. 
            Nuestro compromiso es garantizar tu salud, proporcionándote servicios médicos en un entorno moderno, 
            seguro y confiable.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-gray-900 text-center mb-10">Nuestros Servicios</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              onClick={onNavigateToLogin}
              className="bg-blue-500 hover:bg-blue-600 px-8 h-11"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </section>

      {/* Doctors Gallery */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap mb-12">
            {doctors.map((doctor, index) => (
              <div key={index} className="relative group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <ImageWithFallback
                    src={doctor.image}
                    alt={`Doctor ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl text-gray-900 text-center mb-4">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
            En <span className="font-semibold">MedikOS</span>, nos dedicamos a brindar atención médica de 
            excelencia con un enfoque humano y tecnología de vanguardia.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="mb-4">Sobre MedikOS</h4>
              <p className="text-sm text-blue-100">
                Sistema integral de gestión hospitalaria para brindar la mejor atención médica.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Consulta General</li>
                <li>Especialidades</li>
                <li>Emergencias</li>
                <li>Laboratorio</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Tel: +52 55 1234 5678</li>
                <li>Email: info@medikos.com</li>
                <li>Av. Médicos 123, CDMX</li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="mb-4">Horarios</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>Lunes - Viernes: 8:00 - 20:00</li>
                <li>Sábados: 8:00 - 14:00</li>
                <li>Emergencias: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500 pt-8 text-center">
            <p className="text-sm text-blue-100">
              © 2025 MedikOS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
