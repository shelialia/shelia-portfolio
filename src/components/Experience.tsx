"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-muted/30">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            Where I&apos;ve worked
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 md:gap-10"
              >
                {/* Dot + initial badge */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 mt-1">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-foreground font-mono font-semibold text-xs flex-shrink-0 border-2 border-background shadow-sm z-10"
                    style={{ backgroundColor: exp.color }}
                  >
                    {exp.initials}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl border border-border/50 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {exp.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full self-start whitespace-nowrap">
                      {exp.dateRange}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
