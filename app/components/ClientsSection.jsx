import React from "react";
import ClientsSlider from "./ClientsSlider";

const ClientsSection = () => {
  return (
    <div>
      <div className="flex flex-col items-start pb-10">
        <h3 className="text-4xl pt-10 text-primary">Οι πελάτες μας</h3>
      </div>
      <div>
        <ClientsSlider />
      </div>
    </div>
  );
};

export default ClientsSection;
