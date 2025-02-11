import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Appointment Booking
        </Link>
        <div>
          <Link to="/" className="text-white mx-4">
            Home
          </Link>
          {isAuthenticated() ? (
            <>
              <Link to="/appointments" className="text-white mx-4">
                Appointments
              </Link>
              <Link to="/book" className="text-white mx-4">
                Book Appointment
              </Link>
              <Link to="/logout" className="text-white mx-4">
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white mx-4">
                Login
              </Link>
              <Link to="/signup" className="text-white mx-4">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
