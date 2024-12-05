import "./Reservations.css";
import { useNavigate } from "react-router-dom";
import ReservationForm from "./reservationForm";

const Reservations = () => {
  const navigate = useNavigate();

  const submitData = (formData) => {
    navigate("/confirmedReservation", { state: formData });
  };

  return (
    <div className="reservations">
      <h2>Write me a message</h2>
      <p> Fields with * are required </p>
      <ReservationForm
        submitData={submitData}
      />
    </div>
  );
};

export default Reservations;
