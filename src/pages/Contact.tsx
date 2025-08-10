import { useState } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // Add API call or email logic here
  };

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-3">
            Get In Touch
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to transform your business with our data-driven solutions?
            Let's discuss how we can help you achieve your goals.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
              <h2 className="text-blue-600 font-semibold mb-2">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    className="border rounded-md p-2 w-full"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name="service"
                  placeholder="Service Interest"
                  value={form.service}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow p-6">
                <h2 className="text-blue-600 font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="text-purple-600 w-5 h-5 mt-1" />
                  <p className="text-sm text-gray-700">
                    3076, Diamond Street, St New York 11222, United States
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Mail className="text-purple-600 w-5 h-5 mt-1" />
                  <p className="text-sm text-gray-700">
                    reach@digitizeagency.com
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-purple-600 w-5 h-5 mt-1" />
                  <p className="text-sm text-gray-700">
                    Mon - Fri: 9:00 AM - 6:00 PM (EST) <br /> Sat: 10:00 AM - 4:00 PM (EST)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm mb-4">
                  Our team is available to help you with urgent inquiries
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Email Us Now
                  </Button>
                  <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                    Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
