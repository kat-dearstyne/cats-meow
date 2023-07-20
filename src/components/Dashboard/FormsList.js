import React from 'react';

// shows all adoption forms
const FormList = ({ forms, selectedForm, handleFormClick }) => {
    return (
        <div>
            <h2>All Forms</h2>
            {forms.length === 0 ? (
                <p>No adoption forms found.</p>
            ) : (
                <div>
                    <ul id="form-list">
                        {forms.map((form) => (
                            <li
                                key={form.id}
                                onClick={() => handleFormClick(form)}
                                className={selectedForm && selectedForm.id === form.id ? 'selected' : ''}
                            >
                                <strong>{form.name}</strong>
                                <br />
                                <strong style={{ fontStyle: 'italic' }}> - {form.catPreference} -</strong>
                                <div style={{ fontStyle: 'italic' }}>{form.status}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FormList;
