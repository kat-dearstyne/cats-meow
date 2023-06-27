import React, { useState } from "react";
import FormSuccessPopup from "../Forms/FormSuccessPopup";
import FormItem from "../Forms/FormItem";

const GenericForm = ({ formFields, service }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);

        service.createObject(formData)
            .then((result) => {
                console.log("Form data saved:", result);
            })
            .catch((error) => {
                console.error("Error saving form data:", error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {formFields.map((field, index) => {
                    const Component = field.component || FormItem;
                    const { component, serviceOptions, ...rest } = field;
                    return (
                        <Component
                            key={index}
                            {...rest}
                            value={formData[field.name] || ""}
                            onChange={handleChange}
                        />
                    );
                })}
                <br />
                <input type="submit" value="Submit" />
            </form>
            {showPopup && <FormSuccessPopup formType="adoption application" />}
        </div>
    );
};

export default GenericForm;
