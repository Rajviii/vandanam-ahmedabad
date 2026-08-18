"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Utensils } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function TasteSection() {
  return (
    <section className="py-14 lg:py-20 bg-[#F6F1E7] border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Food Highlight */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#C5A059]/25 aspect-[4/3] bg-[#1C1613]">
              <Image
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop"
                alt="Authentic South Indian Tiffins at Vandanam"
                fill
                className="object-cover hover:scale-103 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-[#FDFBF7]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A059]/30 flex items-center space-x-2">
                <Utensils className="w-3.5 h-3.5 text-[#2E5A44]" />
                <span className="text-xs font-semibold text-[#1C1613]">
                  Indoor Restaurant Service
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Brand Story */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 space-y-5"
          >
            <span className="text-[11px] font-bold tracking-widest text-[#2E5A44] uppercase block">
              OUR DINING PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613] leading-tight">
              Authentic South Indian dining in Jagatpur, Ahmedabad.
            </h2>

            {/* Verified Front Yard Connection */}
            <div className="p-4 rounded-xl bg-[#FDFBF7] border border-[#C5A059]/30 flex items-start space-x-3 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1613]">
                  {restaurant.parentBrand}
                </h4>
                <p className="text-xs text-[#6B5E54] mt-0.5 leading-relaxed">
                  Vandanam is an indoor restaurant serving variety of south indian delicacies with warm hospitality.
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#6B5E54] leading-relaxed">
              Conveniently located at SAVVY SWARAAJ near Godrej Garden City Road off SG Highway, Vandanam offers a relaxed dining environment for crisp dosas, steamed idlis, uttapam, and rice delicacies.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#C5A059]/20">
                <span className="font-serif text-2xl font-bold text-[#1C1613] block">4.7 ★</span>
                <span className="text-xs text-[#6B5E54]">Over 2,242 Google Reviews</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FDFBF7] border border-[#C5A059]/20">
                <span className="font-serif text-2xl font-bold text-[#1C1613] block">₹200–400</span>
                <span className="text-xs text-[#6B5E54]">Price per person</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
