import { useState, useEffect } from "react";

const useService = (service, transformData = (response) => response, relatedColumn, relatedID) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (relatedColumn && relatedID) {
                    response = await service.getRowsByRelatedId(relatedColumn, relatedID);
                } else {
                    response = await service.getAllObjects();
                }

                if (Array.isArray(response)) {
                    const data = response.map((r) => ({
                        ...r.attributes,
                        id: r.id
                    }));
                    const transformedData = transformData(data);
                    setData(transformedData);
                } else {
                    console.error("Invalid response data. Expected an array.");
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [service, transformData, relatedColumn, relatedID]);

    return data;
};

export default useService;
