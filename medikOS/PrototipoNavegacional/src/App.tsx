import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { CalendarWidget } from "./components/CalendarWidget";
import { DailyAgenda } from "./components/DailyAgenda";
import { StatisticsChart } from "./components/StatisticsChart";
import { DoctorsOnDuty } from "./components/DoctorsOnDuty";
import { EmergencySection } from "./components/EmergencySection";
import { StatisticsPanel } from "./components/StatisticsPanel";
import { PharmacyView } from "./components/PharmacyView";
import { ProductDetailView } from "./components/ProductDetailView";
import { ProfileView } from "./components/ProfileView";
import { HelpView } from "./components/HelpView";
import { AppointmentsView } from "./components/AppointmentsView";
import { RegisterAppointmentView } from "./components/RegisterAppointmentView";
import { ChatView } from "./components/ChatView";
import { DoctorsView } from "./components/DoctorsView";
import { DoctorProfileView } from "./components/DoctorProfileView";
import { LandingPage } from "./components/LandingPage";
import { LoginView } from "./components/LoginView";
import { RegisterView } from "./components/RegisterView";
import { ViewWrapper } from "./components/ViewWrapper";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authView, setAuthView] = useState<"landing" | "login" | "register">("landing");
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // If not authenticated, show landing, login or register
  if (!isAuthenticated) {
    return (
      <>
        <Toaster />
        {authView === "landing" ? (
          <LandingPage onNavigateToLogin={() => setAuthView("login")} />
        ) : authView === "login" ? (
          <LoginView 
            onLogin={() => setIsAuthenticated(true)}
            onNavigateToRegister={() => setAuthView("register")}
          />
        ) : (
          <RegisterView
            onRegister={() => setAuthView("login")}
            onBackToLogin={() => setAuthView("login")}
          />
        )}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Toaster />
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        activeView={activeView}
        onViewChange={setActiveView}
      />
      
      {/* Main content */}
      <div className="flex-1 lg:ml-16">
        <Header onMenuClick={() => setSidebarOpen(true)} onLogout={() => setIsAuthenticated(false)} />
        
        <main className="p-4 lg:p-6">
          {activeView === "home" && (
            <ViewWrapper viewKey="home">
              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[calc(100vh-120px)]">
                {/* Left Column */}
                <div className="space-y-6">
                  <CalendarWidget />
                  <DoctorsOnDuty />
                </div>
                
                {/* Middle Column */}
                <div className="space-y-6">
                  <DailyAgenda />
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <StatisticsChart />
                  <EmergencySection />
                </div>
              </div>
              
              {/* Mobile Layout */}
              <div className="lg:hidden space-y-4">
                {/* First row - Calendar and Agenda */}
                <div className="grid grid-cols-1 gap-4">
                  <CalendarWidget />
                  <DailyAgenda />
                </div>
                
                {/* Second row - Statistics */}
                <div className="grid grid-cols-1 gap-4">
                  <StatisticsChart />
                </div>
                
                {/* Third row - Doctors and Emergency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <DoctorsOnDuty />
                  <EmergencySection />
                </div>
              </div>
            </ViewWrapper>
          )}

          {activeView === "statistics" && (
            <ViewWrapper viewKey="statistics">
              <StatisticsPanel />
            </ViewWrapper>
          )}

          {activeView === "pharmacy" && (
            <ViewWrapper viewKey={selectedProductId ? `pharmacy-${selectedProductId}` : "pharmacy"}>
              {selectedProductId ? (
                <ProductDetailView 
                  productId={selectedProductId}
                  onBack={() => setSelectedProductId(null)}
                />
              ) : (
                <PharmacyView onViewProductDetail={(id) => setSelectedProductId(id)} />
              )}
            </ViewWrapper>
          )}

          {activeView === "profile" && (
            <ViewWrapper viewKey="profile">
              <ProfileView onLogout={() => setIsAuthenticated(false)} />
            </ViewWrapper>
          )}

          {activeView === "help" && (
            <ViewWrapper viewKey="help">
              <HelpView />
            </ViewWrapper>
          )}

          {activeView === "appointments" && (
            <ViewWrapper viewKey="appointments">
              <AppointmentsView />
            </ViewWrapper>
          )}

          {activeView === "register-appointment" && (
            <ViewWrapper viewKey="register-appointment">
              <RegisterAppointmentView />
            </ViewWrapper>
          )}

          {activeView === "chat" && (
            <ViewWrapper viewKey="chat">
              <ChatView />
            </ViewWrapper>
          )}

          {activeView === "doctors" && (
            <ViewWrapper viewKey={selectedDoctorId ? `doctor-${selectedDoctorId}` : "doctors"}>
              {selectedDoctorId ? (
                <DoctorProfileView 
                  doctorId={selectedDoctorId}
                  onBack={() => setSelectedDoctorId(null)}
                />
              ) : (
                <DoctorsView onViewDoctorProfile={(id) => setSelectedDoctorId(id)} />
              )}
            </ViewWrapper>
          )}
        </main>
      </div>
    </div>
  );
}