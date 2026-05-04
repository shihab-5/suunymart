# 🌞 SuunyMart – Summer eCommerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-Framework-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/DaisyUI-Components-5A0EF8?style=for-the-badge" />
  <img src="https://img.shields.io/badge/BetterAuth-Auth-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" />
</p>

<p align="center">
  <a href="https://suunymart-orpin.vercel.app/">
    <img src="https://img.shields.io/badge/🌐 Live Site-Visit Now-success?style=for-the-badge" />
  </a>
  <a href="https://github.com/shihab-5/suunymart">
    <img src="https://img.shields.io/badge/📂 Repository-View Code-blue?style=for-the-badge" />
  </a>
</p>

---

## 🌴 Project Overview

**SuunyMart** is a modern, responsive summer-themed eCommerce platform where users can explore and purchase seasonal products like:

* 🕶️ Sunglasses
* 👕 Summer outfits
* 🧴 Skincare
* 🏖️ Beach accessories

Built with performance, clean UI, and authentication in mind.

---

## ✨ UI Preview (Add Your Screenshots Here)

### 🏠 Home Page

![Home Screenshot](https://via.placeholder.com/900x500.png?text=Home+Page+Preview)

### 📦 Product Section

![Products Screenshot](https://via.placeholder.com/900x500.png?text=Products+Preview)

### 🔐 Authentication

![Auth Screenshot](https://via.placeholder.com/900x500.png?text=Login+Register+Preview)

---

## 🎬 Demo GIF (Optional but Recommended)

> Replace with your own screen recording GIF (use tools like ScreenToGif)

![Demo GIF](https://via.placeholder.com/900x500.gif?text=App+Demo+GIF)

---

## 🚀 Features

### 🧭 Navigation System

* Dynamic Navbar (Login/Register vs Avatar/Logout)
* Persistent layout (Navbar + Footer)
* Route-based navigation (Next.js App Router)

---

### 🏠 Home Page

* 🌅 Hero Banner (Summer Sale)
* 🔥 Popular Products (Top 3)
* 💡 Summer Care Tips
* 🏷️ Top Brands Section

---

### 📦 Products

* Static JSON data (6+ products)
* Product Cards:

  * Image
  * Name
  * Rating ⭐
  * Price 💲
  * Details button

---

### 🔒 Protected Routes

* Product details require login
* Smart redirect system:

  * Not logged in → Login page
  * After login → Back to intended page

---

### 🔐 Authentication (BetterAuth)

#### Login

* Email + Password
* Google Login
* Error handling

#### Register

* Name, Email, Photo, Password
* Google Signup
* Redirect after success

---

### 👤 Profile System

* View user info (name, email, image)
* Update profile (name & image)

---

## 🛠️ Tech Stack

| Technology       | Role           |
| ---------------- | -------------- |
| Next.js          | Framework      |
| React            | UI Library     |
| Tailwind CSS     | Styling        |
| DaisyUI / HeroUI | Components     |
| BetterAuth       | Authentication |
| Vercel           | Deployment     |

---

## 📂 Folder Structure

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

## 📦 NPM Packages

```
next
react
tailwindcss
daisyui / heroui
better-auth
animate.css / lottie-react
```

---

## ⚙️ Installation

```bash
git clone https://github.com/shihab-5/suunymart.git
cd suunymart
npm install
npm run dev
```

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

---

## 👨‍💻 Author

**Shihab Ul Islam**
CSE Student | Future ML Engineer 🚀

---

## ⭐ Support

If you like this project:

👉 Star the repo
👉 Share it
👉 Use it in your portfolio

---

<p align="center">🔥 Built with passion for modern web development 🔥</p>
