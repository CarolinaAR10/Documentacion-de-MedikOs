import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const tabCategories = [
  { id: "organigrama", label: "Organigrama" },
  { id: "grupos", label: "Grupos Sanguíneos" },
  { id: "notas", label: "Notas Médicas por diagnóstico" },
  { id: "pacientes", label: "Pacientes Doctor", active: true }
];

const demographicData = [
  {
    name: 'Niño/a',
    value: 250,
    avatar: '👶',
    color: '#60A5FA'
  },
  {
    name: 'Adulto mayor',
    value: 180,
    avatar: '👴',
    color: '#3B82F6'
  },
  {
    name: 'Mujer',
    value: 350,
    avatar: '👩',
    color: '#1D4ED8'
  },
  {
    name: 'Hombre',
    value: 220,
    avatar: '👨',
    color: '#7C3AED'
  }
];

export function StatisticsPanel() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">
          Panel de Estadísticas Médicas
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selecciona una categoría para visualizar su información correspondiente en forma gráfica.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {tabCategories.map((category) => (
          <Button
            key={category.id}
            variant={category.active ? "default" : "outline"}
            className={`
              ${category.active 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
              }
              px-4 py-2 text-sm
            `}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Chart Card */}
      <Card className="p-8 bg-white shadow-lg">
        <div className="text-center mb-6">
          <p className="text-gray-600 italic">
            Lista los pacientes asignados a cada doctor en el sistema.
          </p>
        </div>

        {/* Chart Container */}
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={demographicData} 
              margin={{ top: 60, right: 30, left: 20, bottom: 40 }}
            >
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 14, fill: '#6B7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
                domain={[0, 400]}
                ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
              />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                maxBarSize={80}
              >
                {demographicData.map((entry, index) => (
                  <Bar key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Avatars positioned above bars */}
          <div className="relative -mt-16 flex justify-center items-end h-16">
            <div className="flex justify-between items-end w-full max-w-md mx-auto px-4">
              {demographicData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white rounded-full p-2 shadow-md border-2 border-gray-200 mb-2">
                    <span className="text-2xl">{item.avatar}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-700 mt-1">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}