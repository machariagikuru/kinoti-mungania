
import { 
  Shield, 
  Users, 
  Globe, 
  Building, 
  HeartHandshake, 
  Coins, 
  BookOpen, 
  TrendingUp,
  CheckCircle 
} from "lucide-react";

const manifestoPoints = [
  {
    icon: Shield,
    title: "Comprehensive Teachers Welfare Program",
    description: "Establish a robust welfare system addressing teacher needs beyond burial assistance, including support for long-term illness, emergency medical care, and education scholarships for children of deceased teachers.",
    impact: "Benefiting 3,500+ teachers county-wide",
    color: "bg-primary/20 text-primary"
  },
  {
    icon: Users,
    title: "Democratic Welfare Committee",
    description: "Form a teachers welfare committee with elected members from each of the 9 sub-counties, ensuring fair representation, democratic oversight of welfare funds, and transparent decision-making processes.",
    impact: "9 elected representatives, one per sub-county",
    color: "bg-accent/20 text-accent-foreground"
  },
  {
    icon: Globe,
    title: "Digital Branch Website & Communication Hub",
    description: "Create a comprehensive Meru County KUPPET branch website where teachers can access information, file complaints, track welfare claims, and address concerns with just a click, ensuring prompt 24/7 communication.",
    impact: "Real-time access for all members",
    color: "bg-secondary/40 text-card-foreground"
  },
  {
    icon: Building,
    title: "Junior Secondary School Independence",
    description: "Collaborate with the national office to ensure junior secondary schools gain full independence and autonomy from primary schools, with dedicated leadership structures and resource allocation.",
    impact: "150+ junior secondary schools affected",
    color: "bg-primary/30 text-primary"
  },
  {
    icon: HeartHandshake,
    title: "Seamless Teacher Insurance Access",
    description: "Eliminate bureaucratic delays in accessing medical treatment. Teachers will receive immediate care without calling KUPPET or insurance officials. Streamlined processes with Minet AON and other providers.",
    impact: "Zero-delay medical access for all members",
    color: "bg-accent/30 text-accent-foreground"
  },
  {
    icon: Coins,
    title: "Strategic Asset Acquisition & Growth",
    description: "Implement prudent financial management to acquire valuable assets including: branch transportation bus, office buildings, rental properties for income generation, and emergency fund reserves.",
    impact: "Building sustainable revenue streams",
    color: "bg-secondary/50 text-card-foreground"
  },
  {
    icon: BookOpen,
    title: "Continuous Professional Development",
    description: "Conduct quarterly teacher workshops and annual inductions focusing on financial literacy, teachers' rights education, legal protection awareness, and career advancement opportunities.",
    impact: "4 workshops per year, county-wide reach",
    color: "bg-primary/25 text-primary"
  },
  {
    icon: TrendingUp,
    title: "Salary & Career Advancement Advocacy",
    description: "Work aggressively with the national office to advocate for transparent teacher promotions, improved basic salaries, enhanced allowances, and fair career progression for all teachers.",
    impact: "Fighting for better compensation for all",
    color: "bg-accent/25 text-accent-foreground"
  }
];

export const Manifesto = () => {
  return (
    <section id="manifesto" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My 8-Point Manifesto for Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Comprehensive reforms that will revolutionize teacher welfare and financial management in Meru County
          </p>
          <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
            <CheckCircle className="h-5 w-5" />
            <span>Evidence-Based Solutions</span>
            <span className="mx-2">•</span>
            <CheckCircle className="h-5 w-5" />
            <span>Financially Sustainable</span>
            <span className="mx-2">•</span>
            <CheckCircle className="h-5 w-5" />
            <span>Teacher-Centered</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {manifestoPoints.map((point, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${point.color} flex-shrink-0`}>
                  <point.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {point.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {point.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-primary text-primary-foreground p-8 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Why This Manifesto Matters</h3>
            <p className="text-xl mb-6">
              These aren't just promises – they're commitments backed by experience, expertise, and a proven track record of financial management excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">3,500+</div>
                <div className="text-primary-foreground/80">Teachers to benefit</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">9</div>
                <div className="text-primary-foreground/80">Sub-counties covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-primary-foreground/80">Years experience</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-card-foreground mb-4 text-center">My Commitment to You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-card-foreground">Transparency Guarantee:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quarterly financial reports published online</li>
                  <li>• Open-door policy for member inquiries</li>
                  <li>• Annual general meetings with full disclosure</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-card-foreground">Accountability Measures:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Monthly progress updates on all initiatives</li>
                  <li>• Independent audit of all welfare funds</li>
                  <li>• Member feedback systems and response protocols</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-accent/20 text-accent-foreground p-6 rounded-xl max-w-2xl mx-auto">
              <h4 className="text-xl font-bold mb-3">Ready to Transform KUPPET Meru?</h4>
              <p className="mb-4">
                Vote Kinoti Mungania for Treasurer - KUPPET Elections 2026
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                "Together, we will build a KUPPET that truly serves its members with dignity, transparency, and excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
