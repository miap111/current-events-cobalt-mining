import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Twitter, Mail, Rss, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">[Your Project Name]</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              [Write a brief description of your current events research project here. What topic are you exploring and why is it important?]
            </p>
            <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded border-2 border-dashed border-muted-foreground/30">
              [Add your contact information, additional research notes, or acknowledgments here]
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Project Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-primary transition-colors">
                  Research Articles
                </Link>
              </li>
              <li>
                <Link to="/sources" className="text-muted-foreground hover:text-primary transition-colors">
                  Source Materials
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-muted-foreground hover:text-primary transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/conclusion" className="text-muted-foreground hover:text-primary transition-colors">
                  Conclusions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Additional Resources</h4>
            <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded border-2 border-dashed border-muted-foreground/30">
              [Add links to external resources, bibliography, or additional reading materials here]
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 [Your School/Student Name] - Current Events Research Project</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-muted-foreground">Academic Project</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;