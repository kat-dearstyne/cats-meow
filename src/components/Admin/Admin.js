import React, { useState } from 'react';
import AdoptService from '../../services/AdoptService';
import useService from '../useService';
import FormsList from '../Dashboard/FormsList';
import SelectedForm from '../Dashboard/SelectedForm';

const Admin = () => {
    const [selectedForm, setSelectedForm] = useState(null);

    const forms = useService(AdoptService);

    const handleFormClick = (form) => {
        setSelectedForm(form);
    };

    const handleStatusChange = async (newStatus) => {
        if (selectedForm) { // update status of currently selected form
            try {
                await AdoptService.updateValue(selectedForm.id, 'status', newStatus);
                setSelectedForm({ ...selectedForm, status: newStatus });
            } catch (error) {
                console.error('Failed to update form status:', error);
            }
        }
    };

    return (
        <div id="dashboard-page">
            <FormsList forms={forms} selectedForm={selectedForm} handleFormClick={handleFormClick} />
            {selectedForm && (
                <SelectedForm selectedForm={selectedForm} handleStatusChange={handleStatusChange} />
            )}
        </div>
    );
};

export default Admin;
