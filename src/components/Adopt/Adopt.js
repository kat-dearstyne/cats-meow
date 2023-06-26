import React, { useState, useEffect } from "react";
import CatService from "../../services/CatService";
import useService from "../useService";
import FormSuccessPopup from "../Forms/FormSuccessPopup";
import FormItem from "../Forms/FormItem";
import FormSelect from "../Forms/FormSelect";
import FormRadio from "../Forms/FormRadio";

const Adopt = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentCat, setCurrentCat] = useState(""); // State to hold the current cat name

  const transformCatsData = (cats) => {
    return cats.map((cat) => cat.name);
  };
  // Populate cat preference with cat names from data
  const catOptions = useService(CatService.getData, transformCatsData);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const catName = urlParams.get("cat");
    setCurrentCat(catName);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  return (
      <div>
        <h2>Adoption Form</h2>
        <form onSubmit={handleSubmit}>
          <FormItem label="Full Name" type="text" name="name" required />

          <FormItem label="Email" type="email" name="email" required />

          <FormItem label="Phone" type="tel" name="phone" required />

          <FormItem label="Address" type="text" name="address" required />

          <FormItem
              label="How many kids do you have?"
              type="number"
              name="kids"
              min="0"
              required
          />

          <FormSelect
              label="Cat Preference"
              name="catPreference"
              options={catOptions}
              value={currentCat} // Set the value of the cat preference field to the current cat name
              required
          />

          <FormRadio
              label="Do you have any other pets?"
              name="otherPets"
              options={["Yes", "No"]}
              required
          />

          <FormItem
              label="If yes, please list what type of animal you own and how many? (e.g. dog, 2)"
              type="textarea"
              name="otherPetDetails"
          />

          <FormItem
              label="Please describe any prior experience with cats that you might have:"
              type="textarea"
              name="previousExperience"
          />

          <br />
          <input type="submit" value="Submit" />
        </form>

        {showPopup && <FormSuccessPopup formType="adoption application" />}
      </div>
  );
};

export default Adopt;
