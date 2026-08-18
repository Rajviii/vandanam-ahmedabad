"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function GalleryGrid() {
  const galleryItems = [
    {
      id: 1,
      title: "Crispy Paper Masala Dosa",
      category: "Dosas",
      src: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Steamed Idli & Medu Vada Combo",
      category: "Tiffins",
      src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Savory Onion Tomato Uttapam",
      category: "Uttapam",
      src: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Traditional South Indian Thali",
      category: "Meals",
      src: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Authentic Filter Coffee",
      category: "Beverages",
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Golden Ghee Roast Dosa",
      category: "Dosas",
      src: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F6F1E7] border-b border-[#C5A059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-[#2E5A44] uppercase block mb-1">
            VISUAL GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1613]">
            A Taste for the Eyes
          </h2>
          <p className="text-sm text-[#6B5E54] mt-1">
            Visual presentation of authentic South Indian cuisine served at Vandanam.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden shadow-xs hover:shadow-luxury border border-[#C5A059]/20 aspect-[4/3] bg-[#1C1613]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1613]/85 via-[#1C1613]/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
