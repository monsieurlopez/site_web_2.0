import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const ConfirmedContact = () => {
  const location = useLocation();
  const { name, mail, message } = location.state || {};

  return (
    <div className="container confirmed-contact">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your message has been envoyed!</h2>
      <div className="contact-summary">
        <h3>Message Details</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {mail}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
      </div>
    </div>
  );
};

export default ConfirmedContact;
