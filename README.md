# AI Tool Finder – Backend API 🚀

AI Tool Finder is a backend-only REST API platform built using **Spring Boot** that allows users to discover, filter, and review AI tools.  
The system also provides **admin moderation** for reviews and maintains **automatically computed average ratings** for tools.

This project simulates a **real-world backend system** focusing on clean architecture, business logic, filtering, and role-based access.

---

## 📌 Features

### ✅ AI Tool Management
- Store AI tools with details like:
  - Name
  - Category
  - Use Case
  - Pricing Type (FREE / PAID / SUBSCRIPTION)
  - Average Rating (auto-calculated)

### ✅ Advanced Filtering
- Filter tools based on:
  - Category
  - Pricing Type (mandatory)
  - Minimum Average Rating
- Supports combined filters using query parameters

### ✅ Review & Rating System
- Users can submit **one review per tool**
- Reviews include:
  - Rating (1–5)
  - Optional comment
  - Status (PENDING / APPROVED / REJECTED)
- **Only approved reviews affect tool ratings**
- Average rating is **updated immediately on approval**

### ✅ Admin Moderation
- Admins can:
  - View pending reviews
  - Approve reviews
  - Reject reviews
- Admin APIs are clearly separated from user APIs

---

## 🏗️ Tech Stack

- **Java 17+**
- **Spring Boot**
- **Spring Data JPA**
- **JPA Specifications (Dynamic Filtering)**
- **MySQL**
- **Maven**

---

## 📂 Project Structure

src/main/java/com/example/ai_tool_finder
│
├── controller
│ ├── ToolController
│ ├── ReviewController
│ └── AdminController
│
├── service
│ ├── AdminReviewService
│ └── UserService
│
├── repository
│ ├── ToolRepository
│ ├── ReviewRepository
│ └── UserRepository
│
├── specification
│ └── ToolSpecification
│
├── model
│ ├── Tool
│ ├── Review
│ ├── User
│ ├── PricingType
│ ├── ReviewStatus
│ └── Role
│
└── AiToolFinderApplication.java

---

## 📊 Data Model Overview

### Tool
- `id`
- `name`
- `category`
- `pricingType` (FREE / PAID / SUBSCRIPTION)
- `useCase`
- `averageRating`

### Review
- `id`
- `rating` (1–5)
- `comment`
- `status` (PENDING / APPROVED / REJECTED)
- `user`
- `tool`

### User
- `id`
- `username`
- `role` (USER / ADMIN)

---

## 🔗 API Endpoints

### 🔍 Tool APIs (Public)

#### Get all tools: GET /api/tools



#### Filter tools: GET /api/tools?category=Design&pricing=FREE&minRating=4

**Notes:**
- `pricing` is mandatory
- Filters are case-sensitive
- Multiple filters can be combined

---

### ⭐ Review APIs (User)

#### Submit a review: POST /review



**Rules:**
- One review per user per tool
- Review status defaults to `PENDING`
- Rating is **not** updated until admin approval

---

### 🛠 Admin APIs: Base path:/admin

#### Get pending reviews: GET /admin/reviews/pending

#### Approve a review: POST /admin/reviews/{id}/approve


- Marks review as `APPROVED`
- Recalculates and updates tool’s average rating immediately

#### Reject a review: POST /admin/reviews/{id}/reject


- Marks review as `REJECTED`
- Does not affect tool rating

---

## ⚙️ Filtering Logic

Filtering is implemented using **Spring Data JPA Specifications**.

Supported filters:
- Category
- Pricing Type (enum-safe)
- Minimum average rating

Invalid pricing values safely return no results.

---

## 🧮 Average Rating Computation

- Ratings are **stored as derived data** on the `Tool` entity
- Recalculated only when:
  - A review is approved by an admin
- Prevents expensive recalculation on every read

---

## 🔐 Security Assumptions

- Admin APIs are protected by role checks (`Role.ADMIN`)
- Authentication is minimal and assumed for lab/demo purposes
- Future scope includes Spring Security & JWT

---

## 🧪 Database

- **MySQL**
- Relationships:
  - Tool → Reviews (unidirectional)
  - User → Reviews (unidirectional)

---

## 👥 Team Responsibilities

- **API Design:** Tool & Review endpoints
- **Filtering Logic:** JPA Specifications
- **Rating Computation:** Average rating updates
- **Admin Moderation:** Review approval/rejection
- **Testing & Documentation:** API testing and README

---

## 📌 Future Enhancements

- Authentication & Authorization (JWT)
- Pagination & sorting
- Search by tool name
- Caching for frequent queries
- Review edit/delete by users

---

## 🧑‍💻 How to Run

1. Configure MySQL in `application.properties`
2. Build the project:mvn clean install
3. Run the application:mvn spring-boot:run

---

## 📄 License

This project is developed for educational and lab purposes.


