"use client";

import React from "react";
import { Building, Layout, Home, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  count: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hoverBorder: string;
}

const categories: Category[] = [
  {
    id: "apartments",
    name: "Apartments",
    count: "482 Listings",
    icon: Building,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    hoverBorder: "hover:border-blue-500/30",
  },
  {
    id: "studios",
    name: "Studios",
    count: "215 Listings",
    icon: Layout,
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    hoverBorder: "hover:border-teal-500/30",
  },
  {
    id: "houses",
    name: "Houses",
    count: "340 Listings",
    icon: Home,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    hoverBorder: "hover:border-rose-500/30",
  },
  {
    id: "shared-rooms",
    name: "Shared Rooms",
    count: "128 Listings",
    icon: Users,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    hoverBorder: "hover:border-amber-500/30",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-background border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Browse by Category</h2>
            <p className="text-muted mt-2 text-base max-w-md">
              Find exactly what {"you're"} looking for by filtering through specific building layouts.
            </p>
          </div>
          <button className="self-start md:self-auto text-sm font-semibold text-primary hover:text-primary-hover flex items-center gap-1.5 hover:underline group">
            <span>View All Categories</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => alert(`Navigating to ${category.name} category listings`)}
              className={`p-6 rounded-2xl border border-card-border bg-card-bg cursor-pointer hover:shadow-md hover:shadow-primary/5 transition-all flex flex-col items-start group ${category.hoverBorder}`}
            >
              {/* Category Icon */}
              <div className={`p-4 rounded-xl ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>

              {/* Title & Count */}
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-muted font-medium">
                {category.count}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
