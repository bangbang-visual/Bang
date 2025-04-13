import { BlogCard } from "@/components/blog-card"
import { zhCN } from "@/lib/translations"

export default function BlogPage() {
  const posts = [
    {
      id: "future-of-ai",
      title: zhCN.blog.futureOfAI.title,
      excerpt: zhCN.blog.futureOfAI.excerpt,
      date: "2023-05-15",
      readingTime: zhCN.blog.futureOfAI.readingTime,
    },
    {
      id: "web3-revolution",
      title: zhCN.blog.web3Revolution.title,
      excerpt: zhCN.blog.web3Revolution.excerpt,
      date: "2023-04-22",
      readingTime: zhCN.blog.web3Revolution.readingTime,
    },
    {
      id: "cybersecurity-tips",
      title: zhCN.blog.cybersecurityTips.title,
      excerpt: zhCN.blog.cybersecurityTips.excerpt,
      date: "2023-03-10",
      readingTime: zhCN.blog.cybersecurityTips.readingTime,
    },
    {
      id: "react-performance",
      title: zhCN.blog.reactPerformance.title,
      excerpt: zhCN.blog.reactPerformance.excerpt,
      date: "2023-02-18",
      readingTime: zhCN.blog.reactPerformance.readingTime,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">blog_posts.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> {zhCN.blog.listPrompt}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
