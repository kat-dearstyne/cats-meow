import React, { useState, useEffect } from "react";

const useService = (getData, transformData = (response) => response) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
        .then((response) => {
          if (Array.isArray(response)) {
            const transformedData = transformData(response);
            setData(transformedData);
          } else {
            console.error("Invalid response data. Expected an array.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }, []);

  return data;
};

export default useService;
