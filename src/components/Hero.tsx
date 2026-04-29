"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Download, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "CS @ NUS",
  "Full-Stack Developer",
  "AI Enthusiast",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20"
          style={{
            background: "radial-gradient(circle, #b5a4f5 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15"
          style={{
            background: "radial-gradient(circle, #a8d8c8 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-2/3 left-1/3 w-[300px] h-[300px] rounded-full opacity-20 dark:opacity-10"
          style={{
            background: "radial-gradient(circle, #f9d4d4 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block font-mono text-sm text-primary tracking-widest uppercase border border-primary/30 rounded-full px-4 py-1.5 bg-primary/5">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground leading-[1.05] mb-4"
        >
          Teo Zi Hui,{" "}
          <span className="italic text-primary">Shelia</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground font-medium"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Building things that matter, one commit at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href="#projects"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-full px-7 py-5 h-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-sm hover:shadow-md transition-all"
            )}
          >
            View My Work ↓
          </a>
          <a
            href="/resume.pdf"
            download
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-full px-7 py-5 h-auto border-border/60 text-foreground/80 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 font-medium"
            )}
          >
            <Download className="h-4 w-4 mr-2" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
