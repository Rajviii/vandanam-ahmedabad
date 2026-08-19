import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MobileActionBar from "@/components/MobileActionBar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vandanam-ahmedabad.vercel.app"),
  title: {
    default: "Vandanam South Indian Food Joint | South Indian Restaurant in Ahmedabad",
    template: "%s | Vandanam South Indian Food Joint",
  },
  description:
    "Vandanam South Indian Food Joint in Jagatpur, Ahmedabad. Explore authentic South Indian dishes, thalis, crisp dosas, fluffy idlis, uttapams, beverages & tiffins. A venture started by The Front Yard.",
  keywords: [
    "Vandanam South Indian Food Joint",
    "South Indian restaurant Ahmedabad",
    "South Indian restaurant Jagatpur",
    "restaurants in Jagatpur",
    "dosa Ahmedabad",
    "South Indian food Ahmedabad",
    "Savvy Swaraaj restaurant",
    "Godrej Garden City South Indian food",
  ],
  openGraph: {
    title: "Vandanam South Indian Food Joint | Ahmedabad",
    description: "Authentic South Indian dining in Jagatpur, Ahmedabad.",
    url: "https://vandanam-ahmedabad.vercel.app",
    siteName: "Vandanam South Indian Food Joint",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Vandanam South Indian Food Joint",
    image: "https://vandanam-ahmedabad.vercel.app/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sports Club, SAVVY SWARAAJ, G-01B, Near Godrej Garden City Road, off SG Highway",
      addressLocality: "Jagatpur, Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382470",
      addressCountry: "IN",
    },
    telephone: "+919979320159",
    servesCuisine: "South Indian",
    priceRange: "₹₹",
    url: "https://vandanam-ahmedabad.vercel.app",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "2242",
    },
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1C1613] pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
