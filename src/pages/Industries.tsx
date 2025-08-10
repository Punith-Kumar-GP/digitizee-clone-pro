import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Navigate, useNavigate } from "react-router-dom";

const industriesData = [
  {
    category: "Technology",
    contacts: "2.5M+",
    cost: "$0.08",
    description: "Software, hardware, and IT services companies",
    features: [
      "CTO/CIO contacts",
      "Developer databases",
      "Tech decision makers",
    ],
    icon: "💻",
  },
  {
    category: "Healthcare",
    contacts: "1.8M+",
    cost: "$0.12",
    description: "Medical professionals and healthcare organizations",
    features: [
      "Physicians & nurses",
      "Hospital administrators",
      "Medical device buyers",
    ],
    icon: "🩺",
  },
  {
    category: "Financial Services",
    contacts: "3.2M+",
    cost: "$0.15",
    description: "Banking, insurance, and investment firms",
    features: [
      "C-suite executives",
      "Investment managers",
      "Compliance officers",
    ],
    icon: "💰",
  },
  {
    category: "Education",
    contacts: "950K+",
    cost: "$0.06",
    description: "Educational institutions and EdTech companies",
    features: [
      "University administrators",
      "K-12 decision makers",
      "EdTech buyers",
    ],
    icon: "🎓",
  },
  {
    category: "Retail & E-commerce",
    contacts: "2.1M+",
    cost: "$0.10",
    description: "Retailers, brands, and e-commerce platforms",
    features: [
      "Retail executives",
      "E-commerce managers",
      "Brand marketers",
    ],
    icon: "🛒",
  },
  {
    category: "Manufacturing",
    contacts: "1.3M+",
    cost: "$0.09",
    description: "Industrial and manufacturing companies",
    features: [
      "Plant managers",
      "Supply chain executives",
      "Procurement specialists",
    ],
    icon: "🏭",
  },
];

export default function Industries() {
  const [selectedCategory, setSelectedCategory] = useState("All Industries");
    const navigate = useNavigate();

  const filteredIndustries =
    selectedCategory === "All Industries"
      ? industriesData
      : industriesData.filter(
          (ind) => ind.category === selectedCategory
        );

  const categories = ["All Industries", ...new Set(industriesData.map((d) => d.category))];

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8 text-blue-600">
          Industry-Specific Data
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
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
          {filteredIndustries.map((industry, idx) => (
            <div
              key={idx}
              className="border rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{industry.icon}</div>
              <h2 className="text-lg font-bold mb-1">{industry.category}</h2>
              <p className="text-sm text-gray-600 mb-4">{industry.description}</p>

              <p className="text-sm font-medium">
                Contacts: <span className="text-blue-600">{industry.contacts}</span>
              </p>
              <p className="text-sm font-medium mb-4">
                Cost per Contact: <span className="text-green-600">{industry.cost}</span>
              </p>

              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                {industry.features.map((f, i) => (
                  <li key={i}>✅ {f}</li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                Book Your Sample
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-xl font-bold mb-4">Get Your Free Sample</h2>
          <p className="mb-6">
            Test our data quality with a free sample from your target industry.
            No commitment required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">
              Book Your Sample
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" onClick={() => navigate("/contact")}>
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
