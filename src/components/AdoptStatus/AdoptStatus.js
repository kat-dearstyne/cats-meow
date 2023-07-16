import React, {useState} from 'react';
import AdoptService from '../../services/AdoptService';
import useService from "../useService";
import useAuth from "../Authentication/Auth";

const AdoptStatus = () => {
    const [selectedForm, setSelectedForm] = useState(null);
    const {user} = useAuth();

    const transformData = (response) => {
        return response.filter((item) => item.user.parent.id !== user.id);
    }
    const forms = useService(AdoptService, transformData);

    const handleFormClick = (form) => {
        setSelectedForm(form);

    };

    return (
        <div id={"admin-page"}>
            <h2 style={{fontSize: "24px"}}>Adoption Forms</h2>
            {forms.length === 0 ? (
                <p>No adoption forms found.</p>
            ) : (
                <div>
                    <h2>All Forms</h2>
                    <ul id="admin-form-list">
                        {forms.map((form) => (
                            <li
                                key={form.id}
                                onClick={() => handleFormClick(form)}
                                className={selectedForm && selectedForm.id === form.id ? 'selected' : ''}
                            >
                                <strong> {form.catPreference}</strong>
                                <br/>
                                <div style={{fontStyle: 'italic'}}> {form.status}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedForm && (
                <div>
                    <div className={"parent-center"}>
                        <div>
                            <h2>Selected Form</h2>
                            <div id={"selected-form"}>
                                {Object.entries(selectedForm).map(([key, value]) => {
                                    if (!(typeof value === "string")) {
                                        // Skip values of type "date"
                                        return null;
                                    }
                                    return (
                                        <p key={key}>
                                            <strong>{key}:</strong> {value}
                                        </p>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdoptStatus;
