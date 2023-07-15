import React, {useState, useEffect} from 'react';
import AdoptService from '../../services/AdoptService';

const AdminPage = () => {
    const [forms, setForms] = useState([]);
    const [selectedForm, setSelectedForm] = useState(null);

    useEffect(() => {
        // Fetch adoption forms when the component mounts
        fetchAdoptionForms();
    }, []);

    const fetchAdoptionForms = async () => {
        try {
            const formsData = await AdoptService.getAllObjects();
            setForms(formsData);
        } catch (error) {
            console.error('Failed to fetch adoption forms:', error);
        }
    };

    const handleFormClick = (form) => {
        if (selectedForm && selectedForm.name === form.name) {
            setSelectedForm(null); // Clear the selection
        } else {
            setSelectedForm(form);
        }

    };

    const handleStatusChange = async (newStatus) => {
        if (selectedForm) {
            try {
                await AdoptService.updateFormStatus(selectedForm.id, newStatus);
                // Update the status of the selected form in the UI
                setSelectedForm({...selectedForm, status: newStatus});
            } catch (error) {
                console.error('Failed to update form status:', error);
            }
        }
    };

    return (
        <div id={"admin-page"}>
            <h2 style={{ fontSize: "24px" }}>Adoption Forms</h2>
            {forms.length === 0 ? (
                <p>No adoption forms found.</p>
            ) : (
                <div>
                    <h2>All Forms</h2>
                    <ul id="admin-form-list">
                        {forms.map((form) => (
                            <li
                                key={form.name}
                                onClick={() => handleFormClick(form)}
                                className={selectedForm === form ? 'selected' : ''}
                            >
                                <strong> {form.name}</strong>
                                <br />
                                <div style={{ fontStyle: 'italic' }}> {form.status}</div>
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
                                {Object.entries(selectedForm).map(([key, value]) => (
                                    <p key={key}>
                                        <strong>{key}:</strong> {value}
                                    </p>
                                ))}

                                <h3 className={"parent-center"}>Change Status: </h3>
                                <div className={"parent-center"}>
                                    <button onClick={() => handleStatusChange('approved')}>
                                        Approve
                                    </button>
                                    <button onClick={() => handleStatusChange('denied')}>
                                        Deny
                                    </button>
                                    <button onClick={() => handleStatusChange('under review')}>
                                        Under Review
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPage;
