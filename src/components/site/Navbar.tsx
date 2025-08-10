import { Button } from "@/components/ui/button";
import {  Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand2 to-brand" />
          <span className="text-lg font-extrabold tracking-tight">Digitizee</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
        <Link to="/" className="story-link">Home</Link>
          <Link to="/services" className="story-link">Services</Link>
          <a href="#why" className="story-link">Why Us</a>
          <Link to="/industries" className="story-link">Industries</Link>
          <Link to="/contact" className="story-link">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-3">
           <Button variant="outline" onClick={() => navigate("/data-cards")}>
      Data Card
    </Button>
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
