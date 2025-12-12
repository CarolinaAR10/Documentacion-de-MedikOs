import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Award,
  Briefcase,
  Languages,
  MessageCircle,
  Share2,
  Heart,
  GraduationCap,
  Building2
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Avatar } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Progress } from "./ui/progress";

interface Review {
  id: number;
  patientName: string;
  rating: number;
  date: string;
  comment: string;
}

interface DoctorProfileViewProps {
  doctorId: number;
  onBack: () => void;
}

const doctorProfiles = {
  1: {
    name: "Dra. María González",
    specialty: "Cardiología",
    image: "https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMzk5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 156,
    experience: 15,
    location: "Consultorio 203",
    phone: "+52 55 1234 5678",
    email: "m.gonzalez@medikos.com",
    available: true,
    schedule: "Lun-Vie: 9:00-17:00",
    languages: ["Español", "Inglés"],
    education: "Universidad Nacional Autónoma de México",
    bio: "Especialista en cardiología con más de 15 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares. Comprometida con brindar atención médica de calidad con un enfoque centrado en el paciente.",
    certifications: [
      "Certificación del Consejo Mexicano de Cardiología",
      "Especialización en Ecocardiografía",
      "Curso de Intervención Coronaria Percutánea"
    ],
    workExperience: [
      {
        position: "Cardióloga Senior",
        institution: "Hospital MedikOS",
        period: "2015 - Presente",
      },
      {
        position: "Cardióloga",
        institution: "Hospital General de México",
        period: "2010 - 2015",
      },
    ],
    services: [
      "Consulta cardiológica general",
      "Ecocardiograma",
      "Electrocardiograma",
      "Prueba de esfuerzo",
      "Monitoreo Holter",
      "Control de presión arterial"
    ],
    reviewsList: [
      {
        id: 1,
        patientName: "Juan Pérez",
        rating: 5,
        date: "15 Oct 2024",
        comment: "Excelente doctora, muy profesional y amable. Me explicó todo con mucha paciencia."
      },
      {
        id: 2,
        patientName: "María López",
        rating: 5,
        date: "08 Oct 2024",
        comment: "La mejor cardióloga que he conocido. Muy detallada en sus diagnósticos."
      },
      {
        id: 3,
        patientName: "Carlos Ramírez",
        rating: 4,
        date: "01 Oct 2024",
        comment: "Muy buena atención, aunque a veces las consultas se retrasan un poco."
      },
    ],
  },
  2: {
    name: "Dr. Carlos Ramírez",
    specialty: "Pediatría",
    image: "https://images.unsplash.com/photo-1606619788433-2ba22e49d498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjExNjU4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 203,
    experience: 12,
    location: "Consultorio 105",
    phone: "+52 55 2345 6789",
    email: "c.ramirez@medikos.com",
    available: true,
    schedule: "Lun-Sáb: 8:00-14:00",
    languages: ["Español", "Inglés", "Francés"],
    education: "Instituto Politécnico Nacional",
    bio: "Pediatra dedicado al cuidado integral de niños y adolescentes. Especializado en el desarrollo infantil y la prevención de enfermedades pediátricas comunes.",
    certifications: [
      "Certificación del Consejo Mexicano de Pediatría",
      "Especialización en Neonatología",
      "Certificado en Lactancia Materna"
    ],
    workExperience: [
      {
        position: "Pediatra",
        institution: "Hospital MedikOS",
        period: "2012 - Presente",
      },
      {
        position: "Residente de Pediatría",
        institution: "Hospital Infantil de México",
        period: "2009 - 2012",
      },
    ],
    services: [
      "Consulta pediátrica",
      "Control del niño sano",
      "Vacunación",
      "Tratamiento de infecciones",
      "Asesoría nutricional infantil"
    ],
    reviewsList: [
      {
        id: 1,
        patientName: "Ana Martínez",
        rating: 5,
        date: "20 Oct 2024",
        comment: "Excelente con los niños, mi hijo lo adora. Muy paciente y profesional."
      },
      {
        id: 2,
        patientName: "Roberto Sánchez",
        rating: 5,
        date: "12 Oct 2024",
        comment: "El mejor pediatra de la zona. Siempre dispuesto a resolver dudas."
      },
    ],
  },
  // Add more doctors as needed with same structure
};

export function DoctorProfileView({ doctorId, onBack }: DoctorProfileViewProps) {
  const doctor = doctorProfiles[doctorId as keyof typeof doctorProfiles];

  if (!doctor) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <Card className="p-12">
          <div className="text-center text-gray-500">
            <p>Doctor no encontrado</p>
          </div>
        </Card>
      </div>
    );
  }

  const ratingDistribution = [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a doctores
      </Button>

      {/* Header Card */}
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Doctor Image */}
          <div className="lg:col-span-1">
            <div className="relative h-64 lg:h-full bg-gray-100">
              <ImageWithFallback
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              {doctor.available && (
                <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                  Disponible
                </Badge>
              )}
            </div>
          </div>

          {/* Doctor Info */}
          <div className="lg:col-span-2 p-6 lg:p-8">
            <div className="space-y-4">
              {/* Name and Specialty */}
              <div>
                <h1 className="text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-blue-600">{doctor.specialty}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl">{doctor.rating}</span>
                </div>
                <span className="text-gray-500">({doctor.reviews} reseñas)</span>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Experiencia</p>
                    <p className="text-gray-900">{doctor.experience} años</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-gray-900">{doctor.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="text-gray-900">{doctor.schedule}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Languages className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Idiomas</p>
                    <p className="text-gray-900">{doctor.languages.join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar
                </Button>
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Mensaje
                </Button>
                <Button variant="outline">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar
                </Button>
                <Button variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="p-6">
            <h2 className="text-gray-900 mb-4">Acerca de</h2>
            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
          </Card>

          {/* Education */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h2 className="text-gray-900">Educación</h2>
            </div>
            <p className="text-gray-900 mb-4">{doctor.education}</p>
            
            <div className="space-y-2">
              <p className="text-sm">Certificaciones:</p>
              <ul className="space-y-2">
                {doctor.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Experience */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-blue-600" />
              <h2 className="text-gray-900">Experiencia Profesional</h2>
            </div>
            <div className="space-y-4">
              {doctor.workExperience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <h3 className="text-gray-900">{exp.position}</h3>
                  <p className="text-sm text-gray-600">{exp.institution}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Reviews */}
          <Card className="p-6">
            <h2 className="text-gray-900 mb-6">Reseñas de Pacientes</h2>
            
            {/* Rating Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-3xl">{doctor.rating}</span>
                </div>
                <p className="text-gray-600">Basado en {doctor.reviews} reseñas</p>
              </div>

              <div className="space-y-2">
                {ratingDistribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 w-8">{dist.stars}★</span>
                    <Progress value={dist.percentage} className="h-2 flex-1" />
                    <span className="text-sm text-gray-600 w-10 text-right">{dist.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="space-y-4">
              {doctor.reviewsList.map((review) => (
                <div key={review.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600">{review.patientName.charAt(0)}</span>
                      </Avatar>
                      <div>
                        <p className="text-gray-900">{review.patientName}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm ml-13">{review.comment}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Contact Card */}
          <Card className="p-6">
            <h2 className="text-gray-900 mb-4">Información de Contacto</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <a href={`tel:${doctor.phone}`} className="text-blue-600 hover:underline">
                  {doctor.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href={`mailto:${doctor.email}`} className="text-blue-600 hover:underline">
                  {doctor.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-600">{doctor.location}</span>
              </div>
            </div>
          </Card>

          {/* Services Card */}
          <Card className="p-6">
            <h2 className="text-gray-900 mb-4">Servicios</h2>
            <ul className="space-y-2">
              {doctor.services.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-blue-600 mt-1">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </Card>

          {/* Office Image */}
          <Card className="overflow-hidden">
            <div className="h-48 bg-gray-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwb2ZmaWNlJTIwY29uc3VsdGF0aW9uJTIwcm9vbXxlbnwxfHx8fDE3NjEyODczNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Consultorio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 mb-1">Consultorio</h3>
              <p className="text-sm text-gray-600">Hospital MedikOS - {doctor.location}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
