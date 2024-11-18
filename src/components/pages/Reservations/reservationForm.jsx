import React from "react";
import { Formik } from "formik";
import FormField from "./formField";
import emailjs from '@emailjs/browser';

const ReservationForm = ({ submitData }) => {
  const occasions = ["Birthday", "Anniversary", "Engagement", "Other"];

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        mail: "",
        occasion: occasions[0],
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
        if (!values.occasion) {
          errors.occasion = "Please choose a valid occasion";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const service_id = 'service_i3vng1m';
        const template_id = 'template_ueghurd';
        const public_id = 'gbtOYXQ6SZQAOaHko';

        const templateParams = {
          from_name: "Little Lemon",
          user_email: values.mail,
          to_name: values.name,
          message: `You have a reservation on ${values.date} at ${values.time} for ${values.numberOfGuests} guests.`,
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

          <FormField label="Occasion" htmlFor="reservation-occasion">
            <select
              name="occasion"
              id="reservation-occasion"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.occasion}
            >
              {occasions.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
            {errors.occasion && touched.occasion && <div className="error">{errors.occasion}</div>}
          </FormField>

          <button
            className="button-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Reserve now!
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ReservationForm;
