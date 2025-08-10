import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";


const servicesData = [
  {
    category: "Data Services",
    title: "B2B Data Sales",
    description: "Verified, targeted B2B data with 95% accuracy...",
    features: [
      "95% data accuracy guarantee",
      "Real-time verification",
      "Custom segmentation",
      "GDPR/CCPA compliant",
      "20+ industry verticals",
      "Dedicated account manager"
    ]
  },
  {
    category: "Marketing",
    title: "Email Marketing",
    description: "Strategic email campaigns with creative design...",
    features: [
      "Strategic campaign planning",
      "Creative design & templates",
      "Automation & drip sequences",
      "A/B testing & optimization",
      "Deliverability expertise",
      "Real-time analytics"
    ]
  },
  {
    category: "Data Services",
    title: "Data Appending & Cleanse",
    description: "Enrich and validate your existing data...",
    features: [
      "Firmographics enrichment",
      "Real-time API access",
      "95%+ match rates",
      "Deduplication services",
      "Data standardization",
      "Custom field mapping"
    ]
  },
  {
    category: "Marketing",
    title: "Digital Marketing & Web Development",
    description: "Comprehensive digital marketing solutions...",
    features: [
      "SEO & content marketing",
      "PPC & ads management",
      "Social media strategy",
      "Custom web development",
      "E-commerce solutions",
      "Analytics & reporting"
    ]
  },
  {
    category: "Development",
    title: "Mobile Apps Development",
    description: "Native and cross-platform mobile applications...",
    features: [
      "iOS & Android native",
      "Cross-platform solutions",
      "UI/UX design",
      "App store optimization",
      "Maintenance & support",
      "Performance monitoring"
    ]
  },
  {
    category: "Development",
    title: "Custom Tools & Automations",
    description: "Bespoke software solutions including CRM...",
    features: [
      "CRM implementations",
      "Workflow automations",
      "Custom dashboards",
      "API integrations",
      "Cloud solutions",
      "DevOps & monitoring"
    ]
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices =
    selectedCategory === "All Services"
      ? servicesData
      : servicesData.filter(s => s.category === selectedCategory);

  return (
    <>
    <Navbar/>
    <div className="p-8">
      {/* Category Buttons */}
      <div className="flex gap-4 mb-8">
        {["All Services", "Data Services", "Marketing", "Development"].map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredServices.map((service, idx) => (
          <div
            key={idx}
            className="border rounded-xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              {service.features.map((f, i) => (
                <li key={i}>✅ {f}</li>
              ))}
            </ul>
            <Button className="w-full">Learn More →</Button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
