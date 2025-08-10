import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import StateFunding from "./pages/StateFunding";
import FAQ from "./pages/FAQ";
import Services from "./pages/Services";
import ElderlyHomeCare from "./pages/ElderlyHomeCare";
import IntellectuallyDisabledSpecialNeeds from "./pages/IntellectuallyDisabledSpecialNeeds";
import MommyCare from "./pages/MommyCare";
import Caregivers from "./pages/Caregivers";
import CaregiverReferralProgram from "./pages/CaregiverReferralProgram";
import AMBNewsletter from "./pages/AMBNewsletter";
import COVID19Update from "./pages/COVID19Update";
import NewUpdate2024 from "./pages/NewUpdate2024";
import InfluenzaVsCOVID19 from "./pages/InfluenzaVsCOVID19";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import LoadingScreen from "./components/LoadingScreen"; // Import the new LoadingScreen

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loading screen for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <LoadingScreen isVisible={isLoading} /> {/* Render the loading screen */}
        {!isLoading && ( // Only render app content when not loading
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/state-funding" element={<StateFunding />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/elderly-home-care" element={<ElderlyHomeCare />} />
              <Route path="/services/intellectually-disabled-special-needs" element={<IntellectuallyDisabledSpecialNeeds />} />
              <Route path="/services/mommy-care" element={<MommyCare />} />
              <Route path="/caregivers" element={<Caregivers />} />
              <Route path="/caregivers/referral-program" element={<CaregiverReferralProgram />} />
              <Route path="/caregivers/newsletter" element={<AMBNewsletter />} />
              <Route path="/covid-19-update" element={<COVID19Update />} />
              <Route path="/covid-19-update/2024-new-update" element={<NewUpdate2024 />} />
              <Route path="/covid-19-update/influenza-vs-covid-19" element={<InfluenzaVsCOVID19 />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;