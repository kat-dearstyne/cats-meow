import React from 'react';
import ChangeStatusButtons from './ChangeStatusButtons';

const SelectedForm = ({ selectedForm, handleStatusChange }) => {
    return (
        <div>
            <div className="parent-center">
                <div>
                    <h2>Selected Form</h2>
                    <div id="selected-form">
                        {Object.entries(selectedForm).map(([key, value]) => {
                            if (!(typeof value === 'string')) {
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
            {handleStatusChange && <ChangeStatusButtons handleStatusChange={handleStatusChange} />}
        </div>
    );
};

export default SelectedForm;
