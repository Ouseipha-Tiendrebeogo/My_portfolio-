import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Portfolio sub-pages
import PersonalDetailsPage from "./pages/portfolio/PersonalDetailsPage";
import ExperiencePage from "./pages/portfolio/ExperiencePage";
import EducationPage from "./pages/portfolio/EducationPage";
import SkillsPage from "./pages/portfolio/SkillsPage";
import CertificationsPage from "./pages/portfolio/CertificationsPage";
import ProjectsPage from "./pages/portfolio/ProjectsPage"; // Import the new Projects page
import LanguagesInterestsPage from "./pages/portfolio/LanguagesInterestsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<Navigate to="/portfolio/details" replace />} />
          <Route path="/portfolio/*">
            <Route path="details" element={<PersonalDetailsPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="certifications" element={<CertificationsPage />} />
            <Route path="projects" element={<ProjectsPage />} /> {/* Add the new Projects route */}
            <Route path="languages-interests" element={<LanguagesInterestsPage />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;