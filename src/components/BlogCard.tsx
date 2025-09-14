import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-cobalt group">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            {post.category}
          </Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </div>
        </div>
        
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
          
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" className="hover:bg-primary/10">
              Read More
            </Button>
            {post.externalLink && (
              <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;