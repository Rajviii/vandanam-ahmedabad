"use client";

import { Star, ExternalLink } from "lucide-react";
import { googleReviewsInfo } from "@/data/reviewsData";

export default function GoogleReviews() {
  return (
    <section className="py-16 lg:py-20 bg-[#FDFBF7] border-b border-[#C5A059]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Google Icon / Badge Header */}
        <div className="inline-flex items-center space-x-2 bg-[#F6F1E7] border border-[#C5A059]/30 rounded-full px-4 py-1.5 shadow-xs">
          <span className="font-bold text-xs text-[#1C1613] tracking-wider uppercase">
            {googleReviewsInfo.sourceName}
          </span>
        </div>

        {/* Big Score Display */}
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-serif text-5xl sm:text-6xl font-bold text-[#1C1613]">
              {googleReviewsInfo.rating}
            </span>
            <div className="flex flex-col items-start">
              <div className="flex text-[#C5A059]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#6B5E54] mt-0.5">
                Out of {googleReviewsInfo.maxRating} Rating
              </span>
            </div>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1613]">
            {googleReviewsInfo.formattedCount} Verified Reviews
          </h3>
          <p className="text-base text-[#6B5E54]">
            {googleReviewsInfo.tagline}
          </p>
        </div>

        {/* Direct Action Link */}
        <div className="pt-2">
          <a
            href={googleReviewsInfo.googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#1C1613] hover:bg-[#C5A059] text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
          >
            <span>Read Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Note for restaurant owner */}
        <p className="text-xs text-[#6B5E54]/70 italic max-w-lg mx-auto pt-4">
          Note: Customer testimonials can be featured directly in this section upon restaurant approval.
        </p>

      </div>
    </section>
  );
}
