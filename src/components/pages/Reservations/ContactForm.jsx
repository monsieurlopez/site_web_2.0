import { Link } from "react-router-dom";
import { Formik } from "formik";
import FormField from "./formField";
import emailjs from "@emailjs/browser";

const ContactForm = ({ submitData }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        mail: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Please enter your name";
        }
        if (!values.mail) {
          errors.mail = "Please enter an email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
        ) {
          errors.mail = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
      const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const public_id = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
          from_name: values.name,
          user_email: values.mail,
          message: values.message,
        };

        emailjs
          .send(service_id, template_id, templateParams, public_id)
          .then((response) => {
            console.log("Email sent successfully:", response);
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          })
          .finally(() => setSubmitting(false));

        submitData(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormField label="Full Name *" htmlFor="contact-name">
            <input
              type="text"
              name="name"
              id="contact-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <div className="error">{errors.name}</div>
            )}
          </FormField>

          <FormField label="Email address *" htmlFor="contact-mail">
            <input
              type="email"
              name="mail"
              id="contact-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mail}
            />
            {errors.mail && touched.mail && (
              <div className="error">{errors.mail}</div>
            )}
          </FormField>

          <FormField label="Message" htmlFor="contact-message">
            <textarea
              name="message"
              id="contact-message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </FormField>

          <div className="privacy-notice">
            <p>
              By clicking "Send Message", you agree that your name, email, and message will be used solely to respond to your inquiry. We do not store your personal data for any other purpose. Your information is protected and handled in accordance with{" "}
              <Link
                className="link-permissions"
                to="/conditions"
              >
                data protection regulations
              </Link>
              .
            </p>
          </div>

          <button
            className="button-submit"
            type="submit"
            disabled={
              isSubmitting ||
              !values.name ||
              !values.mail
            }
          >
            Send Message
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
