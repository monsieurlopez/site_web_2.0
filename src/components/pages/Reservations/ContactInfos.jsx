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
      <ContactForm
        submitData={submitData}
      />
    </div>
  );
};

export default ContactInfos;
