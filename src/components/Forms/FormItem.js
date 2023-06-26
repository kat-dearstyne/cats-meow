import React from "react";

const FormItem = ({ label, type, name, required }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        {type === "textarea" ? (
            <textarea id={name} name={name} required={required}></textarea>
        ) : (
            <input
                type={type}
                id={name}
                name={name}
                required={required}
            />
        )}
        <br />
    </div>
);

export default FormItem;
