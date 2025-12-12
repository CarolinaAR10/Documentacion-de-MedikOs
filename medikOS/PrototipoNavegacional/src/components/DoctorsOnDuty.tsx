import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";

const doctors = [
  {
    name: "Dr. Juan Perez",
    specialty: "Cardiología",
    status: "Disponible",
    statusColor: "bg-green-100 text-green-800",
    initials: "JP"
  },
  {
    name: "Dra. María Gómez",
    specialty: "Pediatría", 
    status: "En consulta",
    statusColor: "bg-yellow-100 text-yellow-800",
    initials: "MG"
  }
];

export function DoctorsOnDuty() {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">👨‍⚕️</span>
        <h3 className="font-semibold text-gray-700">Médicos en Turno</h3>
      </div>
      
      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                {doctor.initials}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-gray-900 text-sm">
                {doctor.name}
              </div>
              <div className="text-xs text-gray-500">
                {doctor.specialty}
              </div>
            </div>
            
            <Badge className={`${doctor.statusColor} text-xs`}>
              {doctor.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}