# Tool Review App

A full-stack web application for discovering AI tools and managing user reviews, built with **Spring Boot** (backend) and **React** (frontend).  
The system supports **role-based access** with separate dashboards for **Admins** and **Users**, including a review moderation workflow.

---

## Features

### Authentication & Roles
- Simple username/password login (demo-level, no JWT or session management)
- Role-based navigation:
  - **ADMIN**
  - **USER**

> This authentication approach is intentionally lightweight and **not production-ready**.

---

### Admin Features
- Add new AI tools
- View all existing tools with:
  - Category
  - Pricing type
  - Use case
  - Average rating
- Review moderation:
  - View **PENDING** reviews
  - **Approve** or **Reject** reviews
- Approved reviews automatically update tool average ratings

---

### User Features
- Browse AI tools
- Filter tools by:
  - Category
  - Minimum average rating
- View approved reviews for each tool
- Submit reviews (rating + comment)
  - Reviews are visible only after admin approval

---

## Screenshots

> Place screenshots inside a `screenshots/` folder in the repository.

- `screenshots/login.png` – Login screen  
- `screenshots/admin-manage-tools.png` – Admin tool management  
- `screenshots/admin-pending-reviews.png` – Admin review moderation  
- `screenshots/user-dashboard.png` – User dashboard with filters  
- `screenshots/tool-reviews.png` – Reviews and review submission  

---

## Tech Stack

### Backend
- Java 17+
- Spring Boot
- Spring Web (REST APIs)
- Spring Data JPA
- Hibernate
- MySQL
- Maven

### Frontend
- React (Create React App)
- JavaScript (ES6+)
- Fetch API
- Plain CSS (dark theme)

---

## Backend Architecture

src/main/java/com/example/ai_tool_finder
├── controller
├── service
├── repository
├── model
├── dto
├── exception
└── specification

### Backend Highlights
- DTO-based API design
- Global exception handling
- JPA Specifications for dynamic filtering
- Enum-driven state management (`PENDING`, `APPROVED`, `REJECTED`)
- Proper entity relationships:
  - User ↔ Review ↔ Tool

---

## Frontend Architecture

src/
├── components
│ ├── Login.jsx
│ ├── AdminDashboard.jsx
│ ├── UserDashboard.jsx
│ └── ToolReviews.jsx
├── api.js
├── App.js
└── index.js


### Frontend Notes
- Role stored in `localStorage` after login
- Backend base URL configured via environment variables
- No routing library; navigation is state-driven

---

## Environment Setup

### Backend (`application.properties`)

spring.datasource.url=jdbc:mysql://localhost:3306/tool_review_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

---

### Frontend (`.env`)
REACT_APP_API_BASE_URL=http://localhost:8080

---

## Running the Application

### Backend
Backend runs on: `http://localhost:8080`

---

### Frontend
Frontend runs on: `http://localhost:3000`

---

## API Overview

### Authentication
- `POST /login`

### Tools
- `GET /tools`
- `POST /admin/tools`
- `GET /tools/filter`

### Reviews
- `POST /reviews`
- `GET /tools/{id}/reviews`
- `GET /admin/reviews/pending`
- `POST /admin/reviews/{id}/approve`
- `POST /admin/reviews/{id}/reject`

---

## Known Limitations

- No Spring Security or JWT
- Passwords are not encrypted
- No pagination or sorting
- No deployment configuration
- Minimal frontend styling

This project is intended for **learning and demonstration purposes**, not production use.
