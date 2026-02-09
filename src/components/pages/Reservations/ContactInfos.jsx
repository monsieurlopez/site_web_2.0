import "./ContactInfos.css";
import { useNavigate } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactInfos = () => {
  const navigate = useNavigate();

  const submitData = (formData) => {
    navigate("/ConfirmedContact", { state: formData });
  };

  return (
    <div className="container-contact">
      <h2>Write me a message</h2>
      <p> Fields with * are required </p>
      <div className="contact-intro-message">
        <p>
          You can reach out to me directly via email at <strong>contact@serlopez.com</strong> or use the contact form below. It will be a pleasure to respond to you as soon as possible.
        </p>
      </div>
      <ContactForm
        submitData={submitData}
      />
    </div>
  );
};

export default ContactInfos;
