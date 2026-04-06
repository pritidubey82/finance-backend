# 🚀 Finance Dashboard Backend API

## 📌 Project Overview
This project is a Finance Dashboard Backend System designed to manage financial records with Role-Based Access Control (RBAC).

It allows different users (Admin, Analyst, Viewer) to interact with financial data based on their permissions. The system provides APIs for managing users, financial transactions, and dashboard analytics.

The goal of this project is to demonstrate backend development skills including API design, database modeling, authentication, and access control.

---

## 🛠️ Tech Stack
- Backend: Node.js, Express.js  
- Database: MongoDB (Mongoose)  
- Authentication: JWT (JSON Web Token)  
- API Testing: Postman  
- Tools: Nodemon, dotenv  

---

## ✨ Features

### 👤 User & Role Management
- Create users  
- Assign roles (Admin, Analyst, Viewer)  
- Activate/Deactivate users  
- Role-based permission system  

### 💰 Financial Records Management
- Create records  
- Get all records  
- Update records  
- Delete records  

#### Fields:
- Amount  
- Type (Income / Expense)  
- Category  
- Date  
- Description  

### 📊 Dashboard APIs
- Total Income  
- Total Expenses  
- Net Balance  
- Category-wise summary  
- Recent transactions  

### 🔐 Role-Based Access Control
- Admin → Full access  
- Analyst → Read + Analytics  
- Viewer → Read only  

### ✅ Validation & Error Handling
- Input validation  
- Proper HTTP status codes  
- Error messages  

### 💾 Data Persistence
- MongoDB used for storing users and financial records  

---

## 📁 Project Structure
project-root/
│
├── config/
│ └── db.js
│
├── models/
│ ├── User.js
│ └── Record.js
│
├── routes/
│ ├── userroute.js
│ ├── recordroute.js
│ └── dashboardroute.js
│
├── middleware/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
│
├── controllers/
│ ├── userController.js
│ ├── recordController.js
│ └── dashboardController.js
│
├── server.js
├── .env
└── package.json



---

## ⚙️ Installation & Setup

### 1. Clone Repository
```
git clone https://github.com/pritidubey82/finance-dashboard-backend.git
cd finance-dashboard-backend
```

 ### 2.Setup Environment Variables

Create a .env file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
### 4. Run Server
```
npm run dev
```

## Server runs at:
```
http://localhost:5000
```

### 🔗 API Endpoints

## User Routes
Create Record

```
POST http://localhost:5000/api/records
```
Get records

```
GET http://localhost:5000/api/records
```

Update Record
```
PUT http://localhost:5000/api/records/<ID>
```
Delete Record 

```
DELETE http://localhost:5000/api/records/<ID>
```




