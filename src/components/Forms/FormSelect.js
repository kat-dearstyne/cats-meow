import React from "react";

export default function FormSelect({ label, name, options, value, required, onChange}){
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <select id={name} name={name} value={value} required={required} onChange={onChange}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <br />
        </div>
    )
}

