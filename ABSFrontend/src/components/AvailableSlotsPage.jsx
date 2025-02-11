import { useState, useEffect } from "react";
import { getAvailableSlots } from "../services/api";

const AvailableSlotsPage = () => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const data = await getAvailableSlots();
        setSlots(data);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };
    fetchSlots();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Slots</h2>
      <ul>
        {slots.map((slot, index) => (
          <li key={index} className="mb-2">
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSlotsPage;
