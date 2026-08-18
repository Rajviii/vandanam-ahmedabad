// Data file: menuData.js
// Verified categories and curated sample dish items for presentation draft

export const menuCategories = [
  "All",
  "Dosa",
  "Idli & Vada",
  "Uttapam",
  "Rice",
  "Meals",
  "Beverages",
];

export const featuredDishes = [
  {
    id: "masala-dosa",
    name: "Classic Masala Dosa",
    category: "Dosa",
    description: "Golden crispy crepe served with spiced potato filling, coconut chutney, tomato chutney, and hot sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop",
    badge: "Popular",
    isVegan: true,
  },
  {
    id: "idli-vada-combo",
    name: "Steamed Idli & Crispy Vada",
    category: "Idli & Vada",
    description: "Pillow-soft steamed rice cakes paired with golden crunchy medu vada, served with traditional chutneys.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop",
    badge: "Classic",
    isVegan: true,
  },
  {
    id: "onion-uttapam",
    name: "Onion Tomato Uttapam",
    category: "Uttapam",
    description: "Thick savory rice pancake topped with finely chopped onions, fresh tomatoes, green chillies, and herbs.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=1000&auto=format&fit=crop",
    badge: "Chef's Recommendation",
    isVegan: true,
  },
  {
    id: "south-indian-meals",
    name: "South Indian Thali Meal",
    category: "Meals",
    description: "Wholesome traditional thali featuring steamed rice, sambar, rasam, kootu, poriyal, appalam, and sweet dish.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop",
    badge: "All You Can Eat Option",
    isVegan: false,
  },
  {
    id: "filter-coffee",
    name: "Authentic Filter Coffee",
    category: "Beverages",
    description: "Traditional South Indian decoction coffee frothed with hot milk in a classic brass tumbler.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop",
    badge: "Must Try",
    isVegan: false,
  },
  {
    id: "ghee-roast-dosa",
    name: "Special Ghee Roast Dosa",
    category: "Dosa",
    description: "Ultra-crispy golden dosa roasted with pure aromatic ghee, served with signature chutneys and sambar.",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1000&auto=format&fit=crop",
    badge: "Bestseller",
    isVegan: false,
  }
];
