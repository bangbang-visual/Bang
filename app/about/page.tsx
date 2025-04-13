"use client"

import { useState } from "react"
import { Terminal } from "@/components/terminal"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zhCN } from "@/lib/translations"

export default function AboutPage() {
  const [introComplete, setIntroComplete] = useState(false)
  const [bioComplete, setBioComplete] = useState(false)

  const experiences = zhCN.about.experiences

  const skills = [
    { category: zhCN.about.skillsCategories.Languages, items: ["JavaScript", "TypeScript", "Python", "C#"] },
    { category: zhCN.about.skillsCategories.Frontend, items: ["React", "Next.js", "Vue.js", "CSS/SCSS", "Tailwind CSS"] },
    { category: zhCN.about.skillsCategories.Backend, items: ["Node.js", "Express", "Django", "ASP.NET Core"] },
    { category: zhCN.about.skillsCategories.Database, items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: zhCN.about.skillsCategories.DevOps, items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
    { category: zhCN.about.skillsCategories["AI/ML"], items: ["TensorFlow", "PyTorch", "NLP", "Computer Vision"] },
  ]

  return (
    <div className="space-y-16">
      <section>
        <Terminal
          text={zhCN.about.intro}
          typingSpeed={30}
          className="max-w-3xl mx-auto"
          onComplete={() => setIntroComplete(true)}
        />

        {introComplete && (
          <Terminal
            text={zhCN.about.bio}
            typingSpeed={20}
            className="max-w-3xl mx-auto mt-4"
            showPrompt={false}
            onComplete={() => setBioComplete(true)}
          />
        )}
      </section>

      {bioComplete && (
        <>
          <section>
            <h2 className="text-2xl font-bold mb-6">{zhCN.about.experienceTitle}</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="terminal-window">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-button-red"></div>
                    <div className="terminal-button terminal-button-yellow"></div>
                    <div className="terminal-button terminal-button-green"></div>
                    <div className="terminal-title">{exp.company}.sh</div>
                  </div>
                  <div className="terminal-content">
                    <p className="mb-1">
                      <span className="text-primary">$</span> cat job_details.txt
                    </p>
                    <div className="mb-2">
                      <p>
                        <span className="text-primary">title:</span> {exp.title}
                      </p>
                      <p>
                        <span className="text-primary">period:</span> {exp.period}
                      </p>
                      <p>
                        <span className="text-primary">description:</span> {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">{zhCN.about.skillsTitle}</h2>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">skills.sh</div>
              </div>
              <div className="terminal-content">
                <p className="mb-4">
                  <span className="text-primary">$</span> cat /proc/skills
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-primary font-bold">{skillGroup.category}</h3>
                      <ul className="space-y-1">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center gap-2">
                            <span className="text-primary">-</span>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">{zhCN.about.contact.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">contact_form.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ./send_message.sh
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-1">
                        <span className="text-primary">{zhCN.about.contact.form.name}:</span>
                      </label>
                      <Input 
                        id="name" 
                        placeholder={zhCN.about.contact.form.namePlaceholder}
                        className="bg-background border-border" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-1">
                        <span className="text-primary">{zhCN.about.contact.form.email}:</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={zhCN.about.contact.form.emailPlaceholder}
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm mb-1">
                        <span className="text-primary">{zhCN.about.contact.form.message}:</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder={zhCN.about.contact.form.messagePlaceholder}
                        rows={4}
                        className="bg-background border-border"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {zhCN.about.contact.form.submit}
                    </Button>
                  </form>
                </div>
              </div>

              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-button terminal-button-red"></div>
                  <div className="terminal-button terminal-button-yellow"></div>
                  <div className="terminal-button terminal-button-green"></div>
                  <div className="terminal-title">network_connections.sh</div>
                </div>
                <div className="terminal-content">
                  <p className="mb-4">
                    <span className="text-primary">$</span> ifconfig
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-primary">github0:</p>
                      <Link
                        href="https://github.com"
                        className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>github.com/cyber-dev</span>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">twitter0:</p>
                      <Link
                        href="https://twitter.com"
                        className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={16} />
                        <span>@cyber_dev</span>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">linkedin0:</p>
                      <Link
                        href="https://linkedin.com"
                        className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                        <span>linkedin.com/in/cyber-dev</span>
                      </Link>
                    </div>
                    <div>
                      <p className="mb-1 text-primary">email0:</p>
                      <Link
                        href="mailto:contact@cyber-dev.com"
                        className="inline-flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <Mail size={16} />
                        <span>contact@cyber-dev.com</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
