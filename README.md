# 🌿 Verdantia – Connect, Grow, Share

**Verdantia** is a vibrant gardening community platform where users can share tips, explore plant care advice, connect with local gardeners, and participate in green events. Whether you're a casual houseplant parent or a hydroponic hobbyist, Verdantia helps you grow more than just plants — it helps you grow a community.

---

## 🌐 Live Site

🔗 [https://garden-825e1.web.app/](https://garden-825e1.web.app/)

---

## 🖼️ Screenshot

> *(Add a screenshot like below in your repo)*  
> `![Verdantia Screenshot](./assets/screenshot.png)`

---

## ✨ Key Features

- 🌱 **Tip Sharing** – Add, edit, and manage plant care tips with difficulty levels and categories
- 🧑‍🌾 **Gardener Directory** – Discover local gardeners with profiles and experience badges
- ❓ **Q&A Section** – Ask and answer questions in the community  
- 📅 **Event Hub** – Post or join local events like plant swaps or composting workshops  
- 🪴 **Interest-Based Filtering** – Explore content by niche interest (hydroponics, composting, balcony gardening)
- 🌗 **Dark Mode Support** – Toggle between light and dark themes using DaisyUI  
- 🔐 **JWT Protected Routes** – Only logged-in users can add or edit tips  
- 🔍 **Filter & Search** – Filter by difficulty, category; search tips by keyword  
- 🔄 **Real-time Feedback** – Toasts, modals, spinners, and success alerts  
- 📱 **Responsive Design** – Fully responsive for mobile, tablet, and desktop  

---

## 📋 Project Description

**Verdantia** is a full-stack gardening resource hub crafted for plant lovers. It combines social features (profiles, events, Q&A) with utility (tip management, filtering, dark mode) to create a joyful user experience. Built using **React**, **Tailwind CSS**, **Firebase**, **MongoDB**, and **JWT**, Verdantia connects users through their shared love of nature — one tip, event, and question at a time.

---

## 🧩 Core Technologies

### 💻 Frontend:
- React.js  
- Tailwind CSS + DaisyUI  
- React Router DOM  
- Framer Motion  
- Firebase Authentication  
- Axios  
- React Toastify  
- Dark/Light Theme Toggle  

### ⚙ Backend:
- Express.js  
- MongoDB (MongoDB Atlas)  
- JWT (JSON Web Tokens)  
- dotenv, cors  

---

## 📦 Dependencies with Versions

### 🔹 Client-side

```json
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-router-dom": "^6.23.1",
"firebase": "^10.12.1",
"axios": "^1.6.7",
"tailwindcss": "^3.4.1",
"daisyui": "^4.6.0",
"react-toastify": "^10.0.4",
"framer-motion": "^10.18.1",
"react-icons": "^5.2.1",
"vite": "^5.2.10"
🔹 Server-side

"express": "^4.18.2",
"cors": "^2.8.5",
"dotenv": "^16.4.5",
"mongodb": "^6.5.0",
"jsonwebtoken": "^9.0.2"

🧪 How to Run Locally
🔧 Client Setup

git clone https://github.com/LamiyaRK/verdantia-client.git
cd verdantia-client
npm install
npm run dev
Create a .env file in the root:

VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_BASE_URL=https://verdantia-server.vercel.app

⚙ Server Setup

git clone https://github.com/your-username/verdantia-server.git
cd verdantia-server
npm install
npm run start
Create a .env file in the server root:

PORT=5000
MONGODB_URI=your_mongodb_uri