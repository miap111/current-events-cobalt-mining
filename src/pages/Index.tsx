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
          <h2 className="text-3xl font-bold mb-4">Latest Investigations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our ongoing coverage of cobalt mining's impact on communities, 
            environment, and global supply chains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-muted-foreground mr-4">
              Want to contribute to this investigation?
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                Submit a Tip
              </button>
              <button className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors">
                Support Our Work
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
