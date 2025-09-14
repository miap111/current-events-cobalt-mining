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
      setCurrentPostIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const currentPost = featuredPosts[currentPostIndex];

  return (
    <section className="relative py-20 gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="absolute inset-0 shimmer opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-cobalt-light bg-clip-text text-transparent">
            The Hidden Cost of Our Digital Age
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Investigating the environmental and human impact of cobalt mining in the Democratic Republic of Congo
          </p>
        </div>

        <Card className="max-w-4xl mx-auto bg-card/90 backdrop-blur-sm border-primary/20 shadow-cobalt">
          <CardContent className="p-8">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {featuredPosts.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all ${
                      index === currentPostIndex
                        ? "bg-primary shadow-glow"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                {currentPost.readTime}
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {currentPost.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {currentPost.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="gradient-cobalt shadow-cobalt">
                Read Full Investigation
              </Button>
              {currentPost.externalLink && (
                <Button variant="outline" className="border-primary/50">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Source Article
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;