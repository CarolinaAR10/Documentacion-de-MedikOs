import { Card } from "./ui/card";

const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const currentDate = 29; // 29 de septiembre
const currentMonth = "Septiembre";
const currentYear = "2025";

// Generate calendar days for September 2025
const generateCalendarDays = () => {
  const days = [];
  
  // Previous month days (August 31)
  days.push(31);
  
  // Current month days (1-30)
  for (let i = 1; i <= 30; i++) {
    days.push(i);
  }
  
  // Next month days to fill the grid
  for (let i = 1; i <= 4; i++) {
    days.push(i);
  }
  
  return days;
};

export function CalendarWidget() {
  const calendarDays = generateCalendarDays();
  
  return (
    <Card className="p-6">
      <div className="text-center mb-4">
        <h3 className="font-semibold text-gray-700 mb-1">Citas del mes</h3>
        <h2 className="text-xl font-bold text-gray-900">
          {currentMonth} De {currentYear}
        </h2>
      </div>
      
      {/* Days of week header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => {
          const isCurrentMonth = index >= 1 && index <= 30;
          const isToday = day === currentDate && isCurrentMonth;
          const isPreviousMonth = index === 0;
          const isNextMonth = index > 30;
          
          return (
            <button
              key={index}
              className={`
                w-10 h-10 text-sm rounded-lg transition-colors
                ${isToday 
                  ? 'bg-blue-500 text-white font-semibold' 
                  : isCurrentMonth 
                    ? 'hover:bg-gray-100 text-gray-900'
                    : 'text-gray-400 hover:bg-gray-50'
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </Card>
  );
}