import { Menu, LogOut } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onMenuClick: () => void;
  onLogout?: () => void;
}

export function Header({ onMenuClick, onLogout }: HeaderProps) {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </Button>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900">MedikOS</h1>
          <p className="text-sm text-gray-500 capitalize">{currentDate}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-bold">!</span>
        </div>
        {onLogout && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="hidden sm:flex"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
          </Button>
        )}
      </div>
    </header>
  );
}