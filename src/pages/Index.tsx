import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Why from "@/components/site/Why";
import Process from "@/components/site/Process";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Why />
        <Process />
      </main>
      <Footer />

      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digitizee Agency (Clone)",
        "url": window.location.origin,
        "sameAs": [
          "https://digitizeeagency.com/"
        ]
      }) }} />
    </div>
  );
};

export default Index;
