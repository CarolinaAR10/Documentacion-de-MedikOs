import { useState } from "react";
import { Calendar, Clock, User, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Badge } from "./ui/badge";

type AppointmentStatus = "programada" | "reprogramada" | "atendida" | "cancelada";

interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  reason: string;
  status: AppointmentStatus;
  doctor: string;
  patientAge: number;
  patientId: string;
}

const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "María González López",
    date: "2025-10-25",
    time: "09:00",
    reason: "Consulta de rutina - Chequeo general",
    status: "programada",
    doctor: "Dr. Carlos Mendoza",
    patientAge: 45,
    patientId: "P-00123",
  },
  {
    id: "2",
    patientName: "Juan Pérez Martínez",
    date: "2025-10-25",
    time: "10:30",
    reason: "Dolor abdominal persistente",
    status: "programada",
    doctor: "Dra. Ana Torres",
    patientAge: 32,
    patientId: "P-00124",
  },
  {
    id: "3",
    patientName: "Laura Sánchez Ruiz",
    date: "2025-10-26",
    time: "11:00",
    reason: "Control post-operatorio",
    status: "atendida",
    doctor: "Dr. Roberto Silva",
    patientAge: 58,
    patientId: "P-00125",
  },
  {
    id: "4",
    patientName: "Pedro Ramírez García",
    date: "2025-10-26",
    time: "14:00",
    reason: "Consulta cardiológica",
    status: "reprogramada",
    doctor: "Dr. Luis Hernández",
    patientAge: 67,
    patientId: "P-00126",
  },
  {
    id: "5",
    patientName: "Carmen Díaz Flores",
    date: "2025-10-27",
    time: "09:30",
    reason: "Control de diabetes",
    status: "programada",
    doctor: "Dra. Ana Torres",
    patientAge: 52,
    patientId: "P-00127",
  },
  {
    id: "6",
    patientName: "Roberto Morales Castro",
    date: "2025-10-27",
    time: "15:00",
    reason: "Evaluación neurológica",
    status: "cancelada",
    doctor: "Dr. Fernando López",
    patientAge: 41,
    patientId: "P-00128",
  },
  {
    id: "7",
    patientName: "Ana María Vega Torres",
    date: "2025-10-28",
    time: "10:00",
    reason: "Chequeo pediátrico",
    status: "programada",
    doctor: "Dra. Patricia Ruiz",
    patientAge: 8,
    patientId: "P-00129",
  },
  {
    id: "8",
    patientName: "José Luis Mendoza",
    date: "2025-10-28",
    time: "16:30",
    reason: "Revisión de resultados de laboratorio",
    status: "atendida",
    doctor: "Dr. Carlos Mendoza",
    patientAge: 55,
    patientId: "P-00130",
  },
];

const statusConfig = {
  programada: {
    label: "Programada",
    color: "bg-blue-100 text-blue-700",
    icon: Calendar,
  },
  reprogramada: {
    label: "Reprogramada",
    color: "bg-orange-100 text-orange-700",
    icon: AlertCircle,
  },
  atendida: {
    label: "Atendida",
    color: "bg-green-100 text-green-700",
    icon: CheckCircle,
  },
  cancelada: {
    label: "Cancelada",
    color: "bg-red-100 text-red-700",
    icon: XCircle,
  },
};

export function AppointmentsView() {
  const [activeFilter, setActiveFilter] = useState<string>("atendida");

  const filters = [
    { id: "todas", label: "Todas" },
    { id: "programada", label: "Programada" },
    { id: "reprogramada", label: "Reprogramada" },
    { id: "atendida", label: "Atendida" },
    { id: "cancelada", label: "Cancelada" },
  ];

  const filteredAppointments = activeFilter === "todas" 
    ? mockAppointments 
    : mockAppointments.filter(apt => apt.status === activeFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-gray-900 mb-2">Citas Médicas</h1>
        <p className="text-gray-600">
          Visualización de las citas médicas registradas por el Doctor.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              px-4 py-2 rounded-full transition-all
              ${activeFilter === filter.id 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAppointments.map((appointment) => {
          const StatusIcon = statusConfig[appointment.status].icon;
          
          return (
            <div
              key={appointment.id}
              className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-200"
            >
              {/* Header with Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium">
                      {appointment.patientName}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {appointment.patientAge} años • {appointment.patientId}
                    </p>
                  </div>
                </div>
                <Badge 
                  className={`${statusConfig[appointment.status].color} border-0`}
                >
                  <StatusIcon className="w-3 h-3 mr-1" />
                  {statusConfig[appointment.status].label}
                </Badge>
              </div>

              {/* Appointment Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Fecha</p>
                    <p className="text-gray-900">{formatDate(appointment.date)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Hora</p>
                    <p className="text-gray-900">{appointment.time} hrs</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FileText className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Motivo</p>
                    <p className="text-gray-900">{appointment.reason}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <User className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-600 text-sm">Médico asignado</p>
                    <p className="text-gray-900">{appointment.doctor}</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                Ver detalles
              </button>
            </div>
          );
        })}
      </div>

      {/* No results message */}
      {filteredAppointments.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-gray-900 mb-2">No hay citas</h3>
          <p className="text-gray-600">
            No se encontraron citas con el filtro seleccionado.
          </p>
        </div>
      )}
    </div>
  );
}
