
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Shield } from "lucide-react";

export const Hero = () => {
  const scrollToManifesto = () => {
    const element = document.getElementById('manifesto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Kinoti Mungania</span>
            <br />
            <span className="text-2xl md:text-4xl text-muted-foreground">for KUPPET Treasurer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Building a stronger future for teachers in Meru County through transparent financial management and comprehensive welfare programs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToManifesto}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              View My Manifesto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-muted-foreground font-medium">Elections 2026</p>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card/70 backdrop-blur-sm rounded-xl border border-border">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Teacher Welfare</h3>
              <p className="text-muted-foreground">Comprehensive support beyond burial assistance</p>
            </div>
            
            <div className="text-center p-6 bg-card/70 backdrop-blur-sm rounded-xl border border-border">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Financial Growth</h3>
              <p className="text-muted-foreground">Prudent fund management and asset acquisition</p>
            </div>
            
            <div className="text-center p-6 bg-card/70 backdrop-blur-sm rounded-xl border border-border">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Transparency</h3>
              <p className="text-muted-foreground">Open governance and clear communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
