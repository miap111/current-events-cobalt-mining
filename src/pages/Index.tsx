import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  // Show latest 6 blog posts in grid
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Research Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            [Write a description of your research project here. What are you studying and what questions are you trying to answer?]
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-6 bg-primary/5 rounded-lg border border-primary/20">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Research Notes</h3>
              <p className="text-muted-foreground mb-4 max-w-lg">
                This is your space to add research methodology, data sources, or any additional context about your project.
              </p>
              <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded border-2 border-dashed border-muted-foreground/30">
                [Add your research notes, methodology, or conclusions here]
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
