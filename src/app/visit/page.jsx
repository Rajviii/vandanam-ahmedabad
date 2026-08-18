import LocationSection from "@/components/LocationSection";
import GoogleReviews from "@/components/GoogleReviews";

export default function VisitPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="pt-10 lg:pt-16 pb-4 text-center max-w-2xl mx-auto px-4 space-y-3">
        <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
          LOCATION & SERVICE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613]">
          Visit Us in Jagatpur
        </h1>
        <p className="text-sm text-[#6B5E54]">
          Located at Sports Club in SAVVY SWARAAJ near Godrej Garden City Road, off SG Highway.
        </p>
      </div>

      <LocationSection />
      <GoogleReviews />
    </div>
  );
}
