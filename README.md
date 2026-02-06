# HomeEase

HomeEase is a full-stack household services marketplace connecting customers with verified service providers for plumbing, electrical work, cleaning, carpentry, and more.

## Tech Stack
- **Frontend:** React + Tailwind CSS (Vite)
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Auth:** JWT-based authentication
- **Architecture:** MVC + REST API

## Project Structure
```
HomeEase/
├── backend/
│   ├── src/
│   │   ├── config/         # Database connection
│   │   ├── controllers/    # Route controllers
│   │   ├── middleware/     # Auth, validation, errors
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   ├── seed/           # Seed data
│   │   └── utils/          # Helpers
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # App pages
│   │   ├── services/       # API client
│   │   └── styles/         # Tailwind styles
│   ├── index.html
│   └── package.json
└── README.md
```

## Setup
### 1) Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 3) Seed sample data
```bash
cd backend
npm run seed
```

## Environment Variables
**backend/.env**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/homeease
JWT_SECRET=replace_with_strong_secret
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

## API Modules
- **Auth:** `/api/auth`
- **Users:** `/api/users`
- **Providers:** `/api/providers`
- **Bookings:** `/api/bookings`
- **Reviews:** `/api/reviews`
- **Admin:** `/api/admin`

## Sample API Requests
### Register (Customer)
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Customer","email":"customer@example.com","password":"password123","role":"customer"}'
```

### Register (Provider)
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Provider","email":"provider@example.com","password":"password123","role":"provider","skills":["Pipe repair"],"pricing":{"Pipe repair":120}}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"customer@example.com","password":"password123"}'
```

### List Providers (Search)
```bash
curl "http://localhost:5000/api/users/providers?service=plumbing&location=Austin"
```

### Create Booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"providerId":"<PROVIDER_ID>","serviceCategory":"<CATEGORY_ID>","date":"2024-08-01","timeSlot":"10:00 AM - 12:00 PM","estimatedPrice":120,"location":"Austin"}'
```

### Leave Review
```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <TOKEN>" \
  -d '{"bookingId":"<BOOKING_ID>","providerId":"<PROVIDER_ID>","rating":5,"comment":"Great service"}'
```

## Notes
- The backend follows MVC with centralized error handling and validation.
- Role-based authorization protects provider and admin endpoints.
- The frontend includes separate dashboards for customers, providers, and admins, plus a booking flow UI.
