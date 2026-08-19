# Vandanam South Indian Food Joint — Website Proposal

> **A true taste of South India | Jagatpur, Ahmedabad**  
> *A venture started by The Front Yard* • **4.7 ★ (2,242+ Google Reviews)**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/Status-Proposal_Draft-gold?style=for-the-badge)](#)

---

## 📌 Project Overview

This repository contains the official website proposal for **Vandanam South Indian Food Joint**, located at Savvy Swaraaj in Jagatpur, Ahmedabad. Designed with a luxury cream-and-gold culinary aesthetic, the website highlights authentic South Indian tiffins, thalis, dosas, beverages, and brand story while providing an effortless discovery-to-order experience for diners.

Live Proposal URL: `https://vandanam-ahmedabad.vercel.app`

---

## ✨ Key Features & Technical Highlights

### 🍽️ 1. Complete Factual Menu Dataset (42 Items)
- **14 Authentic Categories**: Structured strictly according to the restaurant's real menu architecture:
  - *Thali · Combos · Must Try · Family Deal · Idli · Vada · Dosa · Rava Dosa · Uthappam · Sadam Rice · Dessert · Cold Beverages · Hot Beverages · Extra*
- **Custom Non-Verbatim Copywriting**: Unique, high-end descriptions written specifically for this website proposal.
- **Portion & Pricing Transparency**: Clear ₹ amounts, portion sizes (e.g. *4 Mini Idlis, 3 Mini Medu Vadas...*), and vegetarian indicator badges.

### 🌟 2. Homepage "Our Favourites" Section
Features 6 handpicked signature items front-and-center:
1. **Vandanam Special Dosa** — ₹499
2. **Ghee Podi Masala Dosa** — ₹449
3. **Deluxe South Indian Thali** — ₹399
4. **Paneer Ghee Roast with Malabari Paratha** — ₹469
5. **Idiyappam** — ₹439
6. **Filter Coffee** — ₹129

### 🔍 3. Interactive Menu Explorer (`/menu`)
- Real-time search filter by dish name, portion, or ingredient.
- Category tab navigation with live item counter badges.
- Menu verification & pricing disclaimer callout for smooth transition to live deployment.

### 🚀 4. Built-in Production SEO & Local Search Features
- **`sitemap.xml`**: Automatically generated via Next.js App Router (`src/app/sitemap.js`).
- **`robots.txt`**: Dynamic crawlability rules (`src/app/robots.js`).
- **JSON-LD Restaurant Schema**: Structured data (`Schema.org/Restaurant`) incorporating venue address, phone number, cuisine, price range, and Google aggregate ratings.
- **OpenGraph & Social Preview**: Customized meta tags and high-resolution OpenGraph card (`og-image.jpg`).
- **Custom Brand Favicon**: Dark-gold **V** logo icon (`icon.svg`).
- **Local SEO Integration**: Keywords naturally embedded for *Jagatpur, SAVVY SWARAAJ, Godrej Garden City Road, off SG Highway, Ahmedabad*.

### 📱 5. Mobile-First UX & Accessibility
- **Mobile Sticky Action Bar**: One-tap access to *Call Restaurant*, *Get Directions*, and *Order / Reserve*.
- **Mobile Drawer Menu**: Clean drawer listing all primary pages and phone/location actions.
- **Custom 404 Not Found Page** (`src/app/not-found.jsx`).
- **Custom Route Loading Spinner** (`src/app/loading.jsx`).
- **Accessible Breadcrumbs** (`src/components/Breadcrumbs.jsx`).

---

## 📍 Restaurant Details

- **Venue Address**: Sports Club, SAVVY SWARAAJ, G-01B, Near Godrej Garden City Road, off SG Highway, Jagatpur, Ahmedabad, Gujarat 382470
- **Phone**: [+91 99793 20159](tel:09979320159)
- **Brand Lineage**: A venture started by *The Front Yard*
- **Rating**: 4.7 ★ (2,242+ Google Reviews)
- **Average Cost**: ₹200–₹400 per person

---

## 🛠️ Project Structure

```
src/
├── app/
│   ├── about/            # Brand story & Front Yard venture connection
│   ├── gallery/          # Visual food & ambiance photo showcase
│   ├── menu/             # Interactive 42-item full menu explorer
│   ├── visit/            # Location map, directions, operating hours
│   ├── icon.svg          # Custom brand favicon
│   ├── layout.jsx        # Root layout, metadata & JSON-LD schema
│   ├── loading.jsx       # Custom route loading spinner
│   ├── not-found.jsx     # Branded 404 error page
│   ├── page.jsx          # Homepage featuring "Our Favourites"
│   ├── robots.js         # Dynamic robots.txt
│   └── sitemap.js        # Dynamic sitemap.xml
├── components/
│   ├── Breadcrumbs.jsx   # Accessible route breadcrumb trail
│   ├── Footer.jsx        # Dark luxury footer with location & social links
│   ├── FavouritesSection # Signature dish showcase
│   ├── HeroSection.jsx   # Hero banner with featured food photography
│   └── Navbar.jsx        # Sticky header with Order / Reserve CTAs
└── data/
    ├── menuData.js       # Complete 42-dish verified dataset
    ├── restaurantData.js # Verified contact & location details
    └── reviewsData.js    # Highlighted Google customer reviews
```

---

## 💻 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Rajviii/vandanam-ahmedabad.git
   cd vandanam-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 📄 License & Client Transition Notice

This repository serves as a proposal draft for **Vandanam South Indian Food Joint**. All menu items, pricing, and restaurant details reflect public baseline information and can be finalized upon restaurant confirmation.
