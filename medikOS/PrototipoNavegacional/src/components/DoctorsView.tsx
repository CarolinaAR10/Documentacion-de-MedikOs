import { useState } from "react";
import { Search, Star, MapPin, Phone, Mail, Calendar, Clock, Filter } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  experience: number;
  location: string;
  phone: string;
  email: string;
  available: boolean;
  schedule: string;
  languages: string[];
  education: string;
}

const doctorsData: Doctor[] = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    name: "Dra. Ana Martínez",
    specialty: "Ginecología",
    image: "https://images.unsplash.com/photo-1548544507-7de0e7a931d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBzbWlsaW5nfGVufDF8fHx8MTc2MTI4NjM1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviews: 189,
    experience: 18,
    location: "Consultorio 301",
    phone: "+52 55 3456 7890",
    email: "a.martinez@medikos.com",
    available: false,
    schedule: "Lun-Vie: 10:00-18:00",
    languages: ["Español"],
    education: "Universidad Autónoma de Guadalajara",
  },
  {
    id: 4,
    name: "Dr. Roberto Sánchez",
    specialty: "Neurología",
    image: "https://images.unsplash.com/photo-1631558554770-74e921444006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNjEyODcwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 142,
    experience: 20,
    location: "Consultorio 405",
    phone: "+52 55 4567 8901",
    email: "r.sanchez@medikos.com",
    available: true,
    schedule: "Mar-Sáb: 11:00-19:00",
    languages: ["Español", "Inglés"],
    education: "Universidad de Monterrey",
  },
  {
    id: 5,
    name: "Dra. Laura Hernández",
    specialty: "Dermatología",
    image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyODQwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 178,
    experience: 10,
    location: "Consultorio 207",
    phone: "+52 55 5678 9012",
    email: "l.hernandez@medikos.com",
    available: true,
    schedule: "Lun-Vie: 9:00-15:00",
    languages: ["Español", "Inglés", "Italiano"],
    education: "Universidad Anáhuac",
  },
  {
    id: 6,
    name: "Dr. Fernando López",
    specialty: "Traumatología",
    image: "https://images.unsplash.com/photo-1758691463605-f4a3a92d6d37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjEyODYzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 195,
    experience: 16,
    location: "Consultorio 310",
    phone: "+52 55 6789 0123",
    email: "f.lopez@medikos.com",
    available: true,
    schedule: "Lun-Vie: 8:00-16:00",
    languages: ["Español"],
    education: "Universidad La Salle",
  },
  {
    id: 7,
    name: "Dra. Patricia Torres",
    specialty: "Endocrinología",
    image: "https://images.unsplash.com/photo-1682706841478-88eb8995357b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBzdGV0aG9zY29wZXxlbnwxfHx8fDE3NjEyODYzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 167,
    experience: 14,
    location: "Consultorio 108",
    phone: "+52 55 7890 1234",
    email: "p.torres@medikos.com",
    available: false,
    schedule: "Lun-Jue: 10:00-18:00",
    languages: ["Español", "Inglés"],
    education: "Universidad Panamericana",
  },
  {
    id: 8,
    name: "Dr. Miguel Ángel Ruiz",
    specialty: "Cirugía General",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwbWVkaWNhbCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEyODcwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviews: 210,
    experience: 22,
    location: "Consultorio 501",
    phone: "+52 55 8901 2345",
    email: "m.ruiz@medikos.com",
    available: true,
    schedule: "Mar-Vie: 7:00-15:00",
    languages: ["Español", "Inglés"],
    education: "Universidad Nacional Autónoma de México",
  },
  {
    id: 9,
    name: "Dra. Sofía Jiménez",
    specialty: "Oftalmología",
    image: "https://images.unsplash.com/photo-1666886573590-5815157da865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjEyODYzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 134,
    experience: 11,
    location: "Consultorio 202",
    phone: "+52 55 9012 3456",
    email: "s.jimenez@medikos.com",
    available: true,
    schedule: "Lun-Vie: 9:00-17:00",
    languages: ["Español", "Inglés", "Portugués"],
    education: "Universidad del Valle de México",
  },
  {
    id: 10,
    name: "Dr. Javier Morales",
    specialty: "Medicina General",
    image: "https://images.unsplash.com/photo-1609743522471-83c84ce23e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW9sb2dpc3QlMjBkb2N0b3J8ZW58MXx8fHwxNzYxMjg3MDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 98,
    experience: 8,
    location: "Consultorio 101",
    phone: "+52 55 0123 4567",
    email: "j.morales@medikos.com",
    available: true,
    schedule: "Lun-Sáb: 8:00-20:00",
    languages: ["Español"],
    education: "Instituto Politécnico Nacional",
  },
  {
    id: 11,
    name: "Dra. Isabel Vargas",
    specialty: "Psiquiatría",
    image: "https://images.unsplash.com/photo-1632053003385-245d2569568a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWNpYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzYxMjYwODYyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5.0,
    reviews: 223,
    experience: 17,
    location: "Consultorio 404",
    phone: "+52 55 1234 5670",
    email: "i.vargas@medikos.com",
    available: true,
    schedule: "Lun-Vie: 10:00-19:00",
    languages: ["Español", "Inglés"],
    education: "Universidad Nacional Autónoma de México",
  },
  {
    id: 12,
    name: "Dr. Ricardo Castillo",
    specialty: "Urología",
    image: "https://images.unsplash.com/photo-1622567182060-95c7dcf6a2f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnZW9uJTIwbWVkaWNhbHxlbnwxfHx8fDE3NjEyODYzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 145,
    experience: 13,
    location: "Consultorio 305",
    phone: "+52 55 2345 6701",
    email: "r.castillo@medikos.com",
    available: false,
    schedule: "Mar-Vie: 9:00-17:00",
    languages: ["Español", "Inglés"],
    education: "Universidad Autónoma de Guadalajara",
  },
];

const specialties = [
  "Todas las especialidades",
  "Cardiología",
  "Pediatría",
  "Ginecología",
  "Neurología",
  "Dermatología",
  "Traumatología",
  "Endocrinología",
  "Cirugía General",
  "Oftalmología",
  "Medicina General",
  "Psiquiatría",
  "Urología",
];

interface DoctorsViewProps {
  onViewDoctorProfile?: (doctorId: number) => void;
}

export function DoctorsView({ onViewDoctorProfile }: DoctorsViewProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas las especialidades");
  const [availableOnly, setAvailableOnly] = useState(false);

  // Filter doctors
  const filteredDoctors = doctorsData.filter((doctor) => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSpecialty = 
      selectedSpecialty === "Todas las especialidades" || 
      doctor.specialty === selectedSpecialty;
    
    const matchesAvailability = !availableOnly || doctor.available;

    return matchesSearch && matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Directorio de Médicos</h1>
        <p className="text-gray-600">
          Encuentra al especialista ideal para tu consulta
        </p>
      </div>

      {/* Filters */}
      <Card className="p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="sm:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por nombre o especialidad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Specialty Filter */}
          <div>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Availability Filter */}
          <div>
            <Button
              variant={availableOnly ? "default" : "outline"}
              className="w-full"
              onClick={() => setAvailableOnly(!availableOnly)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {availableOnly ? "Disponibles" : "Todos"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Count */}
      <div className="text-gray-600">
        Mostrando {filteredDoctors.length} {filteredDoctors.length === 1 ? "médico" : "médicos"}
      </div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <Card 
            key={doctor.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onViewDoctorProfile?.(doctor.id)}
          >
            {/* Doctor Image */}
            <div className="relative h-48 bg-gray-100">
              <ImageWithFallback
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              {doctor.available && (
                <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                  Disponible
                </Badge>
              )}
            </div>

            {/* Doctor Info */}
            <div className="p-5 space-y-4">
              {/* Name and Specialty */}
              <div>
                <h3 className="text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-sm text-blue-600">{doctor.specialty}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm">{doctor.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({doctor.reviews} reseñas)</span>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{doctor.experience} años de experiencia</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{doctor.location}</span>
              </div>

              {/* Schedule */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{doctor.schedule}</span>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap gap-1">
                {doctor.languages.map((lang) => (
                  <Badge key={lang} variant="outline" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Button variant="outline" className="w-full text-xs sm:text-sm">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Llamar
                </Button>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-xs sm:text-sm">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Agendar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredDoctors.length === 0 && (
        <Card className="p-12">
          <div className="text-center text-gray-500">
            <Search className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <h3 className="mb-2">No se encontraron médicos</h3>
            <p className="text-sm">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}