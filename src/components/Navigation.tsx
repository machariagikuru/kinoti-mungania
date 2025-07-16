
import { useState } from "react";
import { Menu, X, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <Vote className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Kinoti Mungania</h2>
                <p className="text-xs text-muted-foreground">KUPPET Treasurer 2026</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('manifesto')}
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Manifesto
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </button>
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
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
              <button
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('manifesto')}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Manifesto
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contact
              </button>
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
