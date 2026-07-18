"use client";

import React, { useState } from "react";
import { Star, MapPin, Loader2, Home, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Property {
  id: string;
  title: string;
  description: string;
  price: string;
  location: string;
  rating: number;
  type: string;
  imageColor: string;
  beds: number;
  baths: number;
}

const mockProperties: Property[] = [
  {
    id: "prop-1",
    title: "Modern Glass Villa",
    description: "Stunning architectural masterpiece featuring wall-to-wall glass, high ceilings, and panoramic sunset views.",
    price: "$3,200/mo",
    location: "San Francisco, CA",
    rating: 4.9,
    type: "House",
    imageColor: "from-blue-500 to-indigo-600",
    beds: 3,
    baths: 2.5,
  },
  {
    id: "prop-2",
    title: "Minimalist Loft Studio",
    description: "Compact loft-style studio in the heart of Capitol Hill. Open floorplan with industrial concrete designs.",
    price: "$1,650/mo",
    location: "Seattle, WA",
    rating: 4.7,
    type: "Studio",
    imageColor: "from-teal-400 to-emerald-600",
    beds: 1,
    baths: 1.0,
  },
  {
    id: "prop-3",
    title: "Chic Brick Apartment",
    description: "Renovated historic brick-walled unit. Top-tier smart appliances, warm lighting, and a private balcony.",
    price: "$2,400/mo",
    location: "Brooklyn, NY",
    rating: 4.8,
    type: "Apartment",
    imageColor: "from-pink-500 to-rose-600",
    beds: 2,
    baths: 1.5,
  },
  {
    id: "prop-4",
    title: "Cozy Garden Shared Room",
    description: "Comfortable private room in a shared cottage. Includes access to a landscaped garden patio and fully equipped kitchen.",
    price: "$950/mo",
    location: "Austin, TX",
    rating: 4.6,
    type: "Shared Room",
    imageColor: "from-amber-400 to-orange-500",
    beds: 1,
    baths: 1.0,
  },
];

export default function FeaturedListings() {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  };

  return (
    <section id="featured" className="py-24 bg-background border-y border-card-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Featured Listings</h2>
            <p className="text-muted mt-2 text-base max-w-lg">
              Explore our hand-picked accommodations matching top safety and luxury ratings.
            </p>
          </div>

          {/* Loading Toggle Simulation */}
          <button
            onClick={toggleLoading}
            disabled={isLoading}
            className="self-start md:self-auto flex items-center gap-2 px-4 py-2 border border-card-border hover:border-primary/50 text-sm font-semibold rounded-xl bg-card-bg hover:bg-neutral-bg transition-all active:scale-95 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Loader2 className="h-4 w-4 text-primary" />
                <span>Simulate Loading State</span>
              </>
            )}
          </button>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {isLoading
              ? // Skeleton State
                Array.from({ length: 4 }).map((_, idx) => (
                  <motion.div
                    key={`skeleton-${idx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col h-full rounded-2xl border border-card-border bg-card-bg overflow-hidden shadow-sm animate-pulse"
                  >
                    <div className="w-full h-48 bg-slate-200 dark:bg-slate-800" />
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                        <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-3/4" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
                        <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
                      </div>
                      <div className="pt-4 border-t border-card-border flex items-center justify-between">
                        <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-1/4" />
                        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
                      </div>
                    </div>
                  </motion.div>
                ))
              : // Real Properties
                mockProperties.map((property, idx) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex flex-col h-full rounded-2xl border border-card-border bg-card-bg overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                  >
                    {/* Visual Card Media */}
                    <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                      <div className={`absolute inset-0 bg-gradient-to-tr ${property.imageColor} opacity-75 group-hover:scale-105 transition-transform duration-500`} />
                      
                      {/* Architectural Stylized SVG Art */}
                      <svg
                        className="absolute inset-0 w-full h-full text-white/10"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <path d="M0,80 L40,40 L60,60 L100,20 L100,100 L0,100 Z" fill="currentColor" />
                        <circle cx="80" cy="30" r="10" fill="currentColor" className="opacity-20" />
                      </svg>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-white text-xs font-bold">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span>{property.rating}</span>
                      </div>

                      {/* Property Type Badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider">
                        <Home className="h-3 w-3" />
                        <span>{property.type}</span>
                      </div>
                    </div>

                    {/* Card details */}
                    <div className="p-5 flex-grow flex flex-col justify-between">
                      <div>
                        {/* Location */}
                        <div className="flex items-center gap-1 text-xs text-muted mb-2 font-medium">
                          <MapPin className="h-3.5 w-3.5 text-primary" />
                          <span>{property.location}</span>
                        </div>
                        {/* Title */}
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                          {property.title}
                        </h3>
                        {/* Description */}
                        <p className="text-xs text-muted leading-relaxed line-clamp-2 mb-4">
                          {property.description}
                        </p>
                      </div>

                      {/* Bottom row */}
                      <div className="pt-4 border-t border-card-border flex items-center justify-between mt-auto">
                        <div>
                          <span className="block text-xs text-muted font-medium">Price</span>
                          <span className="text-base font-extrabold text-foreground">{property.price}</span>
                        </div>
                        <button
                          onClick={() => alert(`Viewing details for ${property.title}`)}
                          className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold bg-primary/5 dark:bg-primary/10 hover:bg-primary hover:text-white dark:hover:bg-primary text-primary rounded-lg transition-all"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
