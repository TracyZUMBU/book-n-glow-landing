import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Navigation from "./components/landing/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import AdminBookingDetail from "./pages/admin/AdminBookingDetail";
import AdminBookings from "./pages/admin/AdminBookings";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminProviderDetail from "./pages/admin/AdminProviderDetail";
import AdminProviders from "./pages/AdminProviders";
import Auth from "./pages/Auth";
import Booking from "./pages/Booking";
import CGU from "./pages/CGU";
import ClientLoyalty from "./pages/ClientLoyalty";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import ModalPreview from "./pages/ModalPreview";
import NotFound from "./pages/NotFound";
import PaymentDeposit from "./pages/PaymentDeposit";
import PaymentSuccess from "./pages/PaymentSuccess";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import Pricing from "./pages/Pricing";
import ProviderAnalytics from "./pages/ProviderAnalytics";
import ProviderAvailability from "./pages/ProviderAvailability";
import ProviderBookingDetail from "./pages/ProviderBookingDetail";
import ProviderClientDetail from "./pages/ProviderClientDetail";
import ProviderClients from "./pages/ProviderClients";
import ProviderDashboard from "./pages/ProviderDashboard";
import ProviderProfile from "./pages/ProviderProfile";
import ProviderProfileEdit from "./pages/ProviderProfileEdit";
import ProviderPromotions from "./pages/ProviderPromotions";
import ProviderRevenue from "./pages/ProviderRevenue";
import ProviderSettings from "./pages/ProviderSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GoogleAnalytics />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="/tarifs"
            element={
              <div className="min-h-screen">
                <Navigation />
                <Pricing />
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div className="min-h-screen">
                <Navigation />
                <FAQ />
              </div>
            }
          />
          <Route
            path="/fonctionnalites"
            element={
              <div className="min-h-screen">
                <Navigation />
                <Features />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="min-h-screen">
                <Navigation />
                <Contact />
              </div>
            }
          />
          <Route
            path="/mentions-legales"
            element={
              <div className="min-h-screen">
                <MentionsLegales />
              </div>
            }
          />
          <Route
            path="/politique-de-confidentialite"
            element={
              <div className="min-h-screen">
                <PolitiqueConfidentialite />
              </div>
            }
          />
          <Route
            path="/cgu"
            element={
              <div className="min-h-screen">
                <CGU />
              </div>
            }
          />
          <Route path="/profil/:id" element={<ProviderProfile />} />
          <Route path="/reserver/:serviceId" element={<Booking />} />
          <Route path="/paiement-reussi" element={<PaymentSuccess />} />
          <Route path="/acompte-paiement" element={<PaymentDeposit />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/modal-preview" element={<ModalPreview />} />
          <Route path="/fidelite/:providerId" element={<ClientLoyalty />} />
          
          {/* Provider Dashboard with nested routes */}
          <Route path="/prestataire" element={<ProviderDashboard />}>
            <Route path="revenus" element={<ProviderRevenue />} />
            <Route path="analyses" element={<ProviderAnalytics />} />
            <Route path="clients" element={<ProviderClients />} />
            <Route path="clients/:clientId" element={<ProviderClientDetail />} />
            <Route path="reservations/:bookingId" element={<ProviderBookingDetail />} />
            <Route path="profil" element={<ProviderProfileEdit />} />
            <Route path="promotions" element={<ProviderPromotions />} />
            <Route path="disponibilites" element={<ProviderAvailability />} />
            <Route path="parametres" element={<ProviderSettings />} />
          </Route>
          
          {/* Admin Dashboard with nested routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="bookings" element={<AdminBookings />} />
            <Route path="bookings/:bookingId" element={<AdminBookingDetail />} />
            <Route path="prestataires" element={<AdminProviders />} />
            <Route path="prestataires/:providerId" element={<AdminProviderDetail />} />
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
