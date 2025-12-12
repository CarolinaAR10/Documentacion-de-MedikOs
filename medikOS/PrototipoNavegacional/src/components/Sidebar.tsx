import { 
  Home, 
  BarChart3, 
  HelpCircle,
  Stethoscope,
  Pill,
  User,
  CalendarCheck,
  CalendarPlus,
  MessageCircle,
  UserCheck
} from "lucide-react";

interface SidebarItem {
  icon: any;
  label: string;
  active?: boolean;
  id: string;
}

const sidebarItems: SidebarItem[] = [
  { icon: Home, label: "Inicio", active: true, id: "home" },
  { icon: CalendarPlus, label: "Registrar Cita", id: "register-appointment" },
  { icon: CalendarCheck, label: "Citas", id: "appointments" },
  { icon: MessageCircle, label: "Chat", id: "chat" },
  { icon: BarChart3, label: "Estadísticas", id: "statistics" },
  { icon: UserCheck, label: "Médicos", id: "doctors" },
  { icon: Pill, label: "Farmacia", id: "pharmacy" },
  { icon: User, label: "Perfil", id: "profile" },
  { icon: HelpCircle, label: "Ayuda", id: "help" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: string;
  onViewChange: (viewId: string) => void;
}

export function Sidebar({ isOpen, onClose, activeView, onViewChange }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-16 lg:w-16 bg-blue-500 z-50 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        flex flex-col items-center py-4 space-y-2
      `}>
        {/* Logo */}
        <div className="mb-6 p-2 bg-blue-600 rounded-lg">
          <Stethoscope className="w-6 h-6 text-white" />
        </div>
        
        {/* Navigation items */}
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onViewChange(item.id)}
            className={`
              p-3 rounded-lg transition-colors w-12 h-12 flex items-center justify-center
              ${activeView === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-blue-100 hover:bg-blue-400 hover:text-white'
              }
            `}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </>
  );
}