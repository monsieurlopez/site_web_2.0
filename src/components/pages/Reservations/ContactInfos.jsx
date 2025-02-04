import "./ContactInfos.css";
import { useNavigate } from "react-router-dom";
import ReservationForm from "./reservationForm";

const ContactInfos = () => {
  const navigate = useNavigate();

  const submitData = (formData) => {
    navigate("/ConfirmedContact", { state: formData });
  };

  return (
    <div className="container-contact">
      <h2>Write me a message</h2>
      <p> Fields with * are required </p>
      <ReservationForm
        submitData={submitData}
      />
    </div>
  );
};

export default ContactInfos;
