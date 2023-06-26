import React from "react";

const FormSelect = ({ label, name, options, value, required }) => (
    <div>
        <label htmlFor={name}>{label}:</label>
        <select id={name} name={name} value={value} required={required}>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <br />
    </div>
);

export default FormSelect;
