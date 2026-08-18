"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Leaf } from "lucide-react";
import { featuredDishes } from "@/data/menuData";

export default function FavouritesSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#FDFBF7] border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-bold tracking-widest text-[#2E5A44] uppercase block mb-1">
              FRESHLY PREPARED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
              Signature Dishes
            </h2>
            <p className="text-sm text-[#6B5E54] mt-1 max-w-md">
              A mouth-watering preview of authentic South Indian tiffins and meals served daily at Vandanam.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1C1613] hover:text-[#C5A059] group transition-colors shrink-0"
          >
            <span>Explore Full Menu</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.slice(0, 6).map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="group bg-[#F6F1E7] rounded-2xl overflow-hidden border border-[#C5A059]/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1613]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-104 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category & Dietary Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="text-[11px] font-bold text-[#1C1613] bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {dish.category}
                  </span>
                  {dish.isVegan && (
                    <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#2E5A44] bg-[#FDFBF7]/90 backdrop-blur-md px-2 py-1 rounded-md">
                      <Leaf className="w-3 h-3 text-[#2E5A44]" />
                      <span>Vegan</span>
                    </span>
                  )}
                </div>

                {dish.badge && (
                  <span className="absolute top-3 right-3 text-[11px] font-semibold text-white bg-[#1C1613]/80 backdrop-blur-md px-2.5 py-1 rounded-md">
                    {dish.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1613] group-hover:text-[#C5A059] transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#6B5E54] mt-1 line-clamp-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C5A059]/15 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#2E5A44] uppercase tracking-wider">
                    Freshly Prepared
                  </span>
                  <Link
                    href="/menu"
                    className="text-xs font-bold text-[#1C1613] hover:text-[#C5A059] flex items-center space-x-1"
                  >
                    <span>View Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
