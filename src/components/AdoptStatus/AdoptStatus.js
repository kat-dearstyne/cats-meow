import React, { useState } from 'react';
import AdoptService from '../../services/AdoptService';
import useService from '../useService';
import useAuth from '../Authentication/Auth';
import FormsList from '../Dashboard/FormsList';
import SelectedForm from '../Dashboard/SelectedForm';

const AdoptStatus = () => {
    const [selectedForm, setSelectedForm] = useState(null);
    const { user } = useAuth();

    const transformData = (response) => response;
    const forms = useService(AdoptService, transformData, 'user', user.id);

    const handleFormClick = (form) => {
        setSelectedForm(form);
    };

    return (
        <div id="dashboard-page">
            <FormsList forms={forms} selectedForm={selectedForm} handleFormClick={handleFormClick} />
            {selectedForm && (
                <SelectedForm selectedForm={selectedForm} />
            )}
        </div>
    );
};

export default AdoptStatus;
