import HeroSection from "@/components/HeroSection";
import FavouritesSection from "@/components/FavouritesSection";
import TasteSection from "@/components/TasteSection";
import WhyVandanam from "@/components/WhyVandanam";
import GoogleReviews from "@/components/GoogleReviews";
import GalleryGrid from "@/components/GalleryGrid";
import LocationSection from "@/components/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Includes large hero food photography front-and-center) */}
      <HeroSection />

      {/* 2. Signature Dishes */}
      <FavouritesSection />

      {/* 3. A Taste of South India (Brand story & Front Yard connection) */}
      <TasteSection />

      {/* 4. Why Vandanam & Price Indicator */}
      <WhyVandanam />

      {/* 5. Google Reviews Social Proof */}
      <GoogleReviews />

      {/* 6. Visual Gallery */}
      <GalleryGrid />

      {/* 7. Location & Visit Us Section */}
      <LocationSection />
    </>
  );
}
