import React, { useState } from "react";
import { Formik } from "formik";
import FormField from "./formField";
import emailjs from "@emailjs/browser";

const ContactForm = ({ submitData }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);

  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mail: "",
        subject: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = "Please enter your first name";
        }
        if (!values.mail) {
          errors.mail = "Please enter an email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
        ) {
          errors.mail = "Invalid email address";
        }
        if (!values.subject) {
          errors.subject = "Please enter a subject";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const service_id = "service_i3vng1m";
        const template_id = "template_cepy6gg";
        const public_id = "gbtOYXQ6SZQAOaHko";

        const templateParams = {
          from_name: `${values.firstName} ${values.lastName}`,
          user_email: values.mail,
          subject: values.subject,
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
          <FormField label="First Name *" htmlFor="contact-first-name">
            <input
              type="text"
              name="firstName"
              id="contact-first-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
          </FormField>

          <FormField label="Last Name" htmlFor="contact-last-name">
            <input
              type="text"
              name="lastName"
              id="contact-last-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
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

          <FormField label="Subject *" htmlFor="contact-subjet">
            <input
              type="text"
              name="subject"
              id="contact-subjet"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {errors.subject && touched.subject && (
              <div className="error">{errors.subject}</div>
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

          <FormField
            label="Terms and Conditions *"
            htmlFor="terms-and-conditions"
          >
            <div
            className="checkbox-group"
            >
              <label
                htmlFor="terms-and-conditions"
              >
                I accept the{" "}
                <a
                  className="link-permissions"
                  href="/permisos-y-condiciones.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick} 
                >
                  terms and conditions
                </a>
              </label>
              <input
                className="terms-checkbox"
                type="checkbox"
                id="terms-and-conditions"
                name="termsAccepted"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                disabled={!linkClicked}
              />
            </div>
            {!termsAccepted && linkClicked && (
              <div className="error">You must accept the terms to proceed.</div>
            )}
          </FormField>

          <button
            className="button-submit"
            type="submit"
            disabled={
              isSubmitting ||
              !values.firstName ||
              !values.mail ||
              !values.subject ||
              !termsAccepted
            }
          >
            Send
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
