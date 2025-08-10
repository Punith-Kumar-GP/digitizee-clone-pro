import React from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const dataCards = [
  {
    id: 1,
    icon: "💻",
    title: "Technology Decision Makers",
    description: "C-level and VP-level technology decision makers across North America",
    records: "2.5M+",
    updated: "Monthly",
    geography: "North America",
    category: "Technology",
    jobTitles: ["CEO", "CTO", "VP Technology", "+1 more"]
  },
  {
    id: 2,
    icon: "🏥",
    title: "Healthcare Professionals",
    description: "Doctors, nurses, and healthcare decision makers worldwide",
    records: "1.8M+",
    updated: "Quarterly",
    geography: "Global",
    category: "Healthcare",
    jobTitles: ["CEO", "CFO", "Operations Manager", "+1 more"]
  },
  {
    id: 3,
    icon: "💰",
    title: "Financial Services Leaders",
    description: "Banking, insurance, and financial services decision makers",
    records: "900K+",
    updated: "Monthly",
    geography: "Europe",
    category: "Finance",
    jobTitles: ["CEO", "CFO", "VP Sales", "+1 more"]
  },
  {
    "id": 4,
    "icon": "🏭",
    "title": "Manufacturing Executives",
    "description": "Manufacturing industry executives and operations managers",
    "records": "1.2M+",
    "updated": "Bi-monthly",
    "geography": "Asia Pacific",
    "category": "Manufacturing",
    "jobTitles": ["CEO", "Operations Manager", "Project Manager", "+1 more"]
  },
  {
    "id": 5,
    "icon": "🛍️",
    "title": "Retail & E-commerce",
    "description": "Retail and e-commerce professionals worldwide",
    "records": "3.1M+",
    "updated": "Weekly",
    "geography": "Global",
    "category": "Retail",
    "jobTitles": ["CEO", "VP Marketing", "Sales Manager", "+1 more"]
  },
  {
    "id": 6,
    "icon": "🎓",
    "title": "Education Leaders",
    "description": "University administrators, K-12 principals, and education decision makers",
    "records": "750K+",
    "updated": "Quarterly",
    "geography": "North America",
    "category": "Education",
    "jobTitles": ["CEO", "HR Director", "Operations Manager", "+1 more"]
  },
  {
    "id": 7,
    "icon": "🏠",
    "title": "Real Estate Professionals",
    "description": "Real estate agents, brokers, and property managers",
    "records": "650K+",
    "updated": "Monthly",
    "geography": "North America",
    "category": "Real Estate",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "Sales Manager", "Operations Manager", "+1 more"]
  },
  {
    "id": 8,
    "icon": "🚗",
    "title": "Automotive Industry Leaders",
    "description": "Automotive manufacturers, dealers, and service providers",
    "records": "420K+",
    "updated": "Bi-monthly",
    "geography": "Europe",
    "category": "Automotive",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "VP Sales", "Operations Manager", "+1 more"]
  },
  {
    "id": 9,
    "icon": "⚡",
    "title": "Energy Sector Executives",
    "description": "Oil, gas, renewable energy, and utilities decision makers",
    "records": "380K+",
    "updated": "Quarterly",
    "geography": "Global",
    "category": "Energy",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "CTO", "VP Technology", "+1 more"]
  },
  {
    "id": 10,
    "icon": "📺",
    "title": "Media & Entertainment",
    "description": "Media companies, entertainment industry professionals",
    "records": "290K+",
    "updated": "Monthly",
    "geography": "North America",
    "category": "Media",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "VP Marketing", "Marketing Manager", "+1 more"]
  },
  {
    "id": 11,
    "icon": "⚖️",
    "title": "Legal Professionals",
    "description": "Lawyers, law firms, and legal department heads",
    "records": "180K+",
    "updated": "Quarterly",
    "geography": "United Kingdom",
    "category": "Legal",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "CFO", "HR Director", "+1 more"]
  },
  {
    "id": 12,
    "icon": "💻",
    "title": "IT Decision Makers Europe",
    "description": "European IT managers, CTOs, and technology consultants",
    "records": "1.8M+",
    "updated": "Monthly",
    "geography": "Europe",
    "category": "Technology",
    "sampleAvailable": true,
    "jobTitles": ["CTO", "VP Technology", "Director IT", "+1 more"]
  },
  {
    "id": 13,
    "icon": "🩺",
    "title": "Healthcare Asia Pacific",
    "description": "Healthcare professionals across Asia Pacific region",
    "records": "2.2M+",
    "updated": "Quarterly",
    "geography": "Asia Pacific",
    "category": "Healthcare",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "CFO", "Operations Manager", "+1 more"]
  },
  {
    "id": 14,
    "icon": "💰",
    "title": "Finance Latin America",
    "description": "Financial services professionals in Latin America",
    "records": "320K+",
    "updated": "Bi-monthly",
    "geography": "Latin America",
    "category": "Finance",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "CFO", "VP Sales", "+1 more"]
  },
  {
    "id": 15,
    "icon": "🏭",
    "title": "Manufacturing Middle East",
    "description": "Manufacturing executives and engineers in Middle East",
    "records": "150K+",
    "updated": "Quarterly",
    "geography": "Middle East",
    "category": "Manufacturing",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "Operations Manager", "Project Manager", "+1 more"]
  },
  {
    "id": 16,
    "icon": "🛍️",
    "title": "Retail Australia",
    "description": "Australian retail managers and e-commerce professionals",
    "records": "240K+",
    "updated": "Monthly",
    "geography": "Australia",
    "category": "Retail",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "VP Marketing", "Sales Manager", "+1 more"]
  },
  {
    "id": 17,
    "icon": "🎓",
    "title": "Education Africa",
    "description": "Educational leaders and administrators across Africa",
    "records": "95K+",
    "updated": "Quarterly",
    "geography": "Africa",
    "category": "Education",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "HR Director", "Operations Manager", "+1 more"]
  },
  {
    "id": 18,
    "icon": "🏠",
    "title": "Real Estate Europe",
    "description": "European real estate professionals and property developers",
    "records": "820K+",
    "updated": "Monthly",
    "geography": "Europe",
    "category": "Real Estate",
    "sampleAvailable": true,
    "jobTitles": ["CEO", "Sales Manager", "Operations Manager", "+1 more"]
  }
];

export default function DataCardsPage() {
  return (
    <>
    <Navbar/>
    <div className="bg-[#f5f8ff] min-h-screen p-6">
       
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <h1 className="text-2xl font-bold mb-6">
            Available Data Cards ({dataCards.length})
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataCards.map(card => (
              <div key={card.id} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                <div className="text-4xl mb-3">{card.icon}</div>
                <h2 className="font-semibold text-lg">{card.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{card.description}</p>

                <div className="text-sm mb-2">
                  <strong>Records:</strong> <span className="text-blue-600">{card.records}</span>
                </div>
                <div className="text-sm mb-2">
                  <strong>Updated:</strong> {card.updated}
                </div>
                <div className="text-sm mb-2">
                  <strong>Geography:</strong> {card.geography}
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{card.category}</span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Sample Available</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {card.jobTitles.map((title, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {title}
                    </span>
                  ))}
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition">
                  ⬇ Get Free Sample
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">Need Custom Data?</h3>
            <p className="text-sm mt-2">Get a customized dataset tailored to your specific requirements</p>
            <button className="mt-4 w-full bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-100 transition">
              Schedule Consultation
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg">Download All Samples</h3>
            <p className="text-sm mt-2">Get sample files for all available data cards</p>
            <button className="mt-4 w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition">
              ⬇ Download All
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
