# TrueReview – Service Review System

**Live Site**: [https://true-review-3d3e3.web.app](https://true-review-3d3e3.web.app)  
**Server URL**: [https://true-review-server.vercel.app](https://true-review-server.vercel.app)

---

## 📌 Project Overview

**TrueReview** is a Service Review Application designed to let users discover, post, and review various services. It offers a seamless and interactive experience for users to share their opinions, manage services, and engage with reviews in a secure environment. Built with modern web technologies, TrueReview emphasizes real-time data handling, user authentication, and clean UI/UX design.

---

## 🎯 Purpose

The goal of this project is to develop a real-world service review platform that allows users to:

- Add, update, and delete services
- Post detailed reviews with ratings
- Manage their personal review contributions
- Explore service details and community feedback

This project provides practical experience in full-stack development, integrating Firebase for authentication, and building RESTful APIs for backend communication.

---

## ✅ Key Features

- 🔐 **User Authentication** – Secure login and registration with Firebase Auth.
- 📝 **Service Management** – Authenticated users can add new services, edit service info, or delete them.
- 🌟 **Review System** – Logged-in users can post, update, or delete reviews for any service.
- 👤 **My Reviews Page** – View and manage all your submitted reviews in one place.
- 📄 **Service Details Page** – Explore ratings and textual feedback posted by the community.
- 🔍 **Protected Routes** – Pages like Add Service, My Services, and My Reviews are protected for logged-in users only.
- 📊 **Statistics Section** – Visual display of platform data (like total users or reviews).
- 🎨 **Modern UI** – Responsive and animated interface built with TailwindCSS and Framer Motion.
- ⚡ **Realtime Feedback** – Toast messages and SweetAlert confirmations for a smooth user experience.

---

## 🧰 Tech Stack

### 🔹 Frontend
- **React 19**
- **React Router 7**
- **Tailwind CSS 4**
- **Firebase Authentication**
- **Vite** for fast builds
- **Axios** for API calls

### 🔹 Backend
- **Express 5**
- **MongoDB**
- **Firebase Admin SDK** – For verifying ID tokens securely.
- **dotenv** – For managing environment variables.
- **CORS** – To handle cross-origin resource sharing.

---

## 📦 Client-Side Dependencies

```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@smastrom/react-rating": "^1.5.0",
  "@tailwindcss/vite": "^4.1.11",
  "aos": "^2.3.4",
  "axios": "^1.10.0",
  "firebase": "^11.10.0",
  "framer-motion": "^12.23.6",
  "hamburger-react": "^2.5.2",
  "lottie-react": "^2.4.1",
  "motion": "^12.23.5",
  "next-themes": "^0.4.6",
  "react": "^19.1.0",
  "react-countup": "^6.5.3",
  "react-dom": "^19.1.0",
  "react-fast-marquee": "^1.6.5",
  "react-helmet-async": "^2.0.5",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.3",
  "react-spinners": "^0.17.0",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.22.2",
  "swiper": "^11.2.10",
  "tailwindcss": "^4.1.11"
}


## 📦 Server-Side Dependencies

```json
{
  "cors": "^2.8.5",
  "dotenv": "^17.2.0",
  "express": "^5.1.0",
  "firebase-admin": "^13.4.0",
  "mongodb": "^6.17.0"
}
