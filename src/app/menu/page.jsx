"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Search, ExternalLink, Leaf, Utensils, Info } from "lucide-react";
import { menuCategories, fullMenu } from "@/data/menuData";
import { restaurant } from "@/data/restaurantData";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = fullMenu.filter((dish) => {
    const matchesCategory =
      activeCategory === "All" || dish.category === activeCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (dish.portion && dish.portion.toLowerCase().includes(searchQuery.toLowerCase())) ||
      dish.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate item counts per category
  const getCategoryCount = (catName) => {
    if (catName === "All") return fullMenu.length;
    return fullMenu.filter((item) => item.category === catName).length;
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen py-8 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "Menu" }]} />

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
            AUTHENTIC SOUTH INDIAN CUISINE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613]">
            Vandanam Menu
          </h1>
          <p className="text-sm text-[#6B5E54]">
            Browse our complete selection of thalis, dosas, combos, idlis, sadam rice, traditional sweets, and beverages.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div className="space-y-6 mb-10">
          
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#6B5E54] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search for dosas, thalis, filter coffee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#F6F1E7] border border-[#C5A059]/30 text-sm text-[#1C1613] placeholder-[#6B5E54] focus:outline-none focus:border-[#C5A059] transition-colors shadow-xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start xl:justify-center overflow-x-auto gap-2 py-2 px-1 no-scrollbar scroll-smooth">
            {menuCategories.map((cat) => {
              const count = getCategoryCount(cat);
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                    isActive
                      ? "bg-[#1C1613] text-white shadow-xs"
                      : "bg-[#F6F1E7] text-[#1C1613] border border-[#C5A059]/20 hover:border-[#C5A059]/50"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive
                        ? "bg-[#C5A059] text-white"
                        : "bg-[#E6DDD0] text-[#6B5E54]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
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
                  transition={{ duration: 0.25 }}
                  className="bg-[#F6F1E7] rounded-2xl overflow-hidden border border-[#C5A059]/25 shadow-xs hover:shadow-luxury transition-all flex flex-col justify-between group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-[#1C1613] overflow-hidden">
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
                      <h3 className="font-serif text-lg font-bold text-[#1C1613] group-hover:text-[#C5A059] transition-colors leading-snug">
                        {dish.name}
                      </h3>

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
                      <a
                        href={restaurant.links.orderOnline}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1 text-xs font-bold text-[#1C1613] hover:text-[#C5A059] transition-colors"
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

        {/* Bottom Verification & Proposal Callout */}
        <div className="mt-16 max-w-2xl mx-auto p-6 rounded-2xl bg-[#F6F1E7] border border-[#C5A059]/35 space-y-3 text-center shadow-xs">
          <div className="inline-flex items-center space-x-2 text-[#2E5A44] bg-[#2E5A44]/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5" />
            <span>Menu & Pricing Verification Notice</span>
          </div>
          <p className="text-xs text-[#1C1613] leading-relaxed">
            Prices and availability shown reflect current online menu details for demo proposal purposes.
            Before publishing the website live, please confirm the latest menu items and prices with Vandanam.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={restaurant.links.orderOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#1C1613] bg-[#C5A059] px-5 py-2.5 rounded-full hover:bg-[#B38E46] transition-all shadow-xs"
            >
              <span>View Current Swiggy Online Menu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

