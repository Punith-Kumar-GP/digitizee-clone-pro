import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand2 to-brand" />
            <span className="font-bold">Digitizee</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Digitizee (Clone). All rights reserved.</p>
          <Button variant="hero">Schedule Consultation</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
