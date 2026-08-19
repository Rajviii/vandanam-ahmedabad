"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";
import { homepageFavourites } from "@/data/menuData";

export default function FavouritesSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#FDFBF7] border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#2E5A44] uppercase block mb-1">
              AUTHENTIC SOUTH INDIAN DISHES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
              Our Favourites
            </h2>
            <p className="text-sm text-[#6B5E54] mt-1 max-w-md">
              A curated taste of signature dosas, wholesome thalis, crisp vadas, and traditional filter coffee.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#1C1613] bg-[#F6F1E7] border border-[#C5A059]/30 px-5 py-3 rounded-full hover:bg-[#C5A059] hover:text-white transition-all group shrink-0 shadow-xs"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homepageFavourites.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group bg-[#F6F1E7] rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-xs hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1613]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category & Vegetarian Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="text-[11px] font-bold text-[#1C1613] bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                    {dish.category}
                  </span>
                  <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#2E5A44] bg-[#FDFBF7]/90 backdrop-blur-md px-2 py-1 rounded-md border border-[#2E5A44]/20">
                    <Leaf className="w-3 h-3 text-[#2E5A44]" />
                    <span>Vegetarian</span>
                  </span>
                </div>

                {dish.badge && (
                  <span className="absolute top-3 right-3 text-[11px] font-bold text-white bg-[#1C1613]/85 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {dish.badge}
                  </span>
                )}

                {/* Price Overlay Badge */}
                <div className="absolute bottom-3 right-3 bg-[#1C1613]/90 text-[#C5A059] font-serif text-base font-bold px-3 py-1 rounded-lg backdrop-blur-md border border-[#C5A059]/40 shadow-sm">
                  {dish.priceFormatted}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-bold text-[#1C1613] group-hover:text-[#C5A059] transition-colors leading-snug">
                      {dish.name}
                    </h3>
                  </div>
                  {dish.portion && (
                    <p className="text-[11px] font-medium text-[#2E5A44] mt-1 bg-[#2E5A44]/8 px-2.5 py-1 rounded-md inline-block">
                      {dish.portion}
                    </p>
                  )}
                  <p className="text-xs text-[#6B5E54] mt-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between">
                  <span className="text-sm font-serif font-bold text-[#1C1613]">
                    {dish.priceFormatted}
                  </span>
                  <Link
                    href="/menu"
                    className="text-xs font-bold text-[#1C1613] hover:text-[#C5A059] flex items-center space-x-1 transition-colors"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#1C1613] bg-[#C5A059] px-8 py-3.5 rounded-full hover:bg-[#B38E46] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>Explore Full Menu (42 Dishes)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

