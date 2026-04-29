"use client";

import { motion } from "framer-motion";
import { hackathons } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Hackathons() {
  return (
    <section className="py-28 px-6 bg-muted/30">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            Competing & creating
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Hackathons
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {hackathons.map((h, i) => (
            <motion.div
              key={`${h.event}-${h.year}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="h-full"
              >
                <div className="h-full bg-card border border-border/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground leading-snug text-sm">
                        {h.event}
                      </p>
                      <p className="font-mono text-xs text-muted-foreground mt-0.5">
                        {h.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                      {h.githubUrl && (
                        <a
                          href={h.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${h.project} GitHub`}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <GitHubIcon className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {(h.achievement.includes("Runner") ||
                        h.achievement.includes("1st")) && (
                        <Trophy className="h-4 w-4 text-amber-400" />
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="font-serif text-base font-medium text-foreground">
                      {h.project}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {h.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Badge
                      variant="secondary"
                      className={`rounded-full text-xs font-medium ${
                        h.achievement.includes("Runner") ||
                        h.achievement.includes("1st")
                          ? "bg-accent2/30 text-foreground border-accent2/40"
                          : "bg-muted text-muted-foreground border-border/60"
                      }`}
                    >
                      {h.achievement}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
