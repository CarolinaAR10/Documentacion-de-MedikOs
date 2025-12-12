import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: 'Pacientes hoy',
    value: 35,
  },
  {
    name: 'Ocupación camas',
    value: 40,
  },
];

export function StatisticsChart() {
  return (
    <Card className="p-6 h-full">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-700 mb-1">📊 Estadísticas</h3>
      </div>
      
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Bar 
              dataKey="value" 
              fill="#60A5FA" 
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">35</div>
          <div className="text-xs text-gray-500">Pacientes hoy</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">40</div>
          <div className="text-xs text-gray-500">Ocupación camas</div>
        </div>
      </div>
    </Card>
  );
}