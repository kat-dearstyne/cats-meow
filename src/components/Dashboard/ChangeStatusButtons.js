import React from 'react';

// changes status of adoption forms
const ChangeStatusButtons = ({ handleStatusChange }) => {
    return (
        <div>
            <h3 className="parent-center">Change Status:</h3>
            <div className="parent-center">
                <button onClick={() => handleStatusChange('approved')}>Approve</button>
                <button onClick={() => handleStatusChange('denied')}>Deny</button>
                <button onClick={() => handleStatusChange('under review')}>Under Review</button>
            </div>
        </div>
    );
};

export default ChangeStatusButtons;
