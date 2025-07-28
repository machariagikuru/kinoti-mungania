// components/Manifesto.tsx

import {
  Shield,
  Users,
  Globe,
  Building,
  HeartHandshake,
  Coins,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Vote, // Imported Vote icon
} from "lucide-react";

// Define a type for your ManifestoPoint to improve type safety and clarity
interface ManifestoDescription {
  intro?: string;
  bullets?: string[];
}

interface ManifestoPoint {
  icon: React.ElementType; // Lucide icons are React components
  title: string;
  description: ManifestoDescription; // Now always an object
  impact: string;
  color: string;
}

const manifestoPoints: ManifestoPoint[] = [
  {
    icon: Shield,
    title: "Teacher Welfare Beyond the Grave",
    description: {
      intro: "Many teachers only receive assistance from the union during funerals, leaving long-term illnesses and family emergencies unaddressed. I will change this by establishing a broader welfare scheme that supports teachers during illness and ensures children left behind are not forgotten.",
      bullets: [
        "Support for long-term illnesses",
        "Education support for children of deceased teachers",
        "Emergency relief for distressed members"
      ],
    },
    impact: "7,000+ Meru County teachers will benefit",
    color: "bg-primary/20 text-primary",
  },
  {
    icon: Users,
    title: "Inclusive Welfare Committee for Transparency",
    description: {
      intro: "Teachers deserve reliable support in times of need. I’ll establish a transparent Welfare committee with elected reps from every sub-county in Meru to offer real help during illness and loss, and a digital platform for easy access and accountability.",
      bullets: [
        "1 elected representative per sub-county",
        "Accountable management of welfare contributions",
      ],
    },
    impact: "16 elected reps, 1 per sub-county",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    icon: Globe,
    title: "Meru KUPPET Digital Platform",
    description: {
      intro: "Important updates and services are hard to find or delayed, keeping members in the dark. I will launch a Meru KUPPET website to ensure every teacher can access updates, welfare details, and union services with ease—from anywhere, anytime.",
      bullets: [
        "Mobile-friendly interface",
        "Digitized welfare applications",
        "Track welfare claims online",
        "Secure document and claims portal",
        "Real-time access to updates",
      ],
    },
    impact: "24/7 access to union services",
    color: "bg-secondary/40 text-card-foreground",
  },
  {
    icon: Coins,
    title: "Prudent Financial Leadership & Assets",
    description: {
      intro: "Union funds often lack accountability and lasting impact. I’ll enforce financial transparency and invest in assets—land, rentals, and a branch bus—to build long-term value for KUPPET Meru members.",
      bullets: [
        "Regular financial audits",
        "Transparent reporting",
        "Provide monthly financial reports to members",
        "Acquire land for KUPPET Meru Branch offices",
        "Build rental properties for long-term financial sustainability",
        "Buy KUPPET Meru branch bus for mobility and members functions",
      ],
    },
    impact: "Building long-term branch value",
    color: "bg-secondary/50 text-card-foreground",
  },
  {
    icon: HeartHandshake,
    title: "Fight for Medical Insurance that works",
    description: {
      intro: "Teachers often struggle to access medical care through Minet/AON, facing delays, unanswered calls, and rejected approvals. I will work with the national office to make insurance access seamless—so teachers get treatment without chasing people for help.",
      bullets: [
        "Regular audits of medical providers",
        "Wider acceptance of teachers' cover in public and private hospitals",
        "Automatic approvals for critical treatments",
        "No more bureaucratic delays",
      ],
    },
    impact: "Faster, seamless healthcare access",
    color: "bg-accent/30 text-accent-foreground",
  },
  {
    icon: TrendingUp,
    title: "Transparent Promotions & Fair Compensation",
    description: {
      intro: "Teachers face delayed promotions and stagnant pay. I’ll coordinate with KUPPET national office to fight for streamlined promotions, regular salary reviews, and improved allowances—ensuring fair, timely compensation for all teachers.",
      bullets: [
        "Streamlined promotion processes",
        "Regular salary reviews",
        "Enhanced commuter and house allowances",
        "Improved terms for all teachers",
      ],
    },
    impact: "Better pay & career progression",
    color: "bg-accent/25 text-accent-foreground",
  },
  {
    icon: BookOpen,
    title: "Regular Financial & Rights Workshops for Teachers",
    description: {
      intro: "Teachers are often taken advantage of due to limited knowledge of their rights and finances. I’ll hold regular workshops on financial literacy, rights awareness, and empowerment so every teacher becomes informed, confident, and harder to exploit.",
      bullets: [
        "Regular financial literacy workshops",
        "Teachers' rights awareness sessions",
        "Empowerment seminars on savings and investments",
        "Access to expert speakers and resources",
      ],
    },
    impact: "Empowering 7000+ teachers with knowledge",
    color: "bg-primary/25 text-primary",
  },
  {
    icon: Building,
    title: "Stronger, Independent Junior Secondary Schools",
    description: {
      intro: "Junior Secondary Schools remain underfunded and poorly structured, limiting their growth and identity. I will push in coordination with the national office for full autonomy, proper staffing, distinct boards, and the resources JSS schools need to thrive independently.",
      bullets: [
        "Full autonomy for JSS schools",
        "Adequate staffing and funding",
        "Distinct boards for JSS schools",
        "Advocacy for better resources and support",
      ],
    },
    impact: "Fight for a thriving JSS education system",
    color: "bg-primary/30 text-primary",
  },
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
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${point.color} flex-shrink-0`}>
                  <point.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {point.title}
                  </h3>
                  {/* Conditional rendering for description based on intro and bullets */}
                  {point.description.intro && (
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      {point.description.intro}
                    </p>
                  )}
                  {point.description.bullets && point.description.bullets.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-3">
                      {point.description.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
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
                <div className="text-3xl font-bold mb-2">7,000+</div>
                <div className="text-primary-foreground/80">Teachers to benefit across Meru County</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">16</div>
                <div className="text-primary-foreground/80">Meru Sub-counties covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">20+</div>
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
                  <li>• Monthly financial reports published online</li>
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
            <div
              className="bg-primary text-primary-foreground p-6 rounded-xl max-w-2xl mx-auto
               transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <h4 className="text-xl font-bold mb-3">Ready to Transform KUPPET Meru?</h4>
              <p className="mb-4 flex items-center justify-center text-xl font-bold">
                <Vote className="h-10 w-10 mr-3 text-primary-foreground" />
                Vote Kinoti Mungania for Treasurer – KUPPET Elections 2026
              </p>
              <p className="text-sm text-primary-foreground font-medium">
                "Together, we will build a KUPPET that truly serves its members with dignity, transparency, and excellence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};