import React, { useState } from "react";
import FormSuccessPopup from "../Forms/FormSuccessPopup";
import FormItem from "../Forms/FormItem";

const BaseForm = ({ formFields, service }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);

        const defaultFormData = formFields.reduce((result, { name, value }) => {
            result[name] = value || "";
            return result;
        }, {});

        for (const key in defaultFormData) {
            if (formData.hasOwnProperty(key)) {
                defaultFormData[key] = formData[key];
            }
        }

        console.log("FormData on Submmit:", defaultFormData);
        service.createObject(defaultFormData)
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
                {formFields.map((fieldData, index) => {
                    const Component = fieldData.component || FormItem;
                    const { component, serviceOptions, ...rest } = fieldData;

                    return (
                        <Component
                            key={index}
                            {...rest}
                            value={fieldData.value || ""}
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

export default BaseForm;
