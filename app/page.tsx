"use client"

import { useState } from "react"
import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { ArrowRight } from "lucide-react"
import { zhCN } from "@/lib/translations"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  const featuredProjects = [
    {
      id: "neural-network",
      title: zhCN.projects.neuralNetwork.title,
      description: zhCN.projects.neuralNetwork.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "TensorFlow.js"],
    },
    {
      id: "crypto-dashboard",
      title: zhCN.projects.cryptoDashboard.title,
      description: zhCN.projects.cryptoDashboard.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "WebSockets", "Chart.js"],
    },
    {
      id: "ai-chatbot",
      title: zhCN.projects.aiChatbot.title,
      description: zhCN.projects.aiChatbot.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "NLP", "TensorFlow"],
    },
  ]

  const latestPosts = [
    {
      id: "future-of-ai",
      title: zhCN.blog.futureOfAI.title,
      excerpt: zhCN.blog.futureOfAI.excerpt,
      date: "2023-05-15",
      readingTime: zhCN.blog.futureOfAI.readingTime,
    },
  ]

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS"]

  return (
    <div className="space-y-16">
      <section className="py-12">
        <Terminal
          text={zhCN.home.intro}
          typingSpeed={40}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
            >
              {zhCN.home.learnMore} <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{zhCN.home.featuredProjects}</h2>
          <Link href="/projects" className="text-primary hover:underline inline-flex items-center gap-1">
            {zhCN.home.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">{zhCN.home.skills}</h2>
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-button terminal-button-red"></div>
            <div className="terminal-button terminal-button-yellow"></div>
            <div className="terminal-button terminal-button-green"></div>
            <div className="terminal-title">system_specs.sh</div>
          </div>
          <div className="terminal-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-primary">$</span>
                  <span className="text-white">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{zhCN.home.latestBlog}</h2>
          <Link href="/blog" className="text-primary hover:underline inline-flex items-center gap-1">
            {zhCN.home.viewAll} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
  )
}
