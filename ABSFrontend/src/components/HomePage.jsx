import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to the Appointment Booking System
        </h1>
        <p className="text-lg mb-8">
          Easily book your appointments, view available time slots, and manage
          your bookings with ease.
        </p>
        <div>
          <Link
            to="/slots"
            className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700"
          >
            View Available Slots
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
