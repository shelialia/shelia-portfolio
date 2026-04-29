"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            Things I&apos;ve built
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Projects
          </h2>
        </motion.div>

        <div className="space-y-5">
          {/* Featured projects */}
          {featured.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card className="border-border/50 bg-card shadow-sm hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 px-6 pt-5 pb-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-primary/20 text-foreground border-primary/30 text-xs font-mono rounded-full">
                        ★ Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pt-3 pb-2">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="font-serif text-2xl md:text-3xl text-foreground">
                        {project.name}
                      </CardTitle>
                      <div className="flex gap-2 flex-shrink-0 mt-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} GitHub`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <GitHubIcon className="h-5 w-5" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.name} live demo`}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed mt-2 text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-mono text-xs rounded-full bg-muted text-muted-foreground border border-border/60 px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}

          {/* Regular project grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {rest.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="h-full"
                  >
                    <Card className="h-full border-border/50 bg-card shadow-sm hover:shadow-lg transition-shadow rounded-2xl">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="font-serif text-xl text-foreground">
                            {project.name}
                          </CardTitle>
                          <div className="flex gap-2 flex-shrink-0">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.name} GitHub`}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <GitHubIcon className="h-4 w-4" />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${project.name} live demo`}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                        <CardDescription className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="font-mono text-xs rounded-full bg-muted text-muted-foreground border border-border/60"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
