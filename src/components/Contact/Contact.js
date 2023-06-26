import React, { useState } from "react";
import FormItem from "../Forms/FormItem";
import FormSuccessPopup from "../Forms/FormSuccessPopup";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    // TODO: save form submission in the future
    event.preventDefault();
    // Will show the user a popup after form is submitted
    setShowPopup(true);
  };

  return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <FormItem label="Name:" type="text" name="name" required />

          <FormItem label="Email:" type="email" name="email" required />

          <FormItem label="Subject:" type="text" name="subject" required />

          <FormItem label="Message:" type="textarea" name="message" required />

          <br />
          <input type="submit" value="Submit" />
        </form>
        {showPopup && <FormSuccessPopup formType="message" />}
      </div>
  );
};

export default Contact;
