"use client";

import React from "react";
import { SidebarNav } from "./SidebarNav";
import { Link } from "react-router-dom";
import { Package2 } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-background text-foreground">
      <SidebarNav />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Tableau de Bord du Portfolio</h2>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
          {children}
        </main>
        <footer className="border-t p-4 text-center text-sm text-muted-foreground">
          <MadeWithDyad />
        </footer>
      </div>
    </div>
  );
};