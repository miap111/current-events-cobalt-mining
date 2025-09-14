import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-primary rounded-lg shadow-cobalt">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Cobalt Crisis</h1>
              <p className="text-xs text-muted-foreground">Current Events Investigation</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/investigations" className="text-foreground hover:text-primary transition-colors">
              Investigations
            </Link>
            <Link to="/impact" className="text-foreground hover:text-primary transition-colors">
              Environmental Impact
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>
          
          <Button variant="default" className="hidden md:block gradient-cobalt shadow-cobalt">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;