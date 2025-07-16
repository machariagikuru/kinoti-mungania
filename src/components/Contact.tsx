
import { Mail, Phone, MapPin, Calendar, Facebook, Twitter, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Let's Connect & Build Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about my manifesto? Want to support the campaign? Ready to transform teacher welfare in Meru County? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <span className="text-muted-foreground">kinoti.mungania@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone/WhatsApp</p>
                    <span className="text-muted-foreground">+254 722 345 678</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <span className="text-muted-foreground">Meru County, Kenya</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Election Date</p>
                    <span className="text-muted-foreground">KUPPET Elections 2026</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center">
                <MessageSquare className="h-5 w-5 text-primary mr-2" />
                Campaign Updates
              </h4>
              <p className="text-muted-foreground mb-4">
                Stay informed about campaign events, manifesto updates, town halls, and election information. Be part of the movement for change.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Join WhatsApp Group
                </Button>
                <Button variant="outline">
                  Follow on Facebook
                </Button>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Facebook className="h-6 w-6 text-primary" />
              </a>
              <a href="#" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="h-6 w-6 text-primary" />
              </a>
              <a href="#" className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                <MessageSquare className="h-6 w-6 text-primary" />
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary to-accent/40 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">Support the Campaign</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2 flex items-center">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  Volunteer Opportunities
                </h4>
                <p className="text-muted-foreground">
                  Join our team of dedicated volunteers spreading the message across all 9 sub-counties in Meru. Help organize rallies, distribute materials, and mobilize teachers.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">School Visits & Town Halls</h4>
                <p className="text-muted-foreground">
                  Attend scheduled visits to schools and community meetings. Meet fellow teachers, discuss challenges, and learn how we can work together for positive change.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Spread the Word</h4>
                <p className="text-muted-foreground">
                  Share our manifesto with fellow teachers, headteachers, and education stakeholders. Use social media, WhatsApp groups, and school meetings to build awareness.
                </p>
              </div>

              <div className="bg-card/50 p-4 rounded-lg">
                <h5 className="font-semibold text-card-foreground mb-2">Upcoming Events</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Teacher Forums - Every Saturday</li>
                  <li>• Sub-county Rallies - Monthly</li>
                  <li>• School Visits - Ongoing</li>
                  <li>• Manifesto Launch - February 2026</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-card rounded-lg border-l-4 border-primary">
              <p className="text-card-foreground font-medium">
                "Every teacher's voice matters. Every vote counts. Together, we will build a KUPPET that truly serves its members."
              </p>
              <p className="text-muted-foreground text-sm mt-1">- Kinoti Mungania, Candidate for Treasurer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground p-6 rounded-xl max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-2">Ready to Make a Difference?</h4>
            <p className="mb-4">Join the movement for transparent, effective teacher welfare management in Meru County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Download Manifesto
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Join Campaign Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
