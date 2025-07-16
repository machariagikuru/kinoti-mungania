
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions about my manifesto or want to support the campaign? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <span className="text-slate-700">kinotimungania@kuppet.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <span className="text-slate-700">+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span className="text-slate-700">Meru County, Kenya</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span className="text-slate-700">KUPPET Elections 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">Campaign Updates</h4>
              <p className="text-slate-600 mb-4">
                Stay informed about campaign events, manifesto updates, and election information.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe to Updates
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Support the Campaign</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Volunteer Opportunities</h4>
                <p className="text-slate-600">
                  Join our team of dedicated volunteers helping to spread the message across Meru County.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Spread the Word</h4>
                <p className="text-slate-600">
                  Share our manifesto with fellow teachers and help build support for positive change.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Attend Events</h4>
                <p className="text-slate-600">
                  Participate in campaign rallies, town halls, and community meetings across the county.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-600">
              <p className="text-slate-700 font-medium">
                "Every teacher deserves a voice. Together, we will ensure that voice is heard."
              </p>
              <p className="text-slate-500 text-sm mt-1">- Kinoti Mungania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
