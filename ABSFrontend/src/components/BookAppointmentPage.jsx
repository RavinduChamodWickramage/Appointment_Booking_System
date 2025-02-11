import { useState } from "react";
import { bookAppointment } from "../services/api";
import { useNavigate } from "react-router-dom";

const BookAppointmentPage = () => {
  const [slot, setSlot] = useState("");
  const [userDetails, setUserDetails] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBooking = async () => {
    try {
      const appointmentDetails = { appointmentDateTime: slot, userDetails };
      await bookAppointment(appointmentDetails);
      navigate("/appointments"); // Redirect to appointments page
    } catch (err) {
      setError("Failed to book appointment");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
      <input
        type="datetime-local"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        value={slot}
        onChange={(e) => setSlot(e.target.value)}
      />
      <input
        type="text"
        className="block w-full mb-4 p-2 border border-gray-300 rounded"
        placeholder="User Details"
        value={userDetails}
        onChange={(e) => setUserDetails(e.target.value)}
      />
      <button
        className="w-full py-2 bg-blue-500 text-white rounded"
        onClick={handleBooking}
      >
        Book Appointment
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default BookAppointmentPage;
