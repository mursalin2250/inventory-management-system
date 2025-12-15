Inventory Management System – Backend (MERN)

This repository contains the backend implementation of an Inventory Management System built using the MERN stack. It provides RESTful APIs for managing products, suppliers, and users, along with authentication and error handling.
This project is backend-only and is intended to be consumed by a separate frontend application.

Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- dotenv

Features
- User authentication and authorization
- Product management (CRUD operations)
- Supplier management (CRUD operations)
- Modular and scalable architecture
- Centralized error handling
- JWT-based route protection

Clean separation of controllers, services, routes, and models

Project Structure
src/
├── config/
│   ├── db.js
│   └── envConfig.js
│
├── middleware/
│   ├── auth.middleware.js
│   └── error.middleware.js
│
├── module/
│   ├── product/
│   │   ├── product.controller.js
│   │   ├── product.model.js
│   │   ├── product.route.js
│   │   └── product.service.js
│   │
│   ├── supplier/
│   │   ├── supplier.controller.js
│   │   ├── supplier.model.js
│   │   ├── supplier.route.js
│   │   └── supplier.service.js
│   │
│   └── user/
│       ├── user.controller.js
│       ├── user.model.js
│       ├── user.route.js
│       └── user.service.js
│
├── utils/
│   ├── jwt.js
│   └── password.js
│
├── app.js
└── server.js

.env
.gitignore
package.json
package-lock.json

Installation & Setup

Clone the repository:

git clone https://github.com/your-username/inventory-management-backend.git


Navigate to the project directory:

cd inventory-management-backend


Install dependencies:

npm install


Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start the server:

npm run dev


or

npm start

API Modules
User Module

User registration

User login

JWT-based authentication

Product Module

Create product

Update product

Delete product

Fetch products

Supplier Module

Create supplier

Update supplier

Delete supplier

Fetch suppliers

API routes are organized by module and registered in app.js.

Middleware

auth.middleware.js – Protects routes using JWT authentication

error.middleware.js – Centralized error handling

Utilities

jwt.js – Token generation and verification

password.js – Password hashing and comparison

Usage

Use Postman or Insomnia to test API endpoints

Connect this backend to a frontend (e.g., React)

Ensure MongoDB is running locally or via MongoDB Atlas

Future Enhancements

Role-based access control (Admin / Staff)

Inventory analytics and reports

Low-stock alerts

API documentation using Swagger

Pagination and filtering

License

This project is licensed under the MIT License.

Note

This repository contains backend code only.
The frontend is not included and must be implemented separately.
