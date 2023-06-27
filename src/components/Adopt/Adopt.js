// Import necessary modules and components
import React, { useState, useEffect } from "react";
import CatService from "../../services/CatService";
import useService from "../useService";
import FormSelect from "../Forms/FormSelect";
import FormRadio from "../Forms/FormRadio";
import AdoptService from "../../services/AdoptService";
import BaseForm from "../Forms/BaseForm";

// Define the Adopt component
const Adopt = (props) => {
  // Define the state variable 'currentCat' and the setter function 'setCurrentCat'
  const [currentCat, setCurrentCat] = useState("");

  // function to transform the cat data into the form
  const transformCatsData = (cats) => {
    return cats.map((cat) => cat.name);
  };

  // Get the cat options from the CatService
  const catOptions = useService(CatService, transformCatsData);

  // gets the cat name from the URL params and set it as the currentCat
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const catName = urlParams.get("cat");
    setCurrentCat(catName || "");
  }, []);

  // fields for the adoption form
  const formFields = [
    // Each object is representative of one field, with properties
    {
      label: "Full Name",
      type: "text",
      name: "name",
      required: true,
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      required: true,
    },
    {
      label: "Phone",
      type: "tel",
      name: "phone",
      required: true,
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      required: true,
    },
    {
      label: "How many kids do you have?",
      type: "number",
      name: "kids",
      min: "0",
      required: true,
    },
    {
      label: "Cat Preference",
      name: "catPreference",
      component: FormSelect,
      options: catOptions,
      value: currentCat,
      required: true,
    },
    {
      label: "Do you have any other pets?",
      name: "otherPets",
      component: FormRadio,
      options: ["Yes", "No"],
      required: true,
    },
    {
      label: "If yes, please list what type of animal you own and how many? (e.g. dog, 2)",
      type: "textarea",
      name: "otherPetDetails",
    },
    {
      label: "Please describe any prior experience with cats that you might have:",
      type: "textarea",
      name: "previousExperience",
    },
  ];

  return (
      <div>
        <h2>Adoption Form</h2>
        <BaseForm formFields={formFields} service={AdoptService} />
      </div>
  )
};

export default Adopt;
