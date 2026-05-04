# 🌞 SuunyMart – Summer eCommerce Platform
# 🌞 SuunyMart — Summer eCommerce Platform
 
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Framework-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/DaisyUI-Components-5A0EF8?style=for-the-badge" />
  <img src="https://img.shields.io/badge/BetterAuth-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" />
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/DaisyUI-5-5A0EF8?style=for-the-badge" alt="DaisyUI" />
  <img src="https://img.shields.io/badge/BetterAuth-1.6-FF6F00?style=for-the-badge" alt="BetterAuth" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>
 
<p align="center">
  <a href="https://suunymart-orpin.vercel.app/">
    <img src="https://img.shields.io/badge/🌐 Live Site-Visit Now-success?style=for-the-badge" />
  </a>
  <a href="https://github.com/shihab-5/suunymart">
    <img src="https://img.shields.io/badge/📂 Repository-View Code-blue?style=for-the-badge" />
  </a>
  <a href="https://suunymart-orpin.vercel.app/"><img src="https://img.shields.io/badge/🌐%20Live%20Site-Visit%20Now-success?style=for-the-badge" alt="Live site" /></a>
  <a href="https://github.com/shihab-5/suunymart"><img src="https://img.shields.io/badge/📂%20Repository-View%20Code-blue?style=for-the-badge" alt="Repo" /></a>
</p>
 
---
 
## 🌴 Project Overview
## 📌 Project Name
 
**SuunyMart** is a modern, responsive summer-themed eCommerce platform where users can explore and purchase seasonal products like:
**SuunyMart** — a modern summer-themed eCommerce platform.
 
* 🕶️ Sunglasses
* 👕 Summer outfits
* 🧴 Skincare
* 🏖️ Beach accessories
## 🎯 Purpose
 
Built with performance, clean UI, and authentication in mind.
SuunyMart lets users explore and purchase seasonal products such as sunglasses, summer outfits, skincare, and beach accessories. Visitors can browse the catalog, view popular picks, read product details, and place orders **after authentication**. The project demonstrates a clean Next.js App Router setup with server-side session checks, route protection via Next.js middleware, and a full BetterAuth (email/password + Google) authentication flow backed by MongoDB.
 
## 🌐 Live URL
 
- **Production:** https://suunymart-orpin.vercel.app/
- **Repository:** https://github.com/shihab-5/suunymart
 
---
 
## ✨ UI Preview (Add Your Screenshots Here)
## ✨ Key Features
 
### 🏠 Home Page
### 🧭 Navigation & Layout
- Persistent **Navbar + Footer** wrapping every route via the App Router root layout (`src/app/layout.js`).
- Dynamic Navbar:
  - **Logged out:** Login button.
  - **Logged in:** User avatar, greeting, and Logout button.
- Mobile-friendly responsive menu using DaisyUI dropdown.
 
![Home Screenshot](https://via.placeholder.com/900x500.png?text=Home+Page+Preview)
### 🏠 Home Page (`/`)
- 🌅 **Hero banner** highlighting the summer sale.
- 🔥 **Popular Products** — pulls the first 3 products from `data.json` and renders them as cards with image, name, rating, price, and a *View Details* button.
- 💡 **Summer Care Tips** section.
- 🏷 **Top Brands** section.
- ✨ Lightweight CSS animations powered by `animate.css`.
 
### 📦 Product Section
### 📦 Products
- All products listed at **`/products`** (publicly accessible, fetched at request time from `data.json`).
- Product cards show image, name, rating, price, and a *View Details* CTA.
- Static product data lives in `public/data.json`.
 
![Products Screenshot](https://via.placeholder.com/900x500.png?text=Products+Preview)
### 🔒 Protected Product Details (`/products/[id]`)
- Implemented via **Next.js middleware** (`src/middleware.js`) that calls `auth.api.getSession()` from BetterAuth.
- Unauthenticated visitors are redirected to `/login`.
- Matcher protects `/profile` and `/products/<id>` (the `[id]` slug) **without** blocking the public `/products` listing.
 
### 🔐 Authentication
### 🔐 Authentication (BetterAuth + MongoDB)
- **Email + Password** login & registration.
- **Google OAuth** (Sign in / Sign up with Google).
- Session-aware UI on both server and client:
  - Server components use `auth.api.getSession({ headers: await headers() })`.
  - Client components use `authClient.useSession()` from `better-auth/react`.
- Auth handler mounted at `src/app/api/auth/[...all]/route.js` via `toNextJsHandler(auth)`.
- MongoDB session/user persistence via `@better-auth/mongo-adapter`.
 
![Auth Screenshot](https://via.placeholder.com/900x500.png?text=Login+Register+Preview)
### 👤 Profile (`/profile`) — Protected
- Displays the logged-in user's avatar, name, and email.
- **Edit Profile** modal (DaisyUI dialog) for updating **name** and **profile image URL** using `authClient.updateUser()` (per the [BetterAuth Update User docs](https://better-auth.com/docs/concepts/users-accounts#update-user)).
 
### 🎨 UI / UX
- Tailwind CSS v4 + DaisyUI v5 for styling and components.
- Fully responsive across mobile, tablet, and desktop breakpoints.
- React Icons (`react-icons`) for consistent iconography.
- Lightweight entrance animations via `animate.css`.
 
---
 
## 🎬 Demo GIF (Optional but Recommended)
## 🛠 Tech Stack
 
> Replace with your own screen recording GIF (use tools like ScreenToGif)
| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| Framework        | **Next.js 16** (App Router)                   |
| UI Library       | **React 19**                                  |
| Styling          | **Tailwind CSS v4**                           |
| Components       | **DaisyUI v5**                                |
| Authentication   | **BetterAuth** + **@better-auth/mongo-adapter** |
| Database         | **MongoDB** (Atlas-compatible)                |
| Forms            | **react-hook-form**                           |
| Icons            | **react-icons**                               |
| Animations       | **animate.css**                               |
| Marquee          | **react-fast-marquee**                        |
| Deployment       | **Vercel**                                    |
 
![Demo GIF](https://via.placeholder.com/900x500.gif?text=App+Demo+GIF)
 
---
 
## 🚀 Features
## 📦 NPM Packages
 
### 🧭 Navigation System
All packages are pinned in [`package.json`](./package.json).
 
* Dynamic Navbar (Login/Register vs Avatar/Logout)
* Persistent layout (Navbar + Footer)
* Route-based navigation (Next.js App Router)
### Runtime dependencies
| Package                       | Purpose                                          |
| ----------------------------- | ------------------------------------------------ |
| `next`                        | React framework with App Router & middleware     |
| `react`, `react-dom`          | UI runtime                                       |
| `better-auth`                 | Authentication (email/password + Google OAuth)   |
| `@better-auth/mongo-adapter`  | MongoDB adapter for BetterAuth                   |
| `mongodb`                     | Official MongoDB Node.js driver                  |
| `react-hook-form`             | Form state management & validation               |
| `react-icons`                 | Icon set (`FaStar`, `FaEdit`, etc.)              |
| `react-fast-marquee`          | Scrolling marquee for brand/banner sections      |
| `animate.css`                 | Drop-in CSS animation classes                    |
 
### Dev dependencies
| Package                | Purpose                            |
| ---------------------- | ---------------------------------- |
| `tailwindcss`          | Utility-first CSS                  |
| `@tailwindcss/postcss` | PostCSS plugin for Tailwind v4     |
| `daisyui`              | Component library on top of Tailwind |
| `eslint`               | Linting                            |
| `eslint-config-next`   | Next.js ESLint preset              |
 
---
 
### 🏠 Home Page
## 📂 Folder Structure
 
* 🌅 Hero Banner (Summer Sale)
* 🔥 Popular Products (Top 3)
* 💡 Summer Care Tips
* 🏷️ Top Brands Section
```
suunymart/
├── public/
│   ├── data.json              # Static product catalog (6+ products)
│   ├── banner.png
│   ├── logo.png
│   └── *.svg
├── src/
│   ├── middleware.js          # Route protection (BetterAuth session check)
│   ├── lib/
│   │   ├── auth.js            # BetterAuth server config (Mongo + Google)
│   │   └── auth-client.js     # BetterAuth React client (useSession, signIn…)
│   ├── component/
│   │   ├── nav.jsx            # Top navbar (auth-aware)
│   │   ├── footer.jsx
│   │   ├── Navlink.jsx        # Active-aware nav link
│   │   ├── Popular.jsx        # Home: top 3 popular products
│   │   ├── Tips.jsx           # Home: summer care tips
│   │   ├── Top-brands.jsx     # Home: featured brands
│   │   └── Update.jsx         # Profile update modal
│   └── app/
│       ├── layout.js          # Root layout (Nav + Footer wrapper)
│       ├── page.jsx           # Home (/)
│       ├── loading.jsx        # Global loading UI
│       ├── not-found.jsx      # 404 page
│       ├── login/page.jsx     # /login
│       ├── register/page.jsx  # /register
│       ├── profile/page.jsx   # /profile (protected)
│       ├── products/
│       │   ├── page.jsx       # /products (public listing)
│       │   └── [id]/page.jsx  # /products/[id] (protected detail)
│       └── api/
│           └── auth/[...all]/route.js  # BetterAuth Next.js handler
├── eslint.config.mjs
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.mjs
├── jsconfig.json
└── package.json
```
 
---
 
### 📦 Products
## 🛡 Route Protection (Middleware)
 
* Static JSON data (6+ products)
* Product Cards:
`src/middleware.js` runs on every request that matches `config.matcher`. It calls BetterAuth's `auth.api.getSession()` with the incoming request headers:
 
  * Image
  * Name
  * Rating ⭐
  * Price 💲
  * Details button
- If a session exists → `NextResponse.next()` (request continues).
- If no session → `NextResponse.redirect('/login')`.
 
---
```js
// src/middleware.js
export const config = {
  matcher: ["/profile", "/products/:id+"],
};
```
 
### 🔒 Protected Routes
The matcher uses `/products/:id+` (one-or-more path segments) so:
 
* Product details require login
* Smart redirect system:
| Route              | Protected? |
| ------------------ | ---------- |
| `/`                | ❌ public |
| `/products`        | ❌ public (listing stays open) |
| `/products/123`    | ✅ protected (the `[id]` slug detail) |
| `/profile`         | ✅ protected |
| `/login`, `/register` | ❌ public |
 
  * Not logged in → Login page
  * After login → Back to intended page
> ⚠️ **Important:** Next.js only recognizes a file named `middleware.{js,ts}` at the project (or `src/`) root, exporting a function literally named `middleware` (or `default`). Any other name silently becomes dead code.
 
---
 
### 🔐 Authentication (BetterAuth)
## ⚙️ Local Development
 
#### Login
### Prerequisites
- Node.js 18.18+ (Next.js 16 recommends Node 20+)
- A MongoDB connection string (Atlas or local)
- Google OAuth client credentials (for the “Continue with Google” button)
 
* Email + Password
* Google Login
* Error handling
### Install & run
 
#### Register
```bash
git clone https://github.com/shihab-5/suunymart.git
cd suunymart
npm install
npm run dev
```
 
* Name, Email, Photo, Password
* Google Signup
* Redirect after success
The app starts on http://localhost:3000.
 
---
### Available scripts
| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start the Next.js dev server         |
| `npm run build`  | Production build                     |
| `npm start`      | Run the production build             |
| `npm run lint`   | ESLint check                         |
 
### 👤 Profile System
 
* View user info (name, email, image)
* Update profile (name & image)
 
---
 
## 🛠️ Tech Stack
## 🔐 Environment Variables
 
| Technology       | Role           |
| ---------------- | -------------- |
| Next.js          | Framework      |
| React            | UI Library     |
| Tailwind CSS     | Styling        |
| DaisyUI / HeroUI | Components     |
| BetterAuth       | Authentication |
| Vercel           | Deployment     |
Create a `.env.local` file in the project root:
 
---
```bash
# MongoDB
MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster>/?retryWrites=true&w=majority"
 
## 📂 Folder Structure
# BetterAuth — base URL of *this* app (used by the React client)
BETTER_AUTH_URL="http://localhost:3000"        # production: https://suunymart-orpin.vercel.app
BETTER_AUTH_SECRET="generate-a-long-random-string"
 
# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```
/app
  /home
  /products
  /profile
  /login
  /register
/components
/data
  products.json
/public
```
 
---
Add these same variables in your Vercel project settings for production. The Google OAuth redirect URI must include:
 
## 📦 NPM Packages
 
```
next
react
tailwindcss
daisyui / heroui
better-auth
animate.css / lottie-react
https://<your-domain>/api/auth/callback/google
```
 
---
 
## ⚙️ Installation
## 🧪 Manual Test Plan
 
```bash
git clone https://github.com/shihab-5/suunymart.git
cd suunymart
npm install
npm run dev
```
1. **Public browsing** — visit `/` and `/products` while logged out; both should render.
2. **Protected slug** — while logged out, visit `/products/1` → should redirect to `/login`.
3. **Profile** — while logged out, visit `/profile` → should redirect to `/login`.
4. **Email register** — create an account at `/register`; you should land back on `/`.
5. **Email login** — log in at `/login`; the navbar should show your avatar and name.
6. **Google login** — click *Login with Google*; after the OAuth redirect you should be authenticated.
7. **Detail page (logged in)** — visit `/products/1` → full product details render.
8. **Profile update** — open *Edit Profile*, change name + image URL, submit, and verify the updated values on `/profile`.
9. **Logout** — click Logout; visiting `/profile` again should redirect to `/login`.
 
---
 
## 🔐 Environment Variables
 
Create `.env.local`:
 
```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
AUTH_SECRET=your_secret
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_secret
```
 
---
 
## 🌟 Future Improvements
 
* 🛒 Add to Cart
* 💳 Payment Gateway
* 📦 Order System
* 🔍 Search & Filter
* ⭐ Reviews
- 🛒 Cart & checkout flow
- 💳 Payment gateway (Stripe / SSLCommerz)
- 🔍 Search, filtering, and category pages
- ⭐ Real reviews & ratings stored in MongoDB
- 📦 Order history per user
 
---
 
## 👨‍💻 Author
 
**Shihab Ul Islam**
CSE Student | Future ML Engineer 🚀
**Shihab Ul Islam** — CSE Student, building toward an ML engineering career.
 
---
 
## ⭐ Support
 
If you like this project:
If you find this project useful:
 
👉 Star the repo
👉 Share it
👉 Use it in your portfolio
- ⭐ Star the repo
- 🐛 Open issues for bugs / ideas
- 🍴 Fork & build your own version
 
---
 
<p align="center">🔥 Built with passion for modern web development 🔥</p>
<p align="center">🔥 Built with Next.js, BetterAuth, and a love for clean UI 🔥</p>
