import Link from "next/link";
import { UtensilsCrossed, ArrowLeft, BookOpen } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found on Vandanam South Indian Food Joint.",
};

export default function NotFound() {
  return (
    <div className="bg-[#FDFBF7] min-h-[75vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center bg-[#F6F1E7] p-8 sm:p-10 rounded-3xl border border-[#C5A059]/30 shadow-luxury space-y-6">
        <div className="w-16 h-16 bg-[#1C1613] text-[#C5A059] rounded-2xl flex items-center justify-center mx-auto shadow-md">
          <UtensilsCrossed className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block">
            ERROR 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#6B5E54] leading-relaxed">
            Oops, this page took a wrong turn. Let's get you back to Vandanam.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center space-x-2 text-xs font-bold text-white bg-[#1C1613] px-5 py-3 rounded-full hover:bg-[#C5A059] transition-all shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center space-x-2 text-xs font-bold text-[#1C1613] bg-[#FDFBF7] border border-[#C5A059]/40 px-5 py-3 rounded-full hover:bg-[#C5A059] hover:text-white transition-all shadow-xs"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
