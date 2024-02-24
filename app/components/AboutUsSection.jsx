import React from "react";

const AboutUsSection = () => {
  return (
    <div className="flex bg-secondary mt-10 py-20 w-full">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl text-primary mb-10 ml-[100px]">
          Σχετικά με εμάς
        </h1>
        <p className="mx-[100px] text-text text-lg">
          Καλωσορίσατε στην Raptis Packing, την πρωτοπόρα εταιρεία στον χώρο της
          κατασκευής συσκευασιών και σακούλων από το 1991! <br /> Με περισσότερα
          από τριάντα χρόνια εμπειρίας, η Raptis Packing έχει αναδειχθεί σε έναν
          αξιόπιστο και καινοτόμο σύντροφο για επιχειρήσεις σε όλη την Ελλάδα.
          Με υψηλής ποιότητας υλικά και προηγμένες τεχνολογίες κατασκευής,
          δημιουργούμε συσκευασίες που προσαρμόζονται απόλυτα στις ανάγκες κάθε
          πελάτη. Ανεξαρτήτως του μεγέθους ή του κλάδου της επιχείρησής σας.
        </p>
      </div>
      <div className="flex justify-center items-center  mt-[100px] mr-[100px] lg:w-full w-0 ">
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
