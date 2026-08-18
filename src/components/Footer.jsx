"use client";

import Link from "next/link";
import { Star, MapPin, Phone, ExternalLink } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function Footer() {
  return (
    <footer className="bg-[#1C1613] text-[#FDFBF7] pt-16 pb-12 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C5A059]/15">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VANDANAM
              </span>
              <span className="text-[10px] tracking-widest text-[#C5A059] font-semibold uppercase block">
                South Indian Food Joint
              </span>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              A true taste of South India. Authentic flavours, freshly prepared for Ahmedabad. A venture started by The Front Yard.
            </p>

            <div className="inline-flex items-center space-x-2 bg-[#2C221E] px-3 py-1.5 rounded-full border border-[#C5A059]/30 text-xs">
              <Star className="w-3.5 h-3.5 text-[#C5A059] fill-current" />
              <span className="font-bold text-white">{restaurant.rating} ★</span>
              <span className="text-white/60">• {restaurant.reviewCount.toLocaleString()}+ Google Reviews</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C5A059] tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <Link href="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#C5A059] transition-colors">Menu</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">About Vandanam</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C5A059] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-[#C5A059] transition-colors">Visit Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold text-[#C5A059] tracking-wider uppercase">
              Contact & Location
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              {restaurant.address.venue}, {restaurant.address.street}, {restaurant.address.area}, {restaurant.address.city} – {restaurant.address.pincode}
            </p>

            <div className="pt-1 space-y-1 text-xs text-white/80">
              <p>Phone: <a href={restaurant.telLink} className="text-[#C5A059] hover:underline">{restaurant.phone}</a></p>
              <p>Status: <span className="text-white/90">{restaurant.openingHours.status}</span></p>
            </div>

            <div className="pt-2 flex space-x-3">
              <a
                href={restaurant.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white bg-[#2C221E] hover:bg-[#C5A059] px-3 py-1.5 rounded-lg border border-[#C5A059]/30 transition-colors inline-flex items-center space-x-1"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={restaurant.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#1C1613] bg-[#C5A059] hover:bg-[#B38E46] px-3 py-1.5 rounded-lg font-semibold transition-colors inline-flex items-center space-x-1"
              >
                <span>Order Online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-2 sm:space-y-0">
          <p>© {new Date().getFullYear()} Vandanam South Indian Food Joint. All rights reserved.</p>
          <p>Concept proposal draft prepared for restaurant presentation.</p>
        </div>

      </div>
    </footer>
  );
}
