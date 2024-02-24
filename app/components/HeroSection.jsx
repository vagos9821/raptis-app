import React from "react";

const HeroSection = () => {
  return (
    <div className="px-[120px] flex flex-col gap-6 bg-[url(/heroImg.png)] bg-cover w-svw h-svh justify-center ">
      <h1 className="text-background text-4xl w-[50%] text-left">
        Μαζί σας από το 1991!
      </h1>
      <div className="flex gap-10">
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          Προϊόντα
        </button>
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          Για εμάς
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
