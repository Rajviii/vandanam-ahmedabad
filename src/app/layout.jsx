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
  title: "Vandanam South Indian Food Joint | Ahmedabad",
  description: "Authentic South Indian dining in Jagatpur, Ahmedabad. Crisp dosas, fluffy idlis, vada, uttapam & meals. A venture started by The Front Yard. 4.7★ (2,242+ Google Reviews).",
  keywords: ["Vandanam", "South Indian Restaurant Ahmedabad", "Dosa Jagatpur", "The Front Yard", "Gota Ahmedabad Restaurant"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDFBF7] text-[#1C1613] pb-16 md:pb-0">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
