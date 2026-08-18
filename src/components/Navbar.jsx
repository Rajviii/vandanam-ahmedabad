"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, Menu, X, Phone, MapPin, ExternalLink } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/visit" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FDFBF7]/90 border-b border-[#C5A059]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1613] group-hover:text-[#C5A059] transition-colors">
            VANDANAM
          </span>
          <span className="text-[10px] sm:text-xs tracking-widest text-[#2E5A44] font-semibold uppercase">
            South Indian Food Joint
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#1C1613]/80 hover:text-[#C5A059] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#C5A059] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={restaurant.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1C1613] bg-[#F6F1E7] hover:bg-[#EFE8DA] px-3.5 py-2 rounded-full border border-[#C5A059]/30 transition-all"
          >
            <MapPin className="w-3.5 h-3.5 text-[#2E5A44]" />
            <span>Directions</span>
          </a>

          <a
            href={restaurant.links.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white bg-[#1C1613] hover:bg-[#C5A059] px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
          >
            <span>Order Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center space-x-2">
          <a
            href={restaurant.links.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-white bg-[#1C1613] px-3 py-1.5 rounded-full"
          >
            Order
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1C1613] hover:text-[#C5A059] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-[#C5A059]/20 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#1C1613] hover:text-[#C5A059] py-1 border-b border-[#1C1613]/5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <a
              href={restaurant.links.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-[#F6F1E7] text-[#1C1613] text-sm font-semibold border border-[#C5A059]/30"
            >
              <MapPin className="w-4 h-4 text-[#2E5A44]" />
              <span>Get Directions (Jagatpur)</span>
            </a>
            <a
              href={restaurant.telLink}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-[#2E5A44] text-white text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Call 099793 20159</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
