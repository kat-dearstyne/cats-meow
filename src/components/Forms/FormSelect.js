import React from "react";

export default function FormSelect({ label, name, options, value, required, onChange}){
    value = value === "" ? undefined : value
    return (
        <div>
            <label htmlFor={name}>{label}:</label>
            <select id={name} name={name}  required={required} onChange={onChange}>
                <option disabled selected value> -- select an option -- </option>
                {options.map((option) => {
                    const selected = option === value ? true : undefined;
                    return (
                        <option key={option} value={option} selected={selected}>{option}</option>
                    )
                })}
            </select>
            <br />
        </div>
    )
}

