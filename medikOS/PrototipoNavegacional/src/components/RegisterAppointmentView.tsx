import { useState } from "react";
import { Calendar as CalendarIcon, CalendarPlus, Clock, User } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

interface UpcomingAppointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  service: string;
}

const mockUpcomingAppointments: UpcomingAppointment[] = [
  {
    id: "1",
    patientName: "María González",
    date: "2025-10-25",
    time: "09:00",
    service: "Consulta General",
  },
  {
    id: "2",
    patientName: "Juan Pérez",
    date: "2025-10-25",
    time: "10:30",
    service: "Cardiología",
  },
  {
    id: "3",
    patientName: "Carmen Díaz",
    date: "2025-10-26",
    time: "14:00",
    service: "Pediatría",
  },
  {
    id: "4",
    patientName: "Roberto Morales",
    date: "2025-10-27",
    time: "11:00",
    service: "Neurología",
  },
];

const medicalServices = [
  "Consulta General",
  "Cardiología",
  "Pediatría",
  "Neurología",
  "Dermatología",
  "Oftalmología",
  "Traumatología",
  "Ginecología",
];

const appointmentTypes = [
  "Primera vez",
  "Control",
  "Seguimiento",
  "Urgencia",
  "Post-operatorio",
];

const spaces = [
  "Consultorio 1",
  "Consultorio 2",
  "Consultorio 3",
  "Sala de Emergencias",
  "Sala de Procedimientos",
];

export function RegisterAppointmentView() {
  const [formData, setFormData] = useState({
    patient: "",
    service: "",
    type: "",
    space: "",
    date: "",
    time: "",
    observations: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.patient || !formData.service || !formData.type || !formData.space || !formData.date || !formData.time) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    toast.success("Cita registrada exitosamente");
    
    // Reset form
    setFormData({
      patient: "",
      service: "",
      type: "",
      space: "",
      date: "",
      time: "",
      observations: "",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short' 
    };
    return date.toLocaleDateString('es-ES', options);
  };

  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Registrar Cita Médica</h1>
        <p className="text-gray-600">
          Completa el formulario para agendar una nueva cita médica.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Patient and Service Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patient">Paciente</Label>
                  <Input
                    id="patient"
                    placeholder="Nombre completo del paciente"
                    value={formData.patient}
                    onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Servicio Médico</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      {medicalServices.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Type and Space Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo</Label>
                  <Select 
                    value={formData.type} 
                    onValueChange={(value) => setFormData({ ...formData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                    <SelectContent>
                      {appointmentTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="space">Espacio</Label>
                  <Select 
                    value={formData.space} 
                    onValueChange={(value) => setFormData({ ...formData, space: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un espacio" />
                    </SelectTrigger>
                    <SelectContent>
                      {spaces.map((space) => (
                        <SelectItem key={space} value={space}>
                          {space}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Fecha</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="pr-10"
                    />
                    <CalendarIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time">Hora</Label>
                  <div className="relative">
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="pr-10"
                    />
                    <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Observations */}
              <div className="space-y-2">
                <Label htmlFor="observations">Observaciones</Label>
                <Textarea
                  id="observations"
                  placeholder="Ingrese notas u observaciones adicionales"
                  value={formData.observations}
                  onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                Registrar cita
              </Button>
            </form>
          </div>
        </div>

        {/* Upcoming Appointments Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="text-gray-900">Próximas citas</h3>
            </div>

            <div className="space-y-3">
              {mockUpcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {/* Date Badge */}
                  <div className="flex flex-col items-center justify-center bg-blue-500 text-white rounded-lg px-3 py-2 min-w-[60px]">
                    <span className="text-xs uppercase">{getDayName(appointment.date)}</span>
                    <span className="font-semibold">{formatDate(appointment.date)}</span>
                  </div>

                  {/* Appointment Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2">
                      <User className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-gray-900 truncate">
                          {appointment.patientName}
                        </p>
                        <p className="text-gray-600 text-sm">{appointment.service}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-500 text-xs">{appointment.time} hrs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {mockUpcomingAppointments.length === 0 && (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CalendarIcon className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-600 text-sm">No hay citas próximas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
