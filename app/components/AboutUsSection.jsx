import React from "react";

const AboutUsSection = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-secondary mt-10 py-20 w-full items-center">
      <div className="flex flex-col justify-center ml-[20px] lg:ml-[100px]">
        <h1 className="text-4xl text-primary mb-10 ">Σχετικά με εμάς</h1>
        <p className=" text-text text-lg">
          Καλωσορίσατε στην Raptis Packing, την πρωτοπόρα εταιρεία στον χώρο της
          κατασκευής συσκευασιών και σακούλων από το 1991! <br /> Με περισσότερα
          από τριάντα χρόνια εμπειρίας, η Raptis Packing έχει αναδειχθεί σε έναν
          αξιόπιστο και καινοτόμο σύντροφο για επιχειρήσεις σε όλη την Ελλάδα.
          Με υψηλής ποιότητας υλικά και προηγμένες τεχνολογίες κατασκευής,
          δημιουργούμε συσκευασίες που προσαρμόζονται απόλυτα στις ανάγκες κάθε
          πελάτη. Ανεξαρτήτως του μεγέθους ή του κλάδου της επιχείρησής σας.
        </p>
      </div>
      <div className="flex justify-center items-center mt-[100px] mx-[20px] lg:mr-[100px] lg:max-w-[33%] max-w-[600px]">
        <img
          className="rounded-xl object-contain"
          src="/aboutUsImg.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
