import BaseForm from "../Forms/BaseForm";
import ContactService from "../../services/ContactService";

const Contact = () => {
    const formFields = [
        // array of objects representing the fields for the contact form
        {label: "Name:", type: "text", name: "name", required: true},
        {label: "Email:", type:"email", name: "email", required: true},
        {label: "Subject:", type: "text", name: "subject", required: true },
        {label: "Message:", type: "textarea", name: "message", required: true},
    ];

    return (
        <div>
            <h2>Contact Us!</h2>
            <BaseForm formFields={formFields} service={ContactService} />
        </div>
    )
};

export default Contact;
