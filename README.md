# 💇‍♀️ Hair Assembly

> **Hair Assembly** is a modern, responsive web application for a premier beauty makeover and hair styling studio located in Rohini, New Delhi. The website provides visitors with service catalogues, product retail information, multi-branch location details with primary and alternative contact options, and seamless instant booking via WhatsApp.

---

## 📋 Table of Contents

- [About Hair Assembly](#-about-hair-assembly)
- [Key Features](#-key-features)
- [Branches & Contact Directory](#-branches--contact-directory)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
- [Available Scripts](#-available-scripts)
- [Website Services & Pages](#-website-services--pages)
- [Customization Guide](#-customization-guide)
- [License](#-license)

---

## 🌟 About Hair Assembly

At **Hair Assembly**, beauty is more than just a style—it's an experience. With expert stylists and skincare professionals, Hair Assembly offers personalized makeovers, trendsetting haircuts, bridal styling, nail art, and restorative hair treatments tailored to each client's unique style.

---

## 🚀 Key Features

- **Responsive & Modern Design**: Clean, mobile-friendly interface built with Tailwind CSS, supporting seamless navigation across phones, tablets, and desktops.
- **Brand Consistency**: Fresh, elegant branding with custom typography and curated salon imagery.
- **Primary & Alternative Contact Options**: Clear directory of primary and backup phone lines, WhatsApp links, and emails for hassle-free customer reach.
- **Interactive Service Catalogue**: Displays full beauty, bridal, and hair services with starting prices and 1-click WhatsApp inquiries.
- **Online Beauty Shop**: Catalog with sorting options (by price, rating) and direct purchase inquiry buttons.
- **Instant WhatsApp Booking**: Pre-populated message templates for quick appointment requests and product queries.
- **Optimized Performance**: Code-split routes utilizing React's `lazy` and `Suspense` for snappy load times.

---

## 📍 Branches & Contact Directory

Hair Assembly operates across two prime locations in Rohini, New Delhi:

### 🏢 Branch 1 (Sector-7)
- **Address**: A-1/38 Sector-7 Rohini, New Delhi - 110085
- **Primary Phone**: [+91 8130616206](tel:+918130616206)
- **Alternative Phone**: [+91 8587871230](tel:+918587871230)
- **WhatsApp**: [+91 8130616206](https://wa.me/918130616206)
- **Email**: [hairassembly@gmail.com](mailto:hairassembly@gmail.com)

### 🏢 Branch 2 (Sector-8)
- **Address**: D-14/226 Sector-8 Rohini, New Delhi - 110085
- **Primary Phone**: [+91 8587871230](tel:+918587871230)
- **Alternative Phone**: [+91 98718 18002](tel:+919871818002)
- **WhatsApp**: [+91 8587871230](https://wa.me/918587871230)
- **Alternative Email**: [contact@hairassembly.com](mailto:contact@hairassembly.com)

### 🕒 Operating Hours
- **Monday – Sunday**: 10:00 AM – 8:30 PM

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend library for dynamic component-based UI |
| **Vite 5** | Lightning-fast build tool and dev server |
| **Tailwind CSS 3** | Utility-first CSS framework for modern responsive styling |
| **React Router DOM 6** | Declarative client-side routing |
| **React Icons** | Icon library for UI elements (phones, WhatsApp, locations, navigation) |
| **PostCSS & Autoprefixer** | CSS processing and vendor prefixing |

---

## 📁 Project Structure

```text
Hair-Assembly/
├── index.html                     # Application HTML entry point & SEO metadata
├── package.json                   # Project scripts and dependencies
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                 # Vite bundler configuration
├── README.md                      # Project documentation
├── public/                        # Static assets (favicons, icons)
│   └── vite.svg
└── src/
    ├── App.jsx                    # Root component with routing and layout
    ├── index.css                  # Global styles and Tailwind directives
    ├── main.jsx                   # React DOM render entry
    ├── assets/                    # Image assets (banners, bridal, cuts, icons)
    └── components/
        ├── Catalogue/
        │   └── Catalogue.jsx      # Salon services list & booking inquiries
        ├── Contact/
        │   └── Contact.jsx        # Branches, primary & alt contacts, gallery
        ├── Footer/
        │   └── Footer.jsx         # Footer with contact details, branches & links
        ├── Home/
        │   ├── About/             # About Hair Assembly section
        │   ├── Buy/               # Promotional coupon and product showcase
        │   ├── Hero/              # Hero header banner with CTA
        │   └── Jack/              # Specialized service highlights
        ├── Home.jsx               # Home page aggregator
        ├── Loader/
        │   └── Loader.jsx         # Suspense fallback skeleton loader
        ├── Navbar/
        │   └── Navbar.jsx         # Navigation bar with desktop & mobile menus
        └── Shop/
            └── Shop.jsx           # Haircare and beauty retail showcase
```

---

## 🏁 Getting Started

### Prerequisites

Make sure you have **Node.js** (version 18 or above recommended) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Installation

1. Clone or open the project folder in your terminal:
   ```bash
   cd Hair-Assembly
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open your browser at the URL shown in the terminal (usually `http://localhost:5173/`).

### Building for Production

Compile optimized production assets:

```bash
npm run build
```

The output will be placed in the `dist/` directory ready for deployment on platforms like Vercel, Netlify, GitHub Pages, or any static hosting server.

### Previewing the Production Build

Preview the production build locally:

```bash
npm run preview
```

---

## 📜 Available Scripts

In the project root, you can run:

- `npm run dev` - Starts the Vite development server with Hot Module Replacement (HMR).
- `npm run build` - Builds production-ready static assets in the `dist` folder.
- `npm run preview` - Runs a local web server serving the production build.
- `npm run lint` - Runs ESLint to identify code style and syntax issues.

---

## 💇 Services Offered at Hair Assembly

- **Bridal Services**: Complete bridal makeovers and pre-bridal packages.
- **Hair Styling & Cuts**: Modern haircuts, expert styling, blowouts, and coloring.
- **Chemical Treatments**: Hair rebonding, smoothening, keratin, and botox treatments.
- **Party Makeup**: Glamorous and subtle looks for weddings, receptions, and celebrations.
- **Nail Art**: Manicures, pedicures, acrylics, and creative nail art designs.
- **Mehendi Services**: Traditional and contemporary henna artistry.
- **Tattoo Work**: Custom artistic tattoo design and detailing.

---

## ⚙️ Customization Guide

### Updating Contact Information
- **Header & Navbar**: Edit `src/components/Navbar/Navbar.jsx`.
- **Contact Page**: Edit `src/components/Contact/Contact.jsx` for branch addresses, phone numbers, and gallery.
- **Footer**: Edit `src/components/Footer/Footer.jsx` for links, opening hours, and social media.

### Adding or Modifying Services
Open `src/components/Catalogue/Catalogue.jsx` and modify the `products` array with new services, descriptions, prices, or images.

### Updating Promo Discounts
Open `src/components/Home/Buy/Buy.jsx` to update the active coupon code (default: `HAIRASSEMBLY10`) and discount text.

---

## 📄 License

This project is maintained for **Hair Assembly**. All rights reserved.
