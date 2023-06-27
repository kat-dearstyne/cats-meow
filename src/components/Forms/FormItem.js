import React from "react";

const FormItem = ({ label, type, name, required, onChange }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        {type === "textarea" ? (
            <textarea id={name} name={name} required={required} onChange={onChange}></textarea>
        ) : (
            <input
                type={type}
                id={name}
                name={name}
                required={required}
                onChange={onChange}
            />
        )}
        <br />
    </div>
);

export default FormItem;
