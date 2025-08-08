// components/Manifesto.tsx

import {
  Award,
  Users2,
  Globe2,
  Banknote,
  Heart,
  PiggyBank,
  GraduationCap,
  Building2,
  ShieldCheck,
  Vote,
  CheckCircle2,
} from "lucide-react";

// Manifesto types
interface ManifestoDescription {
  intro?: string;
  bullets?: string[];
}

interface ManifestoPoint {
  icon: React.ElementType;
  title: string;
  description: ManifestoDescription;
  impact: string;
  color: string;
  iconBg: string;
  cardBg: string;
  border: string;
}

const manifestoPoints: ManifestoPoint[] = [
  {
    icon: ShieldCheck,
    title: "Comprehensive Teacher Welfare",
    description: {
      intro: "Support for teachers in illness, emergencies, and beyond. No teacher or family left behind.",
      bullets: [
        "Long-term illness support",
        "Education for children of deceased teachers",
        "Emergency relief for families",
      ],
    },
    impact: "7,000+ teachers protected",
    color: "text-primary",
    iconBg: "bg-primary/90",
    cardBg: "bg-gradient-to-br from-primary/10 via-white to-primary/5",
    border: "border-primary",
  },
  {
    icon: Users2,
    title: "Transparent & Inclusive Welfare Committee",
    description: {
      intro: "A welfare committee with elected reps from every sub-county, ensuring accountability and easy access.",
      bullets: [
        "1 rep per sub-county",
        "Digital platform for welfare",
        "Accountable management",
      ],
    },
    impact: "16 sub-counties represented",
    color: "text-accent-foreground",
    iconBg: "bg-accent/80",
    cardBg: "bg-gradient-to-br from-accent/10 via-white to-accent/5",
    border: "border-accent",
  },
  {
    icon: Globe2,
    title: "Digital Union Platform",
    description: {
      intro: "A modern website for updates, welfare, and union services. Accessible anywhere, anytime.",
      bullets: [
        "Mobile-friendly portal",
        "Track welfare claims",
        "Secure document access",
        "Real-time updates",
      ],
    },
    impact: "24/7 access for all teachers",
    color: "text-secondary-foreground",
    iconBg: "bg-secondary/80",
    cardBg: "bg-gradient-to-br from-secondary/10 via-white to-secondary/5",
    border: "border-secondary",
  },
  {
    icon: Banknote,
    title: "Financial Transparency & Asset Growth",
    description: {
      intro: "Transparent management of union funds and investment in assets for lasting value.",
      bullets: [
        "Monthly financial reports",
        "Regular audits",
        "Invest in land, rentals, branch bus",
      ],
    },
    impact: "Long-term financial sustainability",
    color: "text-primary",
    iconBg: "bg-primary/80",
    cardBg: "bg-gradient-to-br from-primary/5 via-white to-primary/10",
    border: "border-primary",
  },
  {
    icon: Heart,
    title: "Effective Medical Insurance",
    description: {
      intro: "Seamless access to medical care. No more delays or rejected approvals.",
      bullets: [
        "Wider hospital acceptance",
        "Automatic approvals",
        "Regular audits of providers",
      ],
    },
    impact: "Faster, reliable healthcare",
    color: "text-accent-foreground",
    iconBg: "bg-accent/90",
    cardBg: "bg-gradient-to-br from-accent/5 via-white to-accent/10",
    border: "border-accent",
  },
  {
    icon: Award,
    title: "Fair Promotions & Compensation",
    description: {
      intro: "Fight for streamlined promotions, regular salary reviews, and improved allowances.",
      bullets: [
        "Streamlined promotion process",
        "Regular salary reviews",
        "Better allowances",
      ],
    },
    impact: "Career growth for all",
    color: "text-primary",
    iconBg: "bg-primary/90",
    cardBg: "bg-gradient-to-br from-primary/10 via-white to-primary/5",
    border: "border-primary",
  },
  {
    icon: GraduationCap,
    title: "Empowerment & Rights Workshops",
    description: {
      intro: "Regular workshops on financial literacy and teachers' rights for empowerment.",
      bullets: [
        "Financial literacy sessions",
        "Rights awareness seminars",
        "Expert speakers",
      ],
    },
    impact: "Empowered, informed teachers",
    color: "text-secondary-foreground",
    iconBg: "bg-secondary/90",
    cardBg: "bg-gradient-to-br from-secondary/10 via-white to-secondary/5",
    border: "border-secondary",
  },
  {
    icon: Building2,
    title: "Autonomous Junior Secondary Schools",
    description: {
      intro: "Push for full autonomy, proper staffing, and resources for thriving JSS schools.",
      bullets: [
        "Full autonomy for JSS",
        "Adequate staffing & funding",
        "Distinct boards",
      ],
    },
    impact: "Thriving JSS education",
    color: "text-primary",
    iconBg: "bg-primary/90",
    cardBg: "bg-gradient-to-br from-primary/5 via-white to-primary/10",
    border: "border-primary",
  },
];

const customStyles = `
@keyframes manifesto-float {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-8px);}
  100% { transform: translateY(0px);}
}
.manifesto-animate-float {
  animation: manifesto-float 2.5s ease-in-out infinite;
}
@keyframes manifesto-fade-in {
  0% { opacity: 0;}
  100% { opacity: 1;}
}
.manifesto-animate-fade-in {
  animation: manifesto-fade-in 1.2s ease-in;
}
@keyframes card-pop {
  0% { transform: scale(0.95);}
  60% { transform: scale(1.03);}
  100% { transform: scale(1);}
}
.manifesto-card-pop {
  animation: card-pop 0.8s cubic-bezier(.17,.67,.83,.67);
}
`;

export const Manifesto = () => {
  return (
    <>
      <style>{customStyles}</style>
      <section
        id="manifesto"
        className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 manifesto-animate-fade-in drop-shadow-lg">
              My 8-Point Manifesto for Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6 manifesto-animate-fade-in">
              Comprehensive reforms that will revolutionize teacher welfare and financial management in Meru County
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary font-semibold manifesto-animate-float">
              <CheckCircle2 className="h-5 w-5" />
              <span>Evidence-Based Solutions</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-5 w-5" />
              <span>Financially Sustainable</span>
              <span className="mx-2">•</span>
              <CheckCircle2 className="h-5 w-5" />
              <span>Teacher-Centered</span>
            </div>
          </div>

          {/* Manifesto Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {manifestoPoints.map((point, index) => (
              <div
                key={index}
                className={`rounded-xl p-7 shadow-lg border-2 ${point.border} hover:shadow-xl transition-all duration-300 hover:scale-[1.03] ${point.cardBg} backdrop-blur-sm manifesto-animate-fade-in manifesto-card-pop`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${point.iconBg} flex-shrink-0 shadow-md manifesto-animate-float border-2 border-white`}>
                    <point.icon className={`h-8 w-8 ${point.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 drop-shadow-sm text-gray-900">{point.title}</h3>
                    {point.description.intro && (
                      <p className="text-gray-700 leading-relaxed mb-2">
                        {point.description.intro}
                      </p>
                    )}
                    {point.description.bullets && point.description.bullets.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 leading-relaxed mb-3">
                        {point.description.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium shadow-sm">
                      {point.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why This Manifesto Matters */}
          <div className="bg-gradient-to-r from-primary/10 via-white to-accent/10 p-10 rounded-xl max-w-4xl mx-auto text-center shadow-xl manifesto-animate-float border-2 border-primary/30 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why This Manifesto Matters</h3>
            <p className="text-xl mb-6 text-gray-700">
              These aren't just promises – they're commitments backed by experience, expertise, and a proven track record of financial management excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2 text-primary">7,000+</div>
                <div className="text-gray-700">Teachers to benefit across Meru County</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-primary">16</div>
                <div className="text-gray-700">Meru Sub-counties covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2 text-primary">20+</div>
                <div className="text-gray-700">Years experience</div>
              </div>
            </div>
          </div>

          {/* About Kinoti Mungania */}
          <div className="bg-white p-10 rounded-xl max-w-5xl mx-auto text-gray-800 shadow-lg border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary text-center">About Kinoti Mungania</h3>
            <p className="text-lg mb-6 text-center font-medium">
              A dedicated educator and financial leader committed to serving the teachers of Meru County
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">Educational Leadership</h4>
                <p>
                  An alumnus of Egerton University, with more than 20 years of dedicated experience in the education sector, having contributed in various leadership roles across schools in Meru County and beyond. Mr. Kinoti Mungania is currently serving as a Mathematics and Physics teacher at Miathene Boys High School.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Financial Expertise</h4>
                <p>
                  Extensive experience in managing and driving the success of private businesses and projects, with a focus on financial strategy, growth, and operational efficiency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Community Service</h4>
                <p>
                  A committed KUPPET member since 2007, I’ve been a strong advocate for teachers' rights. I’ve served in key leadership roles in Meru County, including Science Congress Secretary for the larger Tigania District and Sports Secretary for Tigania East. Currently, I’m the Treasurer for the Meru Spotlight Group and several other teachers' groups.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Local Knowledge</h4>
                <p>
                  Born and raised in Meru County, and having worked here for many years, I have a deep, firsthand understanding of the unique challenges teachers face in the region.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">My Vision</h4>
                <p className="italic">
                  "To transform KUPPET Meru Branch into a model of excellence where every teacher feels supported, valued, and empowered. Through transparent financial management and comprehensive welfare programs, we will build a stronger future for our educational community."
                </p>
              </div>
              <ul className="list-disc pl-5 text-gray-700 mt-4 space-y-2">
                <li>Passionate about teacher welfare</li>
                <li>Proven financial management skills</li>
                <li>Committed to transparency</li>
              </ul>
              <p className="mt-4 italic text-center text-lg font-medium text-primary">
                "Together, we will ensure that no teacher faces challenges alone, and every educator in Meru County thrives with dignity and support."
                <br />– Kinoti Mungania
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
