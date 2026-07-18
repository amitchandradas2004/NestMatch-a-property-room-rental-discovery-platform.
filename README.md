# 🏠 NextMatch — AI-Powered Property Rental Finder

NextMatch is a full-stack property and room rental discovery platform where users can browse, filter, and list rental properties. It integrates two intelligent AI agents — a **Smart Recommendation Engine** and an **AI Document Intelligence** tool — to help renters find their perfect match and landlords understand lease documents instantly.

---

## 🔗 Live Links

- **Live Website:** [https://next-match-a-property-room-rental-d.vercel.app](https://next-match-a-property-room-rental-d.vercel.app)
- **Frontend GitHub Repo:** [https://github.com/amitchandradas2004/NextMatch-A-Property-Room-Rental-Discovery-Platform.](https://github.com/amitchandradas2004/NextMatch-A-Property-Room-Rental-Discovery-Platform.)
 
---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [AI Features](#-ai-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Routes](#-api-routes)
- [Screenshots](#-screenshots)
- [License](#-license)

---

## ✨ Features

- Fully responsive homepage with 7+ sections and dark/light mode
- Property listing explore page with search, filters, sorting, and pagination
- Detailed property pages with image galleries, specs, and reviews
- Secure authentication with JWT and Google OAuth
- Demo login for quick testing
- Protected routes for adding and managing listings
- AI-powered property recommendations
- AI-powered lease document summarization
- Clean, consistent, accessible UI/UX across all devices

---

## 🛠 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- TanStack Query
- Recharts
- React Hook Form + Zod

**Backend:**
- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT Authentication + Google OAuth

**AI Integration:**
- [OpenAI / Gemini / Groq / Claude] — *(replace with the provider you used)*

---

## 🤖 AI Features

### 1. Smart Recommendation Engine
Analyzes user preferences (budget, location, must-haves) and available listings to generate ranked, context-aware property recommendations with clear reasoning. Learns from user feedback (thumbs up/down) to refine future results.

### 2. AI Document Intelligence
Landlords upload a lease/agreement document, and the AI extracts and summarizes key terms — rent, deposit, notice period, and restrictions — displayed on the listing's details page and available as a downloadable summary.

---

## 📁 Project Structure