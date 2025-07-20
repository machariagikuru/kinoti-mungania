"use client";

import { useState } from "react";
import { Menu, X, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Offset scroll for fixed navbar (adjusts for 64px or 80px navbar height)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Kinoti Mungania</h2>
                <p className="text-xs text-muted-foreground">Incoming KUPPET Treasurer,Meru County 2026</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["home", "about", "manifesto", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <Button size="sm" className="bg-primary hover:bg-primary/90 ml-4">
                Support Campaign
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
              {["home", "about", "manifesto", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="bg-primary hover:bg-primary/90 w-full">
                  Support Campaign
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
