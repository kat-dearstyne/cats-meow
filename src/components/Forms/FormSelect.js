import React from "react";

const FormSelect = ({ label, name, options, value, required, onChange}) => (
    <div>
        <label htmlFor={name}>{label}:</label>
        <select id={name} name={name} defaultValue={value} required={required} onChange={onChange}>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <br />
    </div>
);

export default FormSelect;
