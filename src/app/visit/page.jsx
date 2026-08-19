import LocationSection from "@/components/LocationSection";
import GoogleReviews from "@/components/GoogleReviews";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Visit Vandanam | Location, Directions & Hours | Jagatpur, Ahmedabad",
  description: "Visit Vandanam South Indian Food Joint in Jagatpur, Ahmedabad. Sports Club, SAVVY SWARAAJ, G-01B, near Godrej Garden City Road off SG Highway. Get directions & view operating hours.",
};

export default function VisitPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={[{ label: "Visit Us" }]} />
      </div>

      <div className="pt-4 lg:pt-8 pb-4 text-center max-w-2xl mx-auto px-4 space-y-3">
        <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
          LOCATION & SERVICE
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1C1613]">
          Visit Us in Jagatpur, Ahmedabad
        </h1>
        <p className="text-sm text-[#6B5E54]">
          Located at Sports Club, SAVVY SWARAAJ (G-01B), near Godrej Garden City Road, off SG Highway.
        </p>
      </div>

      <LocationSection />
      <GoogleReviews />
    </div>
  );
}
