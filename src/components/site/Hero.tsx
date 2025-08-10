import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl bg-gradient-to-br from-brand/30 to-brand2/30" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-brand2/30 to-brand/30" />
      </div>
      <div className="container mx-auto relative">
        <div className="mx-auto max-w-3xl text-center animate-enter">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase mb-3">B2B Growth Partner</span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Turn Verified B2B Data into Unbeatable Campaigns
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your business with premium B2B data, intelligent automation, and results‑driven digital marketing solutions.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="outline" size="lg">Data Card</Button>
            <Button variant="hero" size="lg">Get Free Sample</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
