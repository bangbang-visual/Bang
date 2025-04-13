"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { zhCN } from "@/lib/translations"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "neural-network",
      title: zhCN.projects.neuralNetwork.title,
      description: zhCN.projects.neuralNetwork.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "D3.js", "TensorFlow.js"],
      category: "ai",
    },
    {
      id: "crypto-dashboard",
      title: zhCN.projects.cryptoDashboard.title,
      description: zhCN.projects.cryptoDashboard.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "WebSockets", "Chart.js"],
      category: "web",
    },
    {
      id: "ai-chatbot",
      title: zhCN.projects.aiChatbot.title,
      description: zhCN.projects.aiChatbot.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "NLP", "TensorFlow"],
      category: "ai",
    },
    {
      id: "blockchain-explorer",
      title: zhCN.projects.blockchainExplorer.title,
      description: zhCN.projects.blockchainExplorer.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Ethers.js", "GraphQL"],
      category: "blockchain",
    },
    {
      id: "data-visualization",
      title: zhCN.projects.dataVisualization.title,
      description: zhCN.projects.dataVisualization.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["D3.js", "React", "Node.js"],
      category: "data",
    },
    {
      id: "ar-navigation",
      title: zhCN.projects.arNavigation.title,
      description: zhCN.projects.arNavigation.description,
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Unity", "ARKit", "C#"],
      category: "ar",
    },
  ]

  const categories = [
    { id: "all", name: zhCN.projects.categories.all },
    { id: "web", name: zhCN.projects.categories.web },
    { id: "ai", name: zhCN.projects.categories.ai },
    { id: "blockchain", name: zhCN.projects.categories.blockchain },
    { id: "data", name: zhCN.projects.categories.data },
    { id: "ar", name: zhCN.projects.categories.ar },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> {zhCN.projects.filterPrompt}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}
