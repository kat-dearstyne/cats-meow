import React from "react";

const FormSuccessPopup = ({ formType }) => (
    <div className="popup">
        <p>
            Thanks for submitting your {formType}! We will be in touch shortly.
        </p>
    </div>
);

export default FormSuccessPopup;
