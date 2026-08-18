"use client";

import Image from "next/image";
import { MapPin, Phone, ExternalLink, Clock, Compass, Eye } from "lucide-react";
import { restaurant } from "@/data/restaurantData";

export default function LocationSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FDFBF7] border-b border-[#C5A059]/15" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Outlet Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
              FIND US IN AHMEDABAD
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
              Visit Vandanam
            </h2>

            <div className="space-y-4 pt-2">
              
              {/* Address Card */}
              <div className="p-5 rounded-2xl bg-[#F6F1E7] border border-[#C5A059]/30 flex items-start space-x-4">
                <div className="p-3 rounded-xl bg-[#2E5A44] text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-[#1C1613]">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm font-medium text-[#1C1613]">
                    {restaurant.address.venue}
                  </p>
                  <p className="text-xs text-[#6B5E54]">
                    {restaurant.address.street}, {restaurant.address.area}, {restaurant.address.city} – {restaurant.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone & Service Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#C5A059]/20 flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B5E54]">
                      Phone
                    </span>
                    <a href={restaurant.telLink} className="text-sm font-bold text-[#1C1613] block hover:text-[#C5A059]">
                      {restaurant.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#C5A059]/20 flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#6B5E54]">
                      Opening Status
                    </span>
                    <p className="text-sm font-bold text-[#1C1613]">
                      {restaurant.openingHours.status}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons Grid */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={restaurant.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#1C1613] hover:bg-[#C5A059] text-white text-xs font-semibold transition-all shadow-xs"
              >
                <Compass className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={restaurant.telLink}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#2E5A44] hover:bg-[#254937] text-white text-xs font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <a
                href={restaurant.links.orderOnline}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-full bg-[#F6F1E7] hover:bg-[#EFE8DA] text-[#1C1613] border border-[#C5A059]/40 text-xs font-semibold transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#C5A059]" />
                <span>Order Online</span>
              </a>
            </div>

          </div>

          {/* Outside Visual Card / Photosphere */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-[#C5A059]/30 aspect-[4/3] bg-[#1C1613]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                alt="Vandanam South Indian Food Joint Ambiance"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/90 via-[#1C1613]/30 to-transparent" />

              {/* Outside Photosphere Link Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#1C1613]/90 backdrop-blur-md border border-[#C5A059]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#C5A059]">
                    <Eye className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Google Street View
                    </span>
                  </div>
                  <span className="text-[10px] text-white/70">Google Maps 360°</span>
                </div>

                <h4 className="font-serif text-base font-bold text-white">
                  See Outside View of Vandanam
                </h4>

                <a
                  href={restaurant.links.photosphere}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-[#1C1613] bg-[#C5A059] hover:bg-[#B38E46] px-4 py-2 rounded-lg transition-colors w-full justify-center"
                >
                  <span>See Outside Photo on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
