"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const chips = [
  { label: "🇸🇬 Singapore" },
  { label: "NUS '26" },
  { label: "Hackathon Enthusiast" },
  { label: "✈️ Loves Travelling" },
  { label: "Open Source Curious" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        {/* Label + heading sit above the grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            About me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Building at the intersection of{" "}
            <span className="italic text-primary">craft & code</span>
          </h2>
        </motion.div>

        {/* Grid: paragraph text left, image right — both start at the same level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          {/* Text */}
          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Year 3 Computer Science student at the National University
                of Singapore, graduating December 2026. I love building products
                that people actually use, and I&apos;ve been fascinated by the power
                of AI tools to reshape the way we build — automating workflows
                and accelerating what&apos;s possible, even for developers.
              </p>
              <p>
                I&apos;m currently interning at{" "}
                <span className="text-foreground font-medium">Stripe</span> as
                a Software Engineer under the Cards team. Previously, I interned
                at{" "}
                <span className="text-foreground font-medium">PayPal</span>{" "}
                under the Global Compliance team. Outside of work and school, I
                compete in hackathons and am currently helping organize the{" "}
                <span className="text-foreground font-medium">
                  NUS SoC TIPs Program 2026
                </span>{" "}
                — and somewhere in between, I aspire to build my own startup, a
                tool that would benefit the lives of many people, including
                myself.
              </p>
              <p>
                Looking forward, I am open to full-time developer opportunities
                in Singapore or the United States upon graduation.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {chips.map((chip) => (
                <Badge
                  key={chip.label}
                  variant="secondary"
                  className="rounded-full px-3 py-1 text-sm bg-muted text-muted-foreground border border-border/60"
                >
                  {chip.label}
                </Badge>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end gap-3"
          >
            <div className="relative w-64 md:w-72" style={{ aspectRatio: "3/4" }}>
              <div className="absolute inset-0 rounded-2xl bg-primary/10 translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/40 shadow-lg">
                <Image
                  src="/shelia_photo.JPG"
                  alt="Shelia Teo at Niagara Falls"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 40%" }}
                  priority
                />
              </div>
            </div>
            <p className="text-xs text-muted-foreground font-mono tracking-wide">
              📍 Niagara Falls
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
