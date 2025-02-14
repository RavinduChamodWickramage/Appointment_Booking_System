# Appointment Booking System

A full-stack web application for managing appointments with user authentication and role-based access control.

## Features

### User Features
- User registration and login with JWT authentication
- View available time slots
- Book/Cancel appointments
- View/Cancel upcoming appointments

### Admin Features
- View all appointments
- Manage appointments (full CRUD)

## Technologies Used

### Backend (Spring Boot)
- Java 17
- Spring Boot 3.3.5
- Spring Security
- JWT Authentication
- Spring Data JPA
- MySQL Database
- Maven

### Frontend (React)
- React 18
- React Router
- Axios for API calls
- Tailwind CSS
- React Calendar

## Installation

### Prerequisites
- Java 17 JDK
- Maven 3.8+
- MySQL 8.0+
- Node.js 16+
- npm 8+

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/RavinduChamodWickramage/Appointment_Booking_System.git
   ```
2. Create MySQL database:
    ```bash
    CREATE DATABASE appointment_db;
    ```
3. Configure environment variables:
    Create .env file in src/main/resources:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to frontend directory
2. Install dependencies
3. Start development server
   ```bash
   npm run dev
   ```

### Configuration

**Backend Configuration**

Update application.yml with your database credentials:
```bash
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/appointment_db
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
```

**Frontend Configuration**

Ensure API base URL is correct in src/services/api.js
```bash
const API_BASE_URL = "http://localhost:8080";
```

### API Endpoints

POST  	  /auth/login	                User login
POST  	  /auth/sign-up	              User registration
GET    	  /slots	                    Get available slots
GET    	  /api/appointments	          Get user appointments
POST  	  /api/appointments	          Create new appointment
DELETE	  /api/appointments/{id}	    Cancel appointment
GET    	  /api/admin/appointments	    Get all appointments (Admin)

### Troubleshooting

Common Issues:

**Database Connection Errors**: Verify MySQL credentials and ensure MySQL service is running

**JWT Errors**: Ensure consistent JWT_SECRET between server restarts

**CORS Errors**: Verify client URL in WebSecurityConfiguration.java

**Port Conflicts**: Check for processes using ports 8080 (backend) and 5173 (frontend)
