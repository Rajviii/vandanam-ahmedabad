"use client";

import { motion } from "motion/react";
import { CheckCircle2, DollarSign, Utensils, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function WhyVandanam() {
  const highlights = [
    {
      title: "Authentic South Indian Cuisine",
      desc: "Traditional South Indian tiffins, dosas, uttapam, and rice dishes made with care.",
    },
    {
      title: "Indoor Dining",
      desc: "Relaxed, comfortable indoor dining setting for family and friends.",
    },
    {
      title: "Vegan Options",
      desc: "Thoughtful plant-based South Indian options available across the menu.",
    },
    {
      title: "All-You-Can-Eat",
      desc: "Satisfying all-you-can-eat service options for hearty appetites.",
    },
    {
      title: "Convenient Jagatpur Location",
      desc: "Situated at SAVVY SWARAAJ near Godrej Garden City Road off SG Highway.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F6F1E7] border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Price Highlight */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
              OUR HIGHLIGHTS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1613]">
              Why Vandanam
            </h2>

            <p className="text-base text-[#6B5E54] leading-relaxed">
              Designed as a modern South Indian joint for Ahmedabad, Vandanam combines authentic regional taste with a warm, welcoming dining experience.
            </p>

            {/* Standalone Price Indicator Card */}
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/30 shadow-xs flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/15 flex items-center justify-center shrink-0">
                <span className="font-serif text-xl font-bold text-[#C5A059]">₹</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2E5A44]">
                  Price Indicator
                </span>
                <h4 className="font-serif text-xl font-bold text-[#1C1613]">
                  {restaurant.priceRange}
                </h4>
                <p className="text-xs text-[#6B5E54]">Typical cost for dining</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#C5A059]/20 shadow-xs hover:border-[#C5A059]/40 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2E5A44] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-[#1C1613]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6B5E54] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
