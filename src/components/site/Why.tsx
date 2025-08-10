import { ShieldCheck, Globe2, Award, Users } from "lucide-react";

const items = [
  { title: "Enterprise Security", desc: "GDPR, CCPA, HIPAA compliant", icon: ShieldCheck },
  { title: "Global Presence", desc: "8 countries, 24/7 support", icon: Globe2 },
  { title: "14+ Years Experience", desc: "Proven track record", icon: Award },
  { title: "Dedicated Team", desc: "Expert professionals", icon: Users },
];

const Why = () => {
  return (
    <section id="why" className="py-16 bg-muted/40">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Digitizee Agency</h2>
          <p className="text-muted-foreground mt-2">Trusted by enterprises worldwide for our expertise and results</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.title} className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
              <i.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-semibold text-lg">{i.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
