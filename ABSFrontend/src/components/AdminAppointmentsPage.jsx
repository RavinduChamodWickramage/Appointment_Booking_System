import { useState, useEffect } from "react";
import { getAllAppointments } from "../services/api";

const AdminAppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAllAppointments();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">All Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id} className="mb-4">
            <div>{appointment.appointmentDateTime}</div>
            <div>User: {appointment.userDetails}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminAppointmentsPage;
