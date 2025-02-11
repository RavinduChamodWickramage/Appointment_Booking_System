import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { isAuthenticated } from "./utils/auth";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import AvailableSlotsPage from "./components/AvailableSlotsPage";
import BookAppointmentPage from "./components/BookAppointmentPage";
import AppointmentsPage from "./components/AppointmentsPage";
import AdminAppointmentsPage from "./components/AdminAppointmentsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={!isAuthenticated() ? <LoginPage /> : <AvailableSlotsPage />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated() ? <SignupPage /> : <AvailableSlotsPage />}
        />
        <Route
          path="/slots"
          element={isAuthenticated() ? <AvailableSlotsPage /> : <LoginPage />}
        />
        <Route
          path="/book"
          element={isAuthenticated() ? <BookAppointmentPage /> : <LoginPage />}
        />
        <Route
          path="/appointments"
          element={isAuthenticated() ? <AppointmentsPage /> : <LoginPage />}
        />
        <Route
          path="/admin/appointments"
          element={
            isAuthenticated() ? <AdminAppointmentsPage /> : <LoginPage />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
