import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, Mail, Rss, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Cobalt Crisis</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Investigating the hidden costs of our digital age through in-depth reporting 
              on cobalt mining and its impact on communities in the Democratic Republic of Congo.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Mail className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <Rss className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Investigations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/child-labor" className="text-muted-foreground hover:text-primary transition-colors">
                  Child Labor Reports
                </Link>
              </li>
              <li>
                <Link to="/environmental" className="text-muted-foreground hover:text-primary transition-colors">
                  Environmental Impact
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Accountability
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-muted-foreground hover:text-primary transition-colors">
                  Public Health Crisis
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sources" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  Source Documents
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Methodology
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Research Partners
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support Our Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Cobalt Crisis Investigation. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/ethics" className="hover:text-primary transition-colors">
              Editorial Ethics
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;