import GalleryGrid from "@/components/GalleryGrid";
import { Camera } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="pt-10 lg:pt-16 pb-4 text-center max-w-2xl mx-auto px-4 space-y-3">
        <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
          VISUAL EXPERIENCE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613]">
          Vandanam Gallery
        </h1>
        <p className="text-sm text-[#6B5E54]">
          A visual glimpse into our South Indian culinary offerings and dining presentation.
        </p>
      </div>

      <GalleryGrid />

      <div className="py-12 bg-[#FDFBF7] text-center">
        <div className="inline-flex items-center space-x-2 bg-[#F6F1E7] border border-[#C5A059]/30 rounded-full px-5 py-2.5 shadow-xs">
          <Camera className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs font-medium text-[#6B5E54]">
            Official restaurant photography can be updated here upon design approval.
          </span>
        </div>
      </div>
    </div>
  );
}
