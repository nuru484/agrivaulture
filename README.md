# 🌾 Agrivaulture – Smart Agriculture Management Platform

**Agrivaulture** is an intelligent agriculture companion built for modern farmers. It provides **real-time weather insights**, **crop activity tracking**, **commodity price updates**, and **personalized farming guidance** using historical data analytics.

Admins can share critical announcements and productivity tips, while farmers enjoy a streamlined system that supports smarter decisions and better yields.

---

## 📚 Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Architecture Overview](#-architecture-overview)
* [Screenshots](#-screenshots)
* [Getting Started](#-getting-started)
* [Environment Variables](#-environment-variables)
* [Usage](#-usage)
* [Project Structure](#-project-structure)
* [Deployment](#-deployment)
* [Contributing](#-contributing)
* [License](#-license)
* [Author](#-author)

---

## ✨ Features

### 🧑‍🌾 Farmer Experience

* Self-registration for quick onboarding.
* Personalized dashboard with:

  * Weather data and forecasts per region.
  * Real-time commodity price updates.
  * Posted tips and farming guidance from admins.
* Digital crop cycle tracking:

  * Log activities and progress across seasons.
  * Review history and insights to improve future yield.
* Image uploads for farm records stored via **Cloudinary**.

### 🛡️ Admin Capabilities

* Review entire farming network.
* Post agricultural tips, announcements, and alerts.
* Manage platform-level content.

### 🧠 Smart Insights *(coming alive with data!)*

* Predictive feedback based on crop history.
* Seasonal patterns and suggestions for better planning.

### 🔐 Authentication & Security

* Cookie-based JWT authentication.
* Protected routes for farmers and admins.
* Secure media handling for uploads.

---

## 🛠️ Tech Stack

| Layer                | Technology                                   |
| -------------------- | -------------------------------------------- |
| **Frontend**         | Next.js (TypeScript), TailwindCSS, shadcn/ui |
| **State Management** | Redux Toolkit                                |
| **Validation**       | Zod                                          |
| **Backend**          | Node.js, Express.js (TypeScript)             |
| **Database**         | PostgreSQL + Prisma ORM                      |
| **Auth**             | JWT + Cookies                                |
| **File Storage**     | Cloudinary                                   |
| **Deployment**       | Render                                       |

---

## 🏗️ Architecture Overview

Farmer & Admin UI (Next.js)
↓
REST API (Express.js + TypeScript)
↓
PostgreSQL + Prisma ORM

External APIs:
• Open Weather API
• Commodity market updates

File storage: Cloudinary

---

## 🖼️ Screenshots

| Section          | Image                                                 |
| ---------------- | ----------------------------------------------------- |
| Farmer Dashboard | ![Farmer Dashboard](public/docs/farmer-dashboard.png) |
| Admin Dashboard  | ![Admin Dashboard](public/docs/admin-dashboard.png)   |


---

## 🚀 Getting Started

### Prerequisites

* **Node.js** >= 18
* **PostgreSQL** >= 14

### Installation

```bash
# Clone the project
git clone git@github.com:your-username/agrivaulture.git
cd agrivaulture

# Install dependencies (root includes both client and server)
npm install
```

### Database Setup

```bash
# Initialize database using Prisma migrations
npm run migrate
```

### Running the Application

```bash
# Development mode (both client & server)
npm run dev

# Production mode
npm run build
npm start
```

Runs on default:
👉 [http://localhost:3000](http://localhost:3000) *(Frontend)*
👉 [http://localhost:5000](http://localhost:8080) *(API)*

---

## 🔐 Environment Variables

Create `.env` files for **both** frontend and backend based on the provided samples env.example file:

---

## ▶️ Usage

* Farmers sign up and access personalized tools.
* Admins log in to manage tips and insights.
* System processes data to generate smart suggestions over time.

---

## 📦 Project Structure

```
agrivaulture/
│
├── client/        # Next.js frontend
│   ├── components/
│   ├── redux/
│   └── app/
│
├── server/        # Express.js backend
│   ├── prisma/
│   ├── src/
│   └── types/
│
└── public/docs/   # Screenshots & docs
```

---

## 🌐 Deployment

Live Demo: [https://agrivaulture.manuru.dev/](https://agrivaulture.manuru.dev/)

Hosted on **Render**, with managed PostgreSQL + Cloudinary for media.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to:

- **Fork** the repository
- **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- **Commit your changes** (`git commit -m 'Add some amazing feature'`)
- **Push to the branch** (`git push origin feature/amazing-feature`)
- **Open a Pull Request**

Please ensure your code follows the project's style guidelines and includes appropriate tests where applicable.

For major changes, please open an issue first to discuss what you would like to change.

📩 Questions or suggestions?
**[abdulmajeednurudeen47@gmail.com](mailto:abdulmajeednurudeen47@gmail.com)**

---

## 🧾 License

**MIT License**

Copyright (c) 2025 Nurudeen Abdul-Majeed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## 🧠 Author

**Developer:** Nurudeen Abdul-Majeed  

**Email:** [abdulmajeednurudeen47@gmail.com](mailto:abdulmajeednurudeen47@gmail.com)  

---
