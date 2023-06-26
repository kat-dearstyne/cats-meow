import React from "react";

const FormRadio = ({ label, name, options, required }) => (
    <div>
        <label htmlFor={name}>{label}:</label>
        <div className="radio-group">
            {options.map((option, index) => (
                <div className="radio-button" key={`${name}-${index}`}>
                    <label htmlFor={`${name}-${index}`}>{option}</label>
                    <input
                        type="radio"
                        id={`${name}-${index}`}
                        name={name}
                        value={option}
                        required={required}
                    />
                </div>
            ))}
        </div>
        <br />
    </div>
);

export default FormRadio;
