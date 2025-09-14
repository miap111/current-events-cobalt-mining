import type { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "[Your First Article Title Here]",
    excerpt: "[Write your article summary here - 2-3 sentences about what you discovered in your research]",
    content: `
      <p>[Write your full article content here]</p>
      
      <div style="border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; background: #f9f9f9;">
        <h4>Article Embed Area</h4>
        <p>Paste your external article link, iframe, or embedded content here</p>
      </div>
      
      <p>[Add more of your analysis and findings here]</p>
    `,
    date: "[Date]",
    readTime: "[X min read]",
    category: "[Your Category]",
    tags: ["[tag1]", "[tag2]", "[tag3]"],
    externalLink: "[Your source article URL here]",
    sources: [
      "[Source 1]",
      "[Source 2]", 
      "[Source 3]"
    ]
  },
  {
    id: "post-2", 
    title: "[Your Second Article Title Here]",
    excerpt: "[Write your second article summary here - explain what this piece covers and why it's important to your research]",
    content: `
      <p>[Your research findings and analysis go here]</p>
      
      <div style="border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; background: #f9f9f9;">
        <h4>Article Embed Area</h4>
        <p>Embed your source article, video, or other media here</p>
      </div>
      
      <p>[Continue your analysis and conclusions here]</p>
    `,
    date: "[Date]",
    readTime: "[X min read]", 
    category: "[Your Category]",
    tags: ["[tag1]", "[tag2]", "[tag3]"],
    externalLink: "[Your source article URL here]",
    sources: [
      "[Source 1]",
      "[Source 2]",
      "[Source 3]"
    ]
  },
  {
    id: "post-3",
    title: "[Your Third Article Title Here]", 
    excerpt: "[Describe what this article covers and what research or sources you used]",
    content: `
      <p>[Your third article content here]</p>
      
      <div style="border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; background: #f9f9f9;">
        <h4>Article Embed Area</h4>
        <p>Place your embedded content, links, or media here</p>
      </div>
      
      <p>[Add your analysis and conclusions]</p>
    `,
    date: "[Date]",
    readTime: "[X min read]",
    category: "[Your Category]", 
    tags: ["[tag1]", "[tag2]", "[tag3]"],
    externalLink: "[Your source article URL here]",
    sources: [
      "[Source 1]",
      "[Source 2]",
      "[Source 3]"
    ]
  },
  {
    id: "post-4",
    title: "[Your Fourth Article Title Here]",
    excerpt: "[Write about what this article explores and what you learned from your research]", 
    content: `
      <p>[Your fourth article content]</p>
      
      <div style="border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; background: #f9f9f9;">
        <h4>Article Embed Area</h4>
        <p>Add your source materials, embedded articles, or media here</p>
      </div>
      
      <p>[Your analysis and findings]</p>
    `,
    date: "[Date]",
    readTime: "[X min read]",
    category: "[Your Category]",
    tags: ["[tag1]", "[tag2]", "[tag3]"],
    externalLink: "[Your source article URL here]",
    sources: [
      "[Source 1]", 
      "[Source 2]",
      "[Source 3]"
    ]
  },
  {
    id: "post-5", 
    title: "[Your Fifth Article Title Here]",
    excerpt: "[Summarize what this final article covers and what conclusions you drew]",
    content: `
      <p>[Your fifth article content]</p>
      
      <div style="border: 2px dashed #ccc; padding: 20px; margin: 20px 0; text-align: center; background: #f9f9f9;">
        <h4>Article Embed Area</h4>
        <p>Embed your final source article or supporting materials here</p>
      </div>
      
      <p>[Your final analysis and conclusions]</p>
    `,
    date: "[Date]",
    readTime: "[X min read]", 
    category: "[Your Category]",
    tags: ["[tag1]", "[tag2]", "[tag3]"],
    externalLink: "[Your source article URL here]",
    sources: [
      "[Source 1]",
      "[Source 2]", 
      "[Source 3]"
    ]
  }
];