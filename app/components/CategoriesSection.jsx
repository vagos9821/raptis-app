import React from "react";
import CategoriesSlider from "./CategoriesSlider";

const CategoriesSection = () => {
  return (
    <div>
      <div className="title-btns flex flex-col items-start">
        <h3 className="text-4xl pt-10 text-primary">Κατηγορίες</h3>
        <button className="my-10 p-2 bg-primary hover:bg-accent hover:underline text-background rounded-xl">
          Όλες οι Κατηγορίες
        </button>
      </div>
      <CategoriesSlider />
    </div>
  );
};

export default CategoriesSection;
