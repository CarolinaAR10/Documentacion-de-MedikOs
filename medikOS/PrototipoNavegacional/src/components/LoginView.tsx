import { useState } from "react";
import { Stethoscope, Eye, EyeOff } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

interface LoginViewProps {
  onLogin: () => void;
  onNavigateToRegister?: () => void;
}

export function LoginView({ onLogin, onNavigateToRegister }: LoginViewProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    // Simular login exitoso
    toast.success("Inicio de sesión exitoso");
    setTimeout(() => {
      onLogin();
    }, 500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Blue Welcome Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 items-center justify-center p-12">
        <div className="text-center text-white">
          {/* Logo */}
          <div className="mb-8 inline-block">
            <div className="relative w-32 h-32 mx-auto">
              {/* Medical Cross Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Background circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-blue-300 opacity-40"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-400 opacity-50"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-500 opacity-60"></div>
                  </div>
                  
                  {/* White Cross */}
                  <div className="relative flex items-center justify-center w-32 h-32">
                    <div className="absolute bg-white w-12 h-24 rounded-lg"></div>
                    <div className="absolute bg-white w-24 h-12 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl mb-4">MedikOS</h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl mb-4">Bienvenido</h2>
          
          {/* Description */}
          <p className="text-blue-100 max-w-md mx-auto">
            Accede al panel de administración del hospital
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-gray-900 mb-1">MedikOS</h1>
            <p className="text-gray-600">Bienvenido</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username Field */}
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder=""
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="h-11"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-11 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.remember}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, remember: checked as boolean })
                    }
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-700 cursor-pointer select-none"
                  >
                    Recuérdame
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-blue-500 hover:text-blue-600"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-11 bg-blue-500 hover:bg-blue-600"
              >
                Iniciar sesión
              </Button>

              {/* Register Link */}
              <div className="text-center">
                <span className="text-gray-600 text-sm">¿No tienes una cuenta? </span>
                <button
                  type="button"
                  onClick={onNavigateToRegister}
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  Registrar
                </button>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center gap-1"
                >
                  ← Volver a inicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}