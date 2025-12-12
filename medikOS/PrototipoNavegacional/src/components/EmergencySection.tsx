import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { AlertTriangle, Ambulance } from "lucide-react";

const emergencyData = [
  {
    type: "Emergencias",
    count: "005",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    type: "Ambulancias",
    count: "3",
    icon: Ambulance,
    color: "text-red-600", 
    bgColor: "bg-red-50"
  }
];

export function EmergencySection() {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-500" />
        <h3 className="font-semibold text-red-600">Emergencias</h3>
      </div>
      
      <div className="space-y-4">
        {emergencyData.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg ${item.bgColor} border border-red-200`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {item.type}
                  </div>
                </div>
              </div>
              <Badge className="bg-red-600 text-white font-bold text-lg px-3 py-1">
                {item.count}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}