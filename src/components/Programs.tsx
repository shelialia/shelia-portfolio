"use client";

import { motion } from "framer-motion";
import { programs } from "@/lib/data";

export function Programs() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-3">
            Selective programs
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Programs Attended
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-3">
          {programs.map((p, i) => (
            <motion.div
              key={`${p.name}-${p.year}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl px-5 py-4 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground text-sm leading-snug">
                    {p.name}
                    {p.track && (
                      <span className="text-muted-foreground font-normal">
                        {" "}— {p.track}
                      </span>
                    )}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    {p.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
