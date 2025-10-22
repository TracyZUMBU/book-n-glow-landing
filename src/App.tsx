import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/landing/Navigation";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
