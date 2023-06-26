import axios from "axios";

// creates a service using json data in an array (common format in this website)
const createService = (url) => {
  return {
    getData: () => {
      return axios.get(url).then((response) => {
        if (Array.isArray(response.data)) {
          return response.data;
        } else {
          throw new Error("Invalid response data. Expected an array.");
        }
      });
    }
  };
};

export default createService;
