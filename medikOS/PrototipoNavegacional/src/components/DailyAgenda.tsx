import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar } from "lucide-react";

const agendaItems = [
  {
    type: "Notas médicas generadas", 
    count: 40,
    color: "bg-blue-100 text-blue-800",
    icon: "📋"
  },
  {
    type: "Pacientes en espera", 
    count: 7,
    color: "bg-orange-100 text-orange-800",
    icon: "🔴"
  },
  {
    type: "Consultorios activos", 
    count: 10,
    color: "bg-green-100 text-green-800",
    icon: "🟢"
  },
  {
    type: "Consultas finalizadas", 
    count: 12,
    color: "bg-emerald-100 text-emerald-800",
    icon: "🟢"
  },
  {
    type: "Reprogramaciones", 
    count: 3,
    color: "bg-yellow-100 text-yellow-800",
    icon: "🔄"
  },
  {
    type: "Cancelaciones", 
    count: 1,
    color: "bg-red-100 text-red-800",
    icon: "❌"
  }
];

export function DailyAgenda() {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-blue-500" />
        <h3 className="font-semibold text-blue-600">Agenda del Día</h3>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        Fecha: domingo, 28 de sep de 2025
      </div>
      
      <div className="space-y-3">
        {agendaItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium text-gray-700">
                {item.type}
              </span>
            </div>
            <Badge className={`${item.color} font-semibold`}>
              {item.count}
            </Badge>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Hora pico</span>
          <span className="font-semibold text-gray-900">10:30 AM</span>
        </div>
      </div>
    </Card>
  );
}