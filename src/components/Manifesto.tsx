
import { 
  Shield, 
  Users, 
  Globe, 
  Building, 
  HeartHandshake, 
  Coins, 
  BookOpen, 
  TrendingUp 
} from "lucide-react";

const manifestoPoints = [
  {
    icon: Shield,
    title: "Comprehensive Teachers Welfare Program",
    description: "Establish a robust welfare system addressing teacher needs beyond burial assistance, including support for long-term illness and education for children of deceased teachers.",
    color: "bg-primary/20 text-primary"
  },
  {
    icon: Users,
    title: "Democratic Welfare Committee",
    description: "Form a teachers welfare committee with elected members from each sub-county, ensuring fair representation and democratic oversight of welfare funds.",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Globe,
    title: "Digital Branch Website",
    description: "Create a Meru County KUPPET branch website where teachers can access information and address concerns with just a click, ensuring prompt communication.",
    color: "bg-secondary/40 text-card-foreground"
  },
  {
    icon: Building,
    title: "Junior Secondary School Independence",
    description: "Collaborate with the national office to ensure junior secondary schools gain independence and autonomy, empowering local educational governance.",
    color: "bg-primary/30 text-primary"
  },
  {
    icon: HeartHandshake,
    title: "Seamless Teacher Insurance",
    description: "Ensure teachers can access medical treatment without bureaucratic delays, working with the national office to streamline insurance processes.",
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    icon: Coins,
    title: "Strategic Asset Acquisition",
    description: "Implement prudent financial management to acquire valuable assets like a branch bus and properties for offices and rental income generation.",
    color: "bg-secondary/50 text-card-foreground"
  },
  {
    icon: BookOpen,
    title: "Professional Development Workshops",
    description: "Conduct regular teacher workshops and inductions focusing on financial management skills and teachers' rights education.",
    color: "bg-primary/25 text-primary"
  },
  {
    icon: TrendingUp,
    title: "Salary and Promotion Advocacy",
    description: "Work with the national office to advocate for transparent teacher promotions, improved basic salaries, and enhanced allowances.",
    color: "bg-accent/25 text-accent-foreground"
  }
];

export const Manifesto = () => {
  return (
    <section id="manifesto" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Manifesto for Change
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eight transformative pillars that will revolutionize teacher welfare and financial management in Meru County
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${point.color} flex-shrink-0`}>
                  <point.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary text-primary-foreground p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
            <p className="text-xl mb-6">
              Together, we will build a KUPPET Meru Branch that truly serves its members
            </p>
            <p className="text-primary-foreground/80">
              Vote Kinoti Mungania for Treasurer - KUPPET Elections 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
