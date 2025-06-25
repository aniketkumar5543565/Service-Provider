# Service-Provider
Project made by our group in Software Engineering Course

A full-stack marketplace application built with MongoDB, Express.js, React.js, and Node.js — designed to connect customers with local service providers (e.g., electricians, plumbers, carpenters). Offers features like user registration, service listings, bookings, dashboards, reviews, and notifications.

## ✨ Features
- User roles: Customer and Service Provider

- Authentication: Secure signup/login using JWT

- Service listings: Providers can create and manage service offers

- Search & filter: Customers search providers by category and location

- Booking system: Customers request services; providers can accept/reject

- Dashboards:

- Customers: view bookings, request history, leave reviews

- Providers: manage incoming requests, bookings, and reviews

- Reviews & ratings: Customers can review completed services

- Profile management: Users can edit their profiles and avatars

- (Planned): Payment integration, real-time notifications, messaging

## 📂 Tech Stack
- Frontend: React.js, CSS (or Tailwind/Bootstrap)

- Backend: Node.js, Express.js

- Database: MongoDB

- Authentication: JSON Web Tokens (JWT)

- State Management: React Context API or Redux (optional)

- Dev Tools: nodemon, concurrently

- 🚀 Getting Started
Prerequisites
Node.js >= 14.x

MongoDB (local or Atlas)

npm or yarn

Installation
Clone the repo:

```
git clone https://github.com/aniketkumar5543565/Service-Provider.git
cd Service-Provider
```
Setup backend dependencies and config:

```
cd backend
npm install
Create a .env file with:
```

```
MONGO_URI=<your_mongo_db_uri>
JWT_SECRET=<your_jwt_secret>
```
Setup frontend dependencies:

```
cd ../frontend
npm install
Run both projects concurrently:
```

```
cd ..
npm install concurrently --save-dev
```

Add in root package.json:

```
"scripts": {
  "client": "cd frontend && npm start",
  "server": "cd backend && npm run dev",
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```
Then run:

```
npm run dev
http://localhost:3000 to view the app and use http://localhost:5000/api for backend APIs.
```

## 🧩 Project Structure

backend/
├─ controllers/        # Business logic for auth, users, services, bookings
├─ models/             # Mongoose schemas
├─ routes/             # API route definitions
├─ middleware/         # Auth, error handlers
└─ server.js           # App entry point

frontend/
├─ src/
│  ├─ components/       # Reusable UI elements
│  ├─ pages/            # Route components (Home, Dashboard, Login, etc.)
│  ├─ context/          # Global state (auth, bookings)
│  ├─ services/         # API wrapper functions
│  ├─ App.js            # Routing setup
│  └─ index.js          # App bootstrap
└─ public/              # HTML & static assets
## 🔧 API Endpoints (Summary)
Endpoint	Method	Description
/api/auth/register	POST	Register as customer or provider
/api/auth/login	POST	Authenticate and receive JWT
/api/services	GET	Get all services
/api/services	POST	Provider adds a new service
/api/services/:id	GET	Get details for a service
/api/bookings	POST	Customer books a service
/api/bookings/:id/respond	POST	Provider accepts/rejects booking
/api/bookings/user/:userId	GET	View bookings history
/api/reviews	POST	Customer leaves a review

## 🛠️ Available Scripts
In both frontend and backend, you’ll find scripts like:
```
npm start — Run production server/app

npm run dev — Run with hot-reloading (backend only)

npm test — Run tests (if added)
```
And in the root package.json:
```
npm run client — Start frontend

npm run server — Start backend

npm run dev — Start both concurrently
```

## ✅ Future Enhancements
- Payment integration (Stripe/PayPal)

- Real-time notifications via WebSockets

- In-app messaging between users

- Location-based service search (Google Maps)

Admin panel to manage users/services

Enhanced UI/UX with animations

🎯 Contributing
Fork the repo

Create a feature branch (git checkout -b feature/xyz)

Commit changes (git commit -m "feat: add xyz")

Push to branch (git push origin feature/xyz)

Open a Pull Request

📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

🙌 Acknowledgements
MERN stack documentation

Developer community tutorials

Inspired by similar service-provider projects on GitHub
