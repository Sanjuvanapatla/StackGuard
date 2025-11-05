# 🛡️ StackGuard Frontend

A secure frontend application built with **React (Vite)** and **Tailwind CSS**, implementing a complete authentication and configuration flow inspired by the StackGuard design.

Deployed on **Vercel** → 🔗 [Live Demo](https://stackguard-frontend-yourname.vercel.app)

GitHub Repository → 🔗 [View Source](https://github.com/yourusername/stackguard-frontend)

---

## 🚀 Features

### 🔐 1. User Authentication (Public Route)
- Toggle between **Sign In** and **Sign Up**
- Input validation:
  - Email format validation
  - Password must be ≥ 6 characters
  - Confirm password match
- Data stored in browser `localStorage` (for demo)

### ⚙️ 2. Configuration Page (Protected Route)
- Accessible only after login
- Accepts a **configuration key** between **100 and 1000 characters**
- Shows validation messages for invalid key lengths

### 📊 3. Dashboard Page (Private Route)
- Accessible only after valid configuration
- Displays confirmation message and truncated key
- Includes “Back to Config” and “Sign Out” buttons

---

## 🎨 Design Reference
- Based on the provided **Figma design**
  - Color: `#44087D` (primary)
  - Centered layout with rounded card and subtle shadows
- Styled using **Tailwind CSS** (`v3.3.3`)

Figma Link → [StackGuard Design](https://www.figma.com/design/ZaJtOkR5AQxfic3cNhgCjN/Untitled?node-id=0-1&t=hghlYCOrIqMnRGCm-1)

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| Framework | React + Vite |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| State | useState / useEffect |
| Deployment | Vercel |

---

## 🗂️ Folder Structure

stackguard-frontend/
├── public/
│ └── logo.svg
├── src/
│ ├── components/
│ │ └── ProtectedRoute.jsx
│ ├── pages/
│ │ ├── AuthPage.jsx
│ │ ├── ConfigPage.jsx
│ │ ├── DashboardPage.jsx
│ │ └── HomePage.jsx
│ ├── utils/
│ │ └── auth.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


---

## ⚙️ Local Setup

### 🪜 1. Clone the repo
```bash
git clone https://github.com/yourusername/stackguard-frontend.git
cd stackguard-frontend

🪜 2. Install dependencies
npm install

🪜 3. Start local server
npm run dev


App runs on → http://localhost:5173

🔁 Application Flow
Step	Page	Route	Access
1️⃣	Sign-In / Sign-Up	/auth	Public
2️⃣	Configuration	/config	Protected
3️⃣	Dashboard	/dashboard	Private

Flow:
Sign Up → Redirect to Config → Enter Valid Key → Redirect to Dashboard → Sign Out → Sign In Again ✅

🧠 Example Config Key (for testing)

You can use this key (120 chars long):

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

💡 Bonus Features

Input validation and clean error handling

Responsive layout (works on all screen sizes)

Consistent color palette and typography

LocalStorage-based session persistence

Smooth UX with route protection

🌍 Deployment (Vercel)

Push the code to your GitHub repo.

Go to Vercel
, click “New Project” → “Import Git Repository.”

Select this repository.

Vercel will auto-detect Vite + React and deploy automatically.

Live URL example:

https://stackguard-frontend-yourname.vercel.app

🧑‍💻 Author

Sanjay Kumar Vanapatla
Frontend Developer | React & Tailwind Enthusiast
📧 vanapatlasanju55236@gmail.com


