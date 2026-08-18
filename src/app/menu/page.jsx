"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ExternalLink, Leaf, Utensils } from "lucide-react";
import { menuCategories, featuredDishes } from "@/data/menuData";
import { restaurant } from "@/data/restaurantData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = featuredDishes.filter((dish) => {
    const matchesCategory =
      activeCategory === "All" || dish.category === activeCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
            SOUTH INDIAN DELICACIES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613]">
            Vandanam Menu
          </h1>
          <p className="text-sm text-[#6B5E54]">
            Explore our selection of dosas, idlis, uttapam, rice dishes, and wholesome South Indian meals.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="space-y-6 mb-10">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#6B5E54] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for dosas, idlis, meals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#F6F1E7] border border-[#C5A059]/30 text-sm text-[#1C1613] placeholder-[#6B5E54] focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 py-2 px-1 no-scrollbar">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#1C1613] text-white shadow-xs"
                    : "bg-[#F6F1E7] text-[#1C1613] border border-[#C5A059]/20 hover:border-[#C5A059]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Dish List Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-[#F6F1E7] rounded-3xl border border-[#C5A059]/20">
            <Utensils className="w-10 h-10 text-[#C5A059] mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-[#1C1613]">No dishes found</h3>
            <p className="text-xs text-[#6B5E54] mt-1">Try selecting another category or clear your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredDishes.map((dish) => (
                <motion.div
                  key={dish.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#F6F1E7] rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-xs hover:shadow-luxury transition-all flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] bg-[#1C1613]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-[11px] font-bold text-[#1C1613] bg-[#FDFBF7]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#C5A059]/30">
                        {dish.category}
                      </span>
                      {dish.isVegan && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-[#2E5A44] bg-[#FDFBF7]/90 backdrop-blur-md px-2 py-1 rounded-md">
                          <Leaf className="w-3 h-3 text-[#2E5A44]" />
                          <span>Vegan</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#1C1613]">
                        {dish.name}
                      </h3>
                      <p className="text-xs text-[#6B5E54] mt-1 leading-relaxed">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#C5A059]/20 flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#2E5A44]">
                        Fresh Preparation
                      </span>
                      <a
                        href={restaurant.links.orderOnline}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-bold text-[#1C1613] hover:text-[#C5A059]"
                      >
                        <span>Order Online</span>
                        <ExternalLink className="w-3 h-3 text-[#C5A059]" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom Menu Notice */}
        <div className="mt-16 text-center max-w-xl mx-auto p-6 rounded-2xl bg-[#F6F1E7] border border-[#C5A059]/30 space-y-2">
          <p className="text-xs text-[#6B5E54]">
            Note: Complete item pricing and full menu details can be updated upon restaurant verification.
          </p>
          <a
            href={restaurant.links.orderOnline}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs font-semibold text-[#1C1613] bg-[#C5A059] px-4 py-2 rounded-full hover:bg-[#B38E46] transition-colors"
          >
            <span>View Current Swiggy Online Menu</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
