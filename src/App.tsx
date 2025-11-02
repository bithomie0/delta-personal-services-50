
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { DeltaAuthProvider } from "./contexts/DeltaAuthContext";
import Index from "./pages/Index";
import Imprint from "./pages/Imprint";
import Register from "./pages/portal/Register";
import Login from "./pages/portal/Login";
import ApplicantDashboard from "./pages/portal/ApplicantDashboard";
import AdminDashboard from "./pages/portal/AdminDashboard";
import "./i18n/config";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DeltaAuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/portal/register" element={<Register />} />
            <Route path="/portal/login" element={<Login />} />
            <Route path="/portal/dashboard" element={<ApplicantDashboard />} />
            <Route path="/portal/admin" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DeltaAuthProvider>
  </QueryClientProvider>
);

export default App;
