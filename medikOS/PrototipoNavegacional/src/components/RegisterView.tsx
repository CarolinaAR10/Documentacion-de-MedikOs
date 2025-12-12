import { useState } from "react";
import { Stethoscope, Eye, EyeOff, User, Mail, Lock, ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner@2.0.3";

interface RegisterViewProps {
  onRegister: () => void;
  onBackToLogin: () => void;
}

export function RegisterView({ onRegister, onBackToLogin }: RegisterViewProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
    specialty: "",
    phone: "",
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!formData.fullName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword || !formData.role) {
      toast.error("Por favor completa todos los campos obligatorios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (!formData.acceptTerms) {
      toast.error("Debes aceptar los términos y condiciones");
      return;
    }

    // Simular registro exitoso
    toast.success("¡Registro exitoso! Ahora puedes iniciar sesión");
    setTimeout(() => {
      onRegister();
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
          <h2 className="text-2xl mb-4">Únete al equipo</h2>
          
          {/* Description */}
          <p className="text-blue-100 max-w-md mx-auto">
            Crea tu cuenta para acceder al sistema de gestión hospitalaria
          </p>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50 overflow-y-auto">
        <div className="w-full max-w-md my-8">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-gray-900 mb-1">MedikOS</h1>
            <p className="text-gray-600">Crear cuenta nueva</p>
          </div>

          {/* Register Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Nombre completo *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Ej: Dr. Juan Pérez"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="h-11 pl-10"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 pl-10"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Nombre de usuario *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="usuario123"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="h-11 pl-10"
                  />
                </div>
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role">Rol *</Label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Selecciona tu rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctor">Doctor/a</SelectItem>
                    <SelectItem value="nurse">Enfermero/a</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                    <SelectItem value="receptionist">Recepcionista</SelectItem>
                    <SelectItem value="pharmacist">Farmacéutico/a</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Specialty - Only show if role is doctor */}
              {formData.role === "doctor" && (
                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidad</Label>
                  <Select
                    value={formData.specialty}
                    onValueChange={(value) => setFormData({ ...formData, specialty: value })}
                  >
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Selecciona tu especialidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Medicina General</SelectItem>
                      <SelectItem value="cardiology">Cardiología</SelectItem>
                      <SelectItem value="pediatrics">Pediatría</SelectItem>
                      <SelectItem value="neurology">Neurología</SelectItem>
                      <SelectItem value="surgery">Cirugía</SelectItem>
                      <SelectItem value="gynecology">Ginecología</SelectItem>
                      <SelectItem value="dermatology">Dermatología</SelectItem>
                      <SelectItem value="orthopedics">Traumatología</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+52 55 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-11"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-11 pl-10 pr-10"
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

              {/* Confirm Password */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña *</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repite tu contraseña"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="h-11 pl-10 pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                  className="mt-1"
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-700 cursor-pointer select-none"
                >
                  Acepto los{" "}
                  <button type="button" className="text-blue-500 hover:text-blue-600">
                    términos y condiciones
                  </button>
                  {" "}y la{" "}
                  <button type="button" className="text-blue-500 hover:text-blue-600">
                    política de privacidad
                  </button>
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-11 bg-blue-500 hover:bg-blue-600"
              >
                Crear cuenta
              </Button>

              {/* Login Link */}
              <div className="text-center">
                <span className="text-gray-600 text-sm">¿Ya tienes una cuenta? </span>
                <button
                  type="button"
                  onClick={onBackToLogin}
                  className="text-blue-500 hover:text-blue-600 text-sm"
                >
                  Iniciar sesión
                </button>
              </div>

              {/* Back to Home */}
              <div className="text-center pt-2">
                <button
                  type="button"
                  className="text-blue-500 hover:text-blue-600 text-sm inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Volver a inicio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
