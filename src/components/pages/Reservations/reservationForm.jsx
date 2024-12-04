import React from "react";
import { Formik } from "formik";
import FormField from "./formField";
import emailjs from '@emailjs/browser';

const ReservationForm = ({ submitData }) => {

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
        if (!values.lastName) {
          errors.lastName = "Please enter your last name";
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
        if (!values.message) {
          errors.message = "Please enter a message";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const service_id = 'service_i3vng1m';
        const template_id = 'template_cepy6gg';
        const public_id = 'gbtOYXQ6SZQAOaHko';

        const templateParams = {
          from_name: `${values.firstName} ${values.lastName}`,
          user_email: values.mail,
          subject: values.subject,
          message: values.message,
        };

        emailjs.send(service_id, template_id, templateParams, public_id)
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
          <FormField label="First Name" htmlFor="reservation-first-name">
            <input
              type="text"
              name="firstName"
              id="reservation-first-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            {errors.firstName && touched.firstName && <div className="error">{errors.firstName}</div>}
          </FormField>

          <FormField label="Last Name" htmlFor="reservation-last-name">
            <input
              type="text"
              name="lastName"
              id="reservation-last-name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && <div className="error">{errors.lastName}</div>}
          </FormField>

          <FormField label="Email address" htmlFor="reservation-mail">
            <input
              type="email"
              name="mail"
              id="reservation-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mail}
            />
            {errors.mail && touched.mail && <div className="error">{errors.mail}</div>}
          </FormField>

          <FormField label="Subject" htmlFor="reservation-subjet">
            <input
              type="text"
              name="subject"
              id="reservation-subjet"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subject}
            />
            {errors.subject && touched.subject && <div className="error">{errors.subject}</div>}
          </FormField>

          <FormField label="Message" htmlFor="reservation-message">
            <textarea
              name="message"
              id="reservation-message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            {errors.message && touched.message && <div className="error">{errors.message}</div>}
          </FormField>

          <button
            className="button-primary"
            type="submit"
            disabled={isSubmitting || !values.firstName || !values.lastName || !values.mail || !values.subject || !values.message}
          >
            Send
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
