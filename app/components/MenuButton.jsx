"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

const MenuButton = () => {
  const menu = document.getElementById("menu");
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = (event) => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  if (isOpen == true) {
    return (
      <div className="">
        <svg
          onClick={handleMenu}
          className="hover:cursor-pointer fill-accent hover:fill-accent focus:fill-accent transition-all ease-in "
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" />
          <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" />
          <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" />
        </svg>
        <ul className="pr-10 lg:pr-20 pl-5 py-10 bg-primary fixed right-0 flex flex-col gap-9 text-background items-start">
          <Link
            href="/"
            className="hover:text-accent hover:underline focus:text-accent focus:underline transition-all ease-in cursor-pointer"
          >
            Αρχική
          </Link>
          <Link
            href="/"
            className="hover:text-accent hover:underline focus:text-accent focus:underline transition-all ease-in cursor-pointer"
          >
            Προϊόντα
          </Link>
          <Link
            href="/about-us"
            className="hover:text-accent hover:underline focus:text-accent focus:underline transition-all ease-in cursor-pointer"
          >
            Για εμάς
          </Link>
          <Link
            href="/"
            className="hover:text-accent hover:underline focus:text-accent focus:underline transition-all ease-in"
          >
            Επικοινωνία
          </Link>
        </ul>
      </div>
    );
  }
  if (isOpen == false) {
    return (
      <div className="">
        <svg
          onClick={handleMenu}
          className="hover:cursor-pointer fill-background hover:fill-accent focus:fill-accent transition-all ease-in"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" />
          <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" />
          <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" />
        </svg>
      </div>
    );
  }
};

export default MenuButton;
