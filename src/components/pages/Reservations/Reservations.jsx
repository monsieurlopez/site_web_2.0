import "./Reservations.css";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import ReservationForm from "./reservationForm";

const Reservations = () => {
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmedReservation", { state: formData });
  };

  return (
    <div className="reservations">
      <h2>Table reservation</h2>
      <ReservationForm
        submitData={submitData}
      />
    </div>
  );
};

export default Reservations;
