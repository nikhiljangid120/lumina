# LUMINA - Ultra-Premium Product Description Page

A "Word of Mouth" inspired Product Description Page (PDP) built for high-end skincare. This project demonstrates advanced frontend techniques, premium aesthetics, and meticulous attention to detail.

## 🚀 Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite (Fast Refresh & HMR)
- **Styling:** Vanilla CSS + CSS Variables (Simulated CSS-in-JS via inline styles for rapid iteration)
- **Fonts:** Cormorant Garamond (Headings) + Inter (Body)
- **Icons:** Custom SVG & Emoji-based icons

## ✨ Key Features

### 1. Visuals & Animations
- **3D Parallax Tilt:** The hero product image responds to mouse movement with a physics-based 3D tilt effect (`ProductGallery.jsx`).
- **Cinematic Scroll Reveals:** Elements fade and glide upwards as they enter the viewport (`IntersectionObserver` in `Layout.jsx`).
- **Ambient Glow:** Active FAQ items emit a soft, premium light source.
- **Mesh Gradients:** Dynamic, moving background gradients for depth.

### 2. User Experience (UX)
- **Dark Mode "Midnight" Theme:** A system-aware toggle that instantly transforms the site mood.
- **Smooth Scrolling:** Refined navigation experience.
- **Custom Cursor:** A localized custom cursor component for specific interactions.
- **Responsive Design:** Fully audited mobile layout ensuring perfect stacking and readability on devices as small as 375px.

### 3. Functional Components
- **Live Counter:** "X people are viewing this" real-time social proof widget.
- **Cart Drawer:** Fully functional slide-out cart overlay.
- **Video Reviews:** Infinite scrolling marquee of customer testimonials.

## 📂 Project Structure

```bash
src/
├── assets/             # Images and static resources
├── components/         # Reusable UI blocks
│   ├── CustomCursor.jsx
│   ├── FAQSection.jsx  # Interactive Accordion
│   ├── IngredientsSpotlight.jsx # Card Grid with Hover Effects
│   ├── Layout.jsx      # Main wrapper with Scroll Reveal Logic
│   ├── ProductGallery.jsx # 3D Tilt Logic
│   ├── RitualSection.jsx # Step-by-step Guide
│   ├── ...
├── context/
│   └── ThemeContext.jsx # Global Theme State Management
├── App.jsx             # Main Page Assembly
├── index.css           # Global Styles & Font Imports
└── config.js           # Central Configuration
```

## 🛠️ How to Run

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Start Dev Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🎨 Design System
- **Primary Color:** `#C5A035` (Luxury Gold)
- **Backgrounds:** `#FDFBF7` (Cream) / `#121212` (Midnight)
- **Typography:** `Cormorant Garamond` (Serif) & `Inter` (Sans-Serif)

---