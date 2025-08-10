import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand2 to-brand" />
          <span className="text-lg font-extrabold tracking-tight">Digitizee</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#home" className="story-link">Home</a>
          <a href="#services" className="story-link">Services</a>
          <a href="#why" className="story-link">Why Us</a>
          <a href="#process" className="story-link">Process</a>
          <a href="#contact" className="story-link">Contact</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline">Data Card</Button>
          <Button variant="hero">Get Free Sample</Button>
        </div>
        <Button variant="ghost" className="md:hidden" aria-label="Open Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
