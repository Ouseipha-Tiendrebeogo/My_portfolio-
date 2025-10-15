"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Briefcase, GraduationCap, Award, Languages, Home, FolderGit2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
        isActive
          ? "bg-sidebar-primary text-sidebar-primary-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
};

const sidebarNavItems = [
  {
    to: "/portfolio/details",
    icon: User,
    label: "Détails Personnels",
  },
  {
    to: "/portfolio/experience",
    icon: Briefcase,
    label: "Expériences",
  },
  {
    to: "/portfolio/education",
    icon: GraduationCap,
    label: "Parcours Académiques",
  },
  {
    to: "/portfolio/skills",
    icon: Award,
    label: "Compétences",
  },
  {
    to: "/portfolio/certifications",
    icon: Award, // Reusing Award icon for certifications
    label: "Certifications",
  },
  {
    to: "/portfolio/projects", // New Projects link
    icon: FolderGit2,
    label: "Projets",
  },
  {
    to: "/portfolio/languages-interests",
    icon: Languages,
    label: "Langues & Intérêts",
  },
];

export const SidebarNav: React.FC = () => {
  const isMobile = useIsMobile();

  const sidebarContent = (
    <nav className="grid items-start gap-2 px-2 text-sm font-medium lg:px-4">
      {sidebarNavItems.map((item) => (
        <NavLink key={item.to} to={item.to} icon={item.icon} label={item.label} />
      ))}
      <Link
        to="/"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      >
        <Home className="h-4 w-4" />
        Retour à l'accueil
      </Link>
    </nav>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col bg-gray-100 dark:bg-gray-800"> {/* Changed background to grey */}
          <nav className="grid gap-2 text-lg font-medium">
            <Link to="/portfolio/details" className="flex items-center gap-2 text-lg font-semibold text-sidebar-primary">
              <span className="sr-only">Portfolio</span>
            </Link>
            {sidebarContent}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="hidden border-r bg-sidebar-background lg:block h-full">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link to="/portfolio/details" className="flex items-center gap-2 font-semibold text-sidebar-primary">
            <span className="text-lg">Mon Portfolio</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          {sidebarContent}
        </div>
      </div>
    </div>
  );
};