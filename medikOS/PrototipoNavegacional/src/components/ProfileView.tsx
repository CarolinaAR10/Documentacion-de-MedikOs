import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Phone, MapPin, Globe, Calendar, Clock, Award, Stethoscope, LogOut } from "lucide-react";

const doctorData = {
  name: "Dr. Diego Mota",
  email: "mota@gmail.com",
  experience: "10 años de experiencia",
  avatar: "👨‍⚕️",
  phone: "+52 55 1234 5678",
  address: "Av. Médicos 123, CDMX",
  languages: ["Español", "Inglés"],
  specialty: {
    title: "Medicina General",
    description: "Con enfoque en atención preventiva y control de enfermedades crónicas."
  },
  bio: "Médico general egresado de la Universidad Nacional de Medicina. Con 10 años de experiencia en atención primaria, diagnóstico clínico y manejo integral de pacientes. Participa activamente en jornadas médicas comunitarias.",
  reviews: [
    {
      rating: 5,
      comment: "Muy amable y profesional.",
      patient: "María G."
    },
    {
      rating: 4,
      comment: "Atención excelente, resuelve todas tus dudas.",
      patient: "Carlos R."
    },
    {
      rating: 5,
      comment: "Lo recomiendo ampliamente.",
      patient: "Ana L."
    }
  ],
  certifications: [
    "Certificado por el Colegio Mexicano de Medicina General",
    "Curso en Urgencias Médicas (2022)",
    "Actualización en Telemedicina (2023)"
  ],
  schedule: {
    weekdays: "8:00 a.m. – 4:00 p.m.",
    weekend: "8:00 a.m. – 2:00 p.m.",
    note: "Atención previa cita"
  }
};

export function ProfileView({ onLogout }: { onLogout?: () => void }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const averageRating = doctorData.reviews.reduce((sum, review) => sum + review.rating, 0) / doctorData.reviews.length;

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Profile Section */}
      <Card className="relative overflow-hidden">
        {/* Blue Background Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-32 md:h-40"></div>
        
        {/* Profile Content */}
        <div className="relative px-4 md:px-6 pb-6">
          {/* Profile Picture */}
          <div className="absolute -top-12 md:-top-16">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <span className="text-3xl md:text-4xl">{doctorData.avatar}</span>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="pt-12 md:pt-16">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">{doctorData.name}</h1>
                <p className="text-sm md:text-base text-gray-600">{doctorData.email}</p>
                <Badge className="mt-2 bg-blue-100 text-blue-800 text-xs">
                  {doctorData.experience}
                </Badge>
              </div>
              
              {/* Notification Bell */}
              <div className="flex items-center">
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  <Award className="w-4 h-4 mr-2" />
                  Editar Perfil
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Mobile Layout */}
      <div className="block lg:hidden space-y-4">
        {/* Personal Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Phone className="w-4 h-4 mr-2 text-blue-600" />
            Información Personal
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-600">Teléfono:</p>
                <p className="text-gray-900">{doctorData.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-600">Dirección:</p>
                <p className="text-gray-900">{doctorData.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 text-gray-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-600">Idiomas:</p>
                <p className="text-gray-900">{doctorData.languages.join(", ")}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Specialty */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Stethoscope className="w-4 h-4 mr-2 text-blue-600" />
            Especialidad
          </h3>
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">{doctorData.specialty.title}</h4>
            <p className="text-sm text-gray-600">{doctorData.specialty.description}</p>
          </div>
        </Card>

        {/* Professional Bio */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Biografía Profesional</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{doctorData.bio}</p>
        </Card>

        {/* Certifications */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Award className="w-4 h-4 mr-2 text-blue-600" />
            Certificaciones
          </h3>
          <ul className="space-y-2">
            {doctorData.certifications.map((cert, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                {cert}
              </li>
            ))}
          </ul>
        </Card>

        {/* Schedule */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-blue-600" />
            Horario Laboral
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Lunes a Jueves:</span>
              <span className="text-gray-900">{doctorData.schedule.weekdays}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Viernes:</span>
              <span className="text-gray-900">{doctorData.schedule.weekend}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-600">Sábados:</span>
              <span className="text-gray-900">{doctorData.schedule.note}</span>
            </div>
          </div>
        </Card>

        {/* Patient Reviews */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-between">
            <span>Reseñas de Pacientes</span>
            <div className="flex items-center gap-1">
              {renderStars(Math.round(averageRating))}
              <span className="text-sm text-gray-600 ml-1">({averageRating.toFixed(1)})</span>
            </div>
          </h3>
          <div className="space-y-3">
            {doctorData.reviews.map((review, index) => (
              <div key={index} className="border-l-2 border-yellow-400 pl-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-xs text-gray-500">- {review.patient}</span>
                </div>
                <p className="text-sm text-gray-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Personal Information */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-blue-600" />
              Información Personal
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Teléfono:</p>
                  <p className="text-gray-900">{doctorData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Dirección:</p>
                  <p className="text-gray-900">{doctorData.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-600 text-sm">Idiomas:</p>
                  <p className="text-gray-900">{doctorData.languages.join(", ")}</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Professional Bio */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Biografía Profesional</h3>
            <p className="text-gray-600 leading-relaxed">{doctorData.bio}</p>
          </Card>

          {/* Patient Reviews */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Reseñas de Pacientes</h3>
              <div className="flex items-center gap-1">
                {renderStars(Math.round(averageRating))}
                <span className="text-sm text-gray-600 ml-2">({averageRating.toFixed(1)})</span>
              </div>
            </div>
            <div className="space-y-4">
              {doctorData.reviews.map((review, index) => (
                <div key={index} className="border-l-4 border-yellow-400 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">- {review.patient}</span>
                  </div>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Specialty */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
              Especialidad
            </h3>
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900">{doctorData.specialty.title}</h4>
              <p className="text-gray-600">{doctorData.specialty.description}</p>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-600" />
              Certificaciones
            </h3>
            <ul className="space-y-3">
              {doctorData.certifications.map((cert, index) => (
                <li key={index} className="text-gray-600 flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  {cert}
                </li>
              ))}
            </ul>
          </Card>

          {/* Schedule */}
          <Card className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Horario Laboral
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Lunes a Jueves:</span>
                <span className="text-gray-900">{doctorData.schedule.weekdays}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Viernes:</span>
                <span className="text-gray-900">{doctorData.schedule.weekend}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Sábados:</span>
                <span className="text-gray-900">{doctorData.schedule.note}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Mobile Edit Button */}
      <div className="block sm:hidden">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Award className="w-4 h-4 mr-2" />
          Editar Perfil
        </Button>
      </div>

      {/* Logout Button */}
      <div className="block sm:hidden">
        <Button className="w-full bg-red-600 hover:bg-red-700" onClick={onLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}