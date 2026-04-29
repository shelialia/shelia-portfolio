"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const chips = [
  { label: "🇸🇬 Singapore" },
  { label: "NUS '27" },
  { label: "Hackathon Enthusiast" },
  { label: "Open Source Curious" },
];

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Text */}
          <div>
            <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
              About me
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Building at the intersection of{" "}
              <span className="italic text-primary">craft & code</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Year 3 Computer Science student at the National University
                of Singapore, graduating May 2027. I love building products that
                people actually use — from AI-powered tools to full-stack
                compliance systems.
              </p>
              <p>
                I&apos;ve interned at{" "}
                <span className="text-foreground font-medium">PayPal</span>{" "}
                (Global Compliance), attended{" "}
                <span className="text-foreground font-medium">
                  Jane Street&apos;s INSIGHT
                </span>{" "}
                program as 1 of 20 students selected across Asia, and am joining{" "}
                <span className="text-foreground font-medium">Stripe</span> as
                an incoming SWE intern in May 2026.
              </p>
              <p>
                Outside of work, I&apos;m an active member of NUS Fintech Society
                and the Developer Student Club. I also compete in hackathons and
                love finding creative ways to ship things fast and well.
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
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Decorative background shape */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 translate-x-3 translate-y-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/40 shadow-lg">
                <Image
                  src="/shelia_photo.JPG"
                  alt="Shelia Teo — portrait"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
