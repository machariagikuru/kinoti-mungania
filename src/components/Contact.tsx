
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about my manifesto or want to support the campaign? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">kinotimungania@kuppet.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">Meru County, Kenya</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <span className="text-muted-foreground">KUPPET Elections 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-card-foreground mb-3">Campaign Updates</h4>
              <p className="text-muted-foreground mb-4">
                Stay informed about campaign events, manifesto updates, and election information.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe to Updates
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary to-accent/40 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Support the Campaign</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Volunteer Opportunities</h4>
                <p className="text-muted-foreground">
                  Join our team of dedicated volunteers helping to spread the message across Meru County.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Spread the Word</h4>
                <p className="text-muted-foreground">
                  Share our manifesto with fellow teachers and help build support for positive change.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Attend Events</h4>
                <p className="text-muted-foreground">
                  Participate in campaign rallies, town halls, and community meetings across the county.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-card rounded-lg border-l-4 border-primary">
              <p className="text-card-foreground font-medium">
                "Every teacher deserves a voice. Together, we will ensure that voice is heard."
              </p>
              <p className="text-muted-foreground text-sm mt-1">- Kinoti Mungania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
