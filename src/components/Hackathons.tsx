"use client";

import { motion } from "framer-motion";
import { hackathons } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

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
                    {h.achievement.includes("Runner") ||
                    h.achievement.includes("1st") ? (
                      <Trophy className="h-4 w-4 text-accent-2 flex-shrink-0 mt-0.5" />
                    ) : null}
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
