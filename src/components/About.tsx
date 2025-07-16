
import { GraduationCap, Award, Heart, MapPin, Briefcase, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            About Kinoti Mungania
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated educator and financial leader committed to serving the teachers of Meru County
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <GraduationCap className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Educational Leadership</h3>
                <p className="text-muted-foreground">
                  Bachelor of Education from Kenyatta University, with over 15 years of experience in the education sector serving in various capacities across Meru County schools.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Financial Expertise</h3>
                <p className="text-muted-foreground">
                  Certified Financial Controller with CPA(K) qualification. Currently serving as Financial Controller at Meru County Government, managing multi-million budgets with proven track record of prudent financial management.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Community Service</h3>
                <p className="text-muted-foreground">
                  Active KUPPET member since 2008, served as Branch Secretary (2018-2022), and chairman of various teacher welfare committees. Passionate advocate for teacher rights and welfare.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Local Knowledge</h3>
                <p className="text-muted-foreground">
                  Born and raised in Meru County, with deep understanding of local challenges facing teachers. Married with three children, all products of public education system.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary to-accent/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">My Vision</h3>
            <p className="text-card-foreground leading-relaxed mb-6">
              "To transform KUPPET Meru Branch into a model of excellence where every teacher feels supported, valued, and empowered. Through transparent financial management and comprehensive welfare programs, we will build a stronger future for our educational community."
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Passionate about teacher welfare</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Proven financial management skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-card-foreground">Committed to transparency</span>
              </div>
            </div>
            
            <div className="border-l-4 border-primary pl-4">
              <p className="text-muted-foreground italic">
                "Together, we will ensure that no teacher faces challenges alone, and every educator in Meru County thrives with dignity and support."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Kinoti Mungania</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
