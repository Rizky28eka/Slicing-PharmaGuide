# 💊 Pharmacy Management - Digital Reference

A comprehensive digital reference platform that merges the managerial and clinical aspects of pharmacy. Specifically designed to help students and practitioners understand the pharmacy workflow in-depth, from planning to patient monitoring.

---

## 📌 1. Project Title & Description

* **Project Name**: Pharmacy Management Landing Page
* **Description**: An educational website providing a comprehensive reference for pharmacy management, combining managerial theory with clinical practice in a pharmacy setting.
* **Objective**: To provide an interactive and easy-to-understand learning resource for prospective pharmacists and pharmacy technicians regarding modern pharmacy management systems.

---

## 📌 2. Overview / Background

* **Background**: Managing a pharmacy involves many complex aspects, ranging from regulations and logistics to clinical services. Often, these materials are difficult to grasp without systematic flow visualization.
* **Rationale**: This project was created to bridge the gap between academic theory and practical implementation in the field through a more visual and modern approach.
* **Solution**: Features a concise information dashboard, structured enrichment modules, and an interactive visualization of the "9-Step Pharmacy Management Flow."

---

## 📌 3. Features

* **Statistics Dashboard**: Data summary (14 Course Chapters, 8 Practical Modules, 2024 Publication Year).
* **Interactive Management Flow**: Visualization of the 9 core process steps in a pharmacy (Selection -> Planning -> ... -> Monitoring).
* **Comprehensive Enrichment Materials**: 8 additional modules (Prescription Evaluation, Financial Analysis, Regulation, etc.).
* **Responsive UI**: Premium design optimized for all screen sizes (Mobile, Tablet, Desktop).
* **Smooth Navigation**: Anchor-based navigation for seamless transitions between sections.

---

## 📌 4. Tech Stack

* **Frontend**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Package Manager**: [Bun](https://bun.sh/) / [NPM](https://www.npmjs.com/)

---

## 📌 5. System Architecture

* **Architecture**: Single Page Application (SPA).
* **Structure**: Component-based Architecture separating `UI Components` (reusable) and `Site Components` (section-specific).
* **Styling Pattern**: Utility-first CSS using Tailwind with CSS Variables integration for color themes.

---

## 📌 6. Installation Guide

### Requirements

* Node.js v18.x or later
* Bun (recommended) or NPM

### Step-by-step

1. **Clone Repository**

   ```bash
   git clone https://github.com/Rizky28eka/ui-slicing-guru.git
   ```

2. **Install Dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Setup Environment**

   *(Optional: If there is a .env.example file, copy it to .env)*

   ```bash
   cp .env.example .env
   ```

4. **Run Project**

   ```bash
   bun dev
   # or
   npm run dev
   ```

---

## 📌 7. Usage

* **Explore Materials**: Users can view key statistics in the Hero section.
* **Study the Flow**: Scroll to the "Management Flow" section to see the professional workflow sequence in a pharmacy.
* **Enrichment Modules**: Click on material cards in the "Additional Materials" section to view topic details.

---

## 📌 8. API Documentation

* *Currently, this project is frontend-only (static landing page). API integration is planned for the future roadmap.*

---

## 📌 9. Folder Structure

```text
├── public/                # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── site/          # Section-specific components (Hero, About, etc.)
│   │   └── ui/            # Reusable shadcn/ui components
│   ├── pages/             # Main page layouts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities (utils.ts)
│   └── index.css          # Global styles & tailwind directives
├── tailwind.config.ts     # Tailwind configuration
└── vite.config.ts         # Vite configuration
```

---

## 📌 10. Roadmap / Future Development

* [ ] **Detailed Content**: Adding detail pages for each of the 14 chapters.
* [ ] **Interactive Quiz**: Self-evaluation feature for each practical module.
* [ ] **Dark Mode**: Support for dark theme for reading comfort.
* [ ] **Backend Integration**: Integration with a CMS for dynamic content management.

---

## 📌 11. Contributing

1. Fork this Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📌 12. License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📌 13. Author / Credits

* **Rizky Eka** - *Lead Developer* - [@Rizky28eka](https://github.com/Rizky28eka)

---

🚀 *This project was built with a passion for advancing pharmacy education.*
