import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="lg:px-[120px] flex flex-col bg-[url(/heroImg.png)] bg-right-top bg-cover w-svw h-svh justify-center ">
      <h1 className="text-background text-4xl w-full text-left">
        Μαζί σας από το 1991!
      </h1>
      <div className="flex gap-10">
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          <Link href="/">Προϊόντα</Link>
        </button>
        <button className="bg-accent w-[120px] h-[40px] rounded-xl text-primary hover:text-background hover:underline">
          <Link href="/about-us">Για εμάς</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
