"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Twitter, Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const anchor = href.includes("#") ? href.substring(href.indexOf("#")) : "";
      if (pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(anchor.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer className="bg-card-bg border-t border-card-border text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                NextMatch
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Discover your perfect rental using advanced matching filters and AI tools. Get your lease terms clarified instantly before signing.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border hover:border-primary/45 hover:text-primary transition-all text-muted"
                aria-label="Follow NextMatch on Twitter"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border hover:border-primary/45 hover:text-primary transition-all text-muted"
                aria-label="Follow NextMatch on Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border hover:border-primary/45 hover:text-primary transition-all text-muted"
                aria-label="Follow NextMatch on LinkedIn"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-card-border hover:border-primary/45 hover:text-primary transition-all text-muted"
                aria-label="Follow NextMatch on Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <span className="block text-sm font-bold uppercase tracking-wider text-muted">
              Quick Links
            </span>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#featured"
                  onClick={(e) => handleLinkClick(e, "/#featured")}
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  Explore Rooms
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  onClick={(e) => handleLinkClick(e, "/#how-it-works")}
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  How it Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#categories"
                  onClick={(e) => handleLinkClick(e, "/#categories")}
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  Browse Layouts
                </Link>
              </li>
              <li>
                <Link
                  href="/#ai-features"
                  onClick={(e) => handleLinkClick(e, "/#ai-features")}
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <span className="block text-sm font-bold uppercase tracking-wider text-muted">
              Support & Legal
            </span>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  About Our Team
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@nextmatch.com"
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  Contact Helpdesk
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors text-muted cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <span className="block text-sm font-bold uppercase tracking-wider text-muted">
              Get in Touch
            </span>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:support@nextmatch.com" className="hover:text-primary transition-colors">support@nextmatch.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                <span>+1 (800) 555-NEXT</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-primary flex-shrink-0 mt-0.5" />
                <span>100 Pine Street, Suite 400<br />San Francisco, CA 94111</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-card-border mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted font-medium">
          <span>&copy; {currentYear} NextMatch Technologies Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Terms</a>
            <a href="#" className="hover:text-primary transition-colors cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
