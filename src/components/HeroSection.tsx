import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import heroImage from "@/assets/cobalt-mining-hero.jpg";
const HeroSection = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const featuredPosts = blogPosts.slice(0, 3); // Show first 3 posts in rotation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPostIndex(prev => (prev + 1) % featuredPosts.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);
  const currentPost = featuredPosts[currentPostIndex];
  return <section className="relative py-20 gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }}></div>
      <div className="absolute inset-0 shimmer opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-cobalt-light bg-clip-text text-transparent">The Cobalt Crisis in Congo</h1>
          <p className="mb-8 text-sm text-slate-400">While it's a lesser known event, it is still ongoing in the Republic of Congo.</p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm border-primary/20 shadow-cobalt">
          
        </Card>
      </div>
    </section>;
};
export default HeroSection;