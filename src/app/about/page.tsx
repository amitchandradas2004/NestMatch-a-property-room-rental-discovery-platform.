"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Zap,
  Code2,
  ArrowRight,
  Heart,
  Globe
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Matching",
      description: "No more endless scrolling. Our AI recommendation model understands your lifestyle needs to suggest properties that match your specifications.",
      color: "text-primary bg-primary/10"
    },
    {
      icon: ShieldCheck,
      title: "Verified Trust & Safety",
      description: "We verify listings and landlord credentials, mitigating standard rental scams so you can secure your contract with absolute confidence.",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Zap,
      title: "Smart Lease Summarizer",
      description: "Upload lengthy rental lease papers and let our integrated document analyzer extract key terms, deposits, and rules in seconds.",
      color: "text-accent bg-accent/10"
    }
  ];

  const techStack = [
    { name: "Next.js 14", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Better Auth", category: "Security" },
    { name: "Node.js & Express", category: "Backend" },
    { name: "MongoDB & Mongoose", category: "Database" },
    { name: "Framer Motion", category: "Animations" }
  ];

  return (
    <div className="min-h-screen bg-neutral-bg text-foreground pb-24 select-none">
      {/* 1. HERO SECTION */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 border-b border-card-border py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Discover NextMatch</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight"
          >
            Bridging the gap between <br />
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-secondary bg-clip-text text-transparent">
              dreams and addresses
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-350 font-medium leading-relaxed"
          >
            NextMatch is a state-of-the-art rental discovery platform that streamlines property matching, document verification, and tenant-owner onboarding using intelligent algorithms.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-16">
        {/* 2. THE MISSION & VISION CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="bg-card-bg border border-card-border p-8 rounded-3xl shadow-md space-y-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Globe className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">Our Core Mission</h2>
            <p className="text-sm text-muted font-medium leading-relaxed">
              To eliminate the stress of manual lease hunting. We aim to protect prospective tenants from scams, verify hosts, and offer deep AI insights so that everyone can lease their cozy rooms securely and quickly.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-card-bg border border-card-border p-8 rounded-3xl shadow-md space-y-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">Our Tenant Vision</h2>
            <p className="text-sm text-muted font-medium leading-relaxed">
              We envision a rental market built on transparency and speed, where AI summaries replace confusion, verified badges eliminate distrust, and perfect spaces are locked in with a single click.
            </p>
          </motion.div>
        </motion.div>

        {/* 3. PLATFORM CORE FEATURES */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">What Makes Us Different</h2>
            <p className="text-sm text-muted font-semibold">
              Cutting-edge utilities integrated into a single hub to redefine search convenience.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feat) => (
              <motion.div
                key={feat.title}
                variants={itemVariants}
                className="bg-card-bg border border-card-border p-6 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between hover:border-primary/20 transition-all hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${feat.color}`}>
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-foreground">{feat.title}</h3>
                  <p className="text-xs text-muted leading-relaxed font-semibold">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* 4. TECHNOLOGY STACK CHIPS */}
        <div className="bg-card-bg border border-card-border p-8 rounded-3xl shadow-md space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-card-border pb-6">
            <div className="space-y-1">
              <h2 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                <span>Modern Technology Stack</span>
              </h2>
              <p className="text-xs text-muted font-bold">
                NextMatch is engineered with industry-standard web tools for speed and scalability.
              </p>
            </div>
            <span className="text-[10px] font-extrabold bg-slate-100 dark:bg-slate-900/60 px-3 py-1 rounded-full text-muted uppercase tracking-wider border border-card-border self-start md:self-auto">
              Architecture Overview
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-neutral-bg border border-card-border px-4 py-2.5 rounded-2xl hover:border-primary/30 transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-xs font-extrabold text-foreground leading-none">{tech.name}</p>
                  <p className="text-[9px] font-bold text-muted uppercase tracking-wider mt-1">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CALL TO ACTION SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-950 p-8 sm:p-12 text-center text-white border border-slate-800"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to find your cozy match?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
              Explore spaces in cities nationwide or create your first property listing to rent out rooms in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/apartments"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-primary-hover hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                Explore Apartments
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto px-6 py-3 border border-slate-700 bg-slate-800/40 hover:bg-slate-850 hover:border-slate-600 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Join NextMatch</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
