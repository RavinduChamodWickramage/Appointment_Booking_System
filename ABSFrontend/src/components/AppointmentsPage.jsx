import { useState, useEffect } from "react";
import { getAppointments, cancelAppointment } from "../services/api";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const data = await getAppointments(userId);
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  const handleCancel = async (id) => {
    try {
      await cancelAppointment(id);
      setAppointments(appointments.filter((appt) => appt.id !== id));
    } catch (error) {
      console.error("Error canceling appointment:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="mb-4">
            <div>{appointment.appointmentDateTime}</div>
            <button
              className="mt-2 py-1 px-3 bg-red-500 text-white rounded"
              onClick={() => handleCancel(appointment.id)}
            >
              Cancel Appointment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsPage;
