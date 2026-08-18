"use client";

import { Phone, MapPin, ExternalLink } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1C1613] text-white border-t border-[#C5A059]/30 shadow-2xl px-3 py-2.5 flex items-center justify-between gap-2 backdrop-blur-lg bg-opacity-95">
      <a
        href={restaurant.telLink}
        className="flex-1 flex flex-col items-center justify-center py-1 rounded-lg bg-[#2C221E] hover:bg-[#382C27] text-white transition-colors"
      >
        <Phone className="w-4 h-4 text-[#C5A059]" />
        <span className="text-[11px] font-medium mt-0.5">Call</span>
      </a>

      <a
        href={restaurant.links.directions}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 rounded-lg bg-[#2C221E] hover:bg-[#382C27] text-white transition-colors"
      >
        <MapPin className="w-4 h-4 text-[#C5A059]" />
        <span className="text-[11px] font-medium mt-0.5">Directions</span>
      </a>

      <a
        href={restaurant.links.orderOnline}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1 rounded-lg bg-[#C5A059] hover:bg-[#B38E46] text-[#1C1613] font-semibold transition-colors"
      >
        <ExternalLink className="w-4 h-4 text-[#1C1613]" />
        <span className="text-[11px] font-bold mt-0.5">Order Online</span>
      </a>
    </div>
  );
}
