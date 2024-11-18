import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const ConfirmedReservation = () => {
  const location = useLocation();
  const { firstName, lastName, mail, subject, message } = location.state || {};

  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your message has been envoyed!</h2>
      <div className="reservation-summary">
        <h3>Message Details</h3>
        <p><strong>Name:</strong> {firstName} {lastName}</p>
        <p><strong>Email:</strong> {mail}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
};

export default ConfirmedReservation;
