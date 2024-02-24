import React from "react";
import MenuButton from "./MenuButton";

const Navbar = () => {
  return (
    <div
      className="bg-primary m-0 px-[20px] fixed
    grid grid-flow-col grid-cols-2 md:grid-cols-12 items-center 
    w-full md:h-[100px] md:px-[120px] h-[80px] z-20"
    >
      <div className="md:col-span-3 col-span-1">
        <svg
          className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 201.000000 200.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          {" "}
          <g
            transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
            fill="#ededed"
            stroke="none"
          >
            {" "}
            <path d="M70 995 l0 -945 940 0 940 0 0 169 0 169 -184 376 -185 376 -54 0 -54 0 -181 -370 c-100 -204 -182 -375 -182 -380 0 -6 47 -10 110 -10 l111 0 26 60 26 60 144 0 144 0 25 -55 c16 -37 24 -74 24 -110 l0 -55 -710 0 -710 0 0 715 0 715 710 0 710 0 1 -217 0 -218 114 -225 114 -225 0 558 1 557 -940 0 -940 0 0 -945z m1490 -241 c16 -37 30 -68 30 -70 0 -2 -27 -4 -60 -4 -33 0 -60 3 -60 8 0 10 52 132 56 132 2 0 17 -30 34 -66z" />{" "}
          </g>{" "}
        </svg>
      </div>
      <div className="opacity-0 md:opacity-100 flex col-span-0 md:col-span-6 items-center justify-center lg:gap-[100px] gap-9 text-background font-semibold tracking-widest">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:underline"
        >
          Αρχική
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:underline"
        >
          Για εμάς
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:underline"
        >
          Επικοινωνία
        </a>
      </div>
      <div className="col-span-1 md:col-span-3 ml-44">
        <MenuButton className="hover:fill-accent" />
      </div>
    </div>
  );
};

export default Navbar;
