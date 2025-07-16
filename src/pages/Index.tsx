
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <About />
      <Manifesto />
      <Contact />
    </div>
  );
};

export default Index;
