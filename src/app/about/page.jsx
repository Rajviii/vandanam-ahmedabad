import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import { restaurant } from "@/data/restaurantData";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "About Vandanam South Indian Food Joint | Jagatpur, Ahmedabad",
  description: "Learn about Vandanam South Indian Food Joint in Jagatpur, Ahmedabad. A venture started by The Front Yard offering authentic South Indian dining, indoor seating, and 4.7★ rated hospitality.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ label: "About Us" }]} />

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
            ABOUT VANDANAM
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1613]">
            A True Taste of South India
          </h1>
          <p className="text-base text-[#6B5E54] leading-relaxed">
            Vandanam South Indian Food Joint is a premier South Indian restaurant in Jagatpur, Ahmedabad. We bring rich culinary traditions to a warm, indoor dining space.
          </p>
        </div>

        {/* Story & Front Yard Connection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-luxury border-2 border-[#C5A059]/30 aspect-[4/3] bg-[#1C1613]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
                alt="Vandanam South Indian Food Joint interior dining ambiance in Jagatpur Ahmedabad"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Verified Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-5 rounded-2xl bg-[#F6F1E7] border border-[#C5A059]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#C5A059]">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1613]">
                  Verified Brand Venture
                </span>
              </div>
              <blockquote className="font-serif text-lg italic text-[#1C1613] pt-1">
                "Vandanam is an authentic South Indian restaurant, a venture started by The Front Yard. Vandanam is an indoor restaurant serving a rich variety of South Indian delicacies."
              </blockquote>
            </div>

            <p className="text-base text-[#6B5E54] leading-relaxed">
              Situated inside Sports Club at SAVVY SWARAAJ near Godrej Garden City Road and off SG Highway, Vandanam provides an inviting dining atmosphere for families, colleagues, and food lovers across Jagatpur and Ahmedabad.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#C5A059]/20">
                <span className="font-serif text-3xl font-bold text-[#1C1613] block">4.7 ★</span>
                <span className="text-xs text-[#6B5E54]">2,242+ Google Reviews</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#C5A059]/20">
                <span className="font-serif text-3xl font-bold text-[#1C1613] block">₹200–400</span>
                <span className="text-xs text-[#6B5E54]">Price Range per Person</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1C1613] hover:bg-[#C5A059] text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/visit"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#F6F1E7] text-[#1C1613] border border-[#C5A059]/30 text-sm font-semibold hover:bg-[#EFE8DA] transition-all shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#2E5A44]" />
                <span>Visit Us in Jagatpur</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
