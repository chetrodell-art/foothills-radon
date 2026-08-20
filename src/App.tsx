import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ServiceArea from "./pages/ServiceArea";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Realtors from "./pages/Realtors";
import Certifications from "./pages/Certifications";
import ServicePage from "./pages/ServicePage";
import ServicesHub from "./pages/ServicesHub";
import LocationPage from "./pages/LocationPage";
import LocationsHub from "./pages/LocationsHub";
import BlogPostPage from "./pages/BlogPostPage";
import BlogIndex from "./pages/BlogIndex";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/realtors" element={<Realtors />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/services" element={<ServicesHub />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/locations" element={<LocationsHub />} />
          <Route path="/locations/:slug" element={<LocationPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
