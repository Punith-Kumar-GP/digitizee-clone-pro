import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Mail, Wand2, LineChart, Smartphone, Wrench } from "lucide-react";

const services = [
  { title: "B2B Data", icon: Database, desc: "Verified • Targeted • Compliant • Results" },
  { title: "Email Marketing", icon: Mail, desc: "Strategic • Creative • Automated • Analytics" },
  { title: "Data Cleanse", icon: Wand2, desc: "Enriched • Validated • Standardized • Accurate" },
  { title: "Digital Marketing", icon: LineChart, desc: "SEO • PPC • Social • Development" },
  { title: "Mobile Apps", icon: Smartphone, desc: "iOS • Android • Cross-Platform • Support" },
  { title: "Custom Tools", icon: Wrench, desc: "CRM • Automation • Analytics • DevOps" },
];

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Services</h2>
          <p className="text-muted-foreground mt-2">Comprehensive solutions designed to accelerate your business growth</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <s.icon className="h-5 w-5 text-primary" /> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
