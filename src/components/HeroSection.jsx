"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FDFBF7] pt-6 pb-12 md:pt-12 md:pb-20 border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Responsive Desktop Split & Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left / Top Column: Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6 text-left"
          >
            {/* Top Eyebrow + Rating Badge Row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-[#2E5A44] uppercase bg-[#2E5A44]/10 px-3 py-1 rounded-full">
                SOUTH INDIAN FOOD • JAGATPUR
              </span>

              <div className="inline-flex items-center space-x-1.5 bg-[#F6F1E7] px-3 py-1 rounded-full border border-[#C5A059]/30">
                <Star className="w-3.5 h-3.5 text-[#C5A059] fill-current" />
                <span className="text-xs font-bold text-[#1C1613]">
                  {restaurant.rating} ★
                </span>
                <span className="text-[11px] text-[#6B5E54]">
                  ({restaurant.reviewCount.toLocaleString()}+ Reviews)
                </span>
              </div>
            </div>

            {/* Brand Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-[#1C1613] leading-none">
                VANDANAM
              </h1>
              <p className="font-serif text-lg sm:text-2xl text-[#C5A059] font-medium mt-1">
                South Indian Food Joint
              </p>
            </div>

            {/* Emotional Statement & Subtext */}
            <div className="space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1613] leading-tight">
                A true taste of South India.
              </h2>
              <p className="text-sm sm:text-base text-[#6B5E54] max-w-lg leading-relaxed">
                Authentic flavours. Freshly prepared. Made for Ahmedabad.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-[#1C1613] hover:bg-[#C5A059] text-white text-sm font-semibold transition-colors shadow-sm group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <a
                href={restaurant.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-full bg-[#F6F1E7] hover:bg-[#EFE8DA] text-[#1C1613] border border-[#C5A059]/40 text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#2E5A44]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Info Badges below text */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#6B5E54] font-medium">
              <span className="bg-[#F6F1E7] px-2.5 py-1 rounded-md">Indoor Dining</span>
              <span className="bg-[#F6F1E7] px-2.5 py-1 rounded-md">Vegan Options</span>
              <span className="bg-[#F6F1E7] px-2.5 py-1 rounded-md font-semibold text-[#1C1613]">{restaurant.priceRange}</span>
            </div>
          </motion.div>

          {/* Right / Hero Food Image Column (LARGE & PROMINENT) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-[#C5A059]/25 bg-[#1C1613] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
              <Image
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200&auto=format&fit=crop"
                alt="Golden Crispy Masala Dosa at Vandanam South Indian Food Joint"
                fill
                priority
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay for subtle text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/70 via-transparent to-transparent" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#1C1613]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#C5A059]/30 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-white">Golden Masala Dosa</h3>
                  <p className="text-[11px] text-white/70">Served with coconut chutney & hot sambar</p>
                </div>
                <span className="text-[11px] font-bold text-[#C5A059] bg-[#C5A059]/15 px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                  Signature
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
