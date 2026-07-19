# 🏠 NextMatch — AI-Powered Property Rental Finder

NextMatch is a full-stack property and room rental discovery platform where users can browse, filter, and list rental properties. It integrates two intelligent AI agents — a **Smart Recommendation Engine** and an **AI Document Intelligence** tool — to help renters find their perfect match and landlords understand lease documents instantly.

<p align="left">
  <a href="https://next-match-a-property-room-rental-d.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-⚡-4f46e5?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/amitchandradas2004/NextMatch-A-Property-Room-Rental-Discovery-Platform." target="_blank">
    <img src="https://img.shields.io/badge/GitHub_Repository-24292e?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
  </a>
</p>

---

## 🔗 Live Links

<p align="left">
  <a href="https://next-match-a-property-room-rental-d.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-⚡-4f46e5?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/amitchandradas2004/NextMatch-A-Property-Room-Rental-Discovery-Platform." target="_blank">
    <img src="https://img.shields.io/badge/GitHub_Repository-24292e?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
  </a>
</p>

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
- Secure authentication with Better Auth and Google OAuth
- Demo login for quick testing
- Protected routes for adding and managing listings
- AI-powered property recommendations
- AI-powered lease document summarization
- Clean, consistent, accessible UI/UX across all devices

---

## 🛠 Tech Stack

**Frontend:**
- Next.js 16 (App Router)
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
- Better Auth + Google OAuth

**AI Integration:**
- Google Gemini AI API

---

## 🤖 AI Features

### 1. Smart Recommendation Engine
Analyzes user preferences (budget, location, must-haves) and available listings to generate ranked, context-aware property recommendations with clear reasoning. Learns from user feedback (thumbs up/down) to refine future results.

### 2. AI Document Intelligence
Landlords upload a lease/agreement document, and the AI extracts and summarizes key terms — rent, deposit, notice period, and restrictions — displayed on the listing's details page and available as a downloadable summary.

---

## 📁 Project Structure

```text
next_match_client/
├── public/                      # Static assets (logos, screenshots, banners)
│   ├── nextmatch_banner_dark.png
│   └── nextmatch_banner_light.png
├── src/
│   ├── app/                     # Next.js App Router Pages & API Routes
│   │   ├── (auth)/              # Authentication pages (login, register)
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── about/               # About page
│   │   ├── apartments/          # Browse properties & Property details
│   │   │   ├── [id]/            # Detailed property view & AI Document analysis
│   │   │   └── page.tsx
│   │   ├── api/                 # Local Next.js api routes / proxy endpoints
│   │   │   ├── ai/              # AI Chat proxies
│   │   │   │   └── chat/
│   │   │   ├── auth/            # Better-auth route handlers
│   │   │   ├── listings/        # Listing route handlers
│   │   │   └── saved/           # Saved listings handlers
│   │   ├── items/               # Add & Manage listings
│   │   │   ├── add/
│   │   │   └── manage/
│   │   ├── profile/             # User profile page
│   │   ├── saved/               # Saved/favorited listings page
│   │   ├── layout.tsx           # Root layout with Theme and Query providers
│   │   ├── page.tsx             # Home page (with hero, features, search widgets)
│   │   └── globals.css          # Global Tailwind styles & dark mode config
│   ├── components/              # Reusable React components (Navbar, Footer, AI chatbot, etc.)
│   ├── lib/                     # Client/Server auth helpers
│   │   ├── auth.ts              # Better Auth backend-client config
│   │   └── auth-client.ts       # Better Auth frontend-client config
│   └── proxy.ts                 # Proxy utilities
├── .env                         # Local environment configuration
├── package.json                 # Project scripts and dependencies
├── tailwind.config.ts / postcss.config.mjs # Tailwind styling configurations
└── tsconfig.json                # TypeScript compiler rules
```

---

## 🚀 Getting Started

To run the NextMatch client application locally, follow these steps:

### 1. Prerequisites
Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### 2. Install Dependencies
Navigate to the client directory and install the required npm packages:
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the `next_match_client` directory. You can use the values in the section below as a template.

### 4. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
To build the application for production deployment:
```bash
npm run build
npm start
```

---

## ⚙️ Environment Variables

Create a `.env` or `.env.local` file in the client root and add the following keys:

```ini
# Better Auth Configuration
BETTER_AUTH_SECRET=your_better_auth_secret_here

# Database Configuration
DB_NAME=nextmatch
MONGODB_URI=mongodb://your_mongodb_connection_uri

# Google OAuth Keys (For Google Sign-in)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Deployment URLs
NEXT_PUBLIC_CLIENT_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

---

## 📡 API Routes

The Next.js client uses local API endpoints acting as proxies or direct handlers to interact with MongoDB and the backend service:

- **`POST /api/listings`**: Local handler for saving, retrieving, and updating property listings.
- **`POST /api/ai/chat`**: Proxy endpoint that routes user chatbot interactions directly to the Gemini API backend service.
- **`GET /api/ai/chat/:conversationId`**: Fetches the chat message history for a specific conversation.
- **`DELETE /api/ai/chat/:conversationId`**: Clears the message history for a conversation.
- **`ALL /api/auth/*`**: Better Auth endpoints for handling Google OAuth, email/password registrations, sessions, and credentials.

---

## 📸 Screenshots

Here are previews of NextMatch:

| Dark Mode | Light Mode |
| --- | --- |
| ![Dark Mode Banner](public/nextmatch_banner_dark.png) | ![Light Mode Banner](public/nextmatch_banner_light.png) |

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.