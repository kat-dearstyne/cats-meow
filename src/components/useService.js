import { useState, useEffect } from "react";

const useService = (service, transformData = (response) => response) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    service.getAllObjects()
        .then((response) => {
          if (Array.isArray(response)) {
              const data = response.map(r => r.attributes);
              const transformedData = transformData(data);
              setData(transformedData);

          } else {
            console.error("Invalid response data. Expected an array.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
  });

  return data;
};

export default useService;
