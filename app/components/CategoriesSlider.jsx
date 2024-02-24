"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
const TrendingSlider = () => {
  const filteredItems = [
    {
      id: 1,
      img: "/p1.jpg",
      description: "Bag One",
      price: 200,
    },
    {
      id: 2,
      img: "/p2.jpg",
      description: "Bag Two",
      price: 100,
    },
    {
      id: 3,
      img: "/p3.jpg",
      description: "Bag Three",
      price: 500,
    },
    {
      id: 4,
      img: "/p4.webp",
      description: "Bag Four",
      price: 40,
    },
    {
      id: 5,
      img: "/p1.jpg",
      description: "Bag Five",
      price: 140,
    },
    {
      id: 6,
      img: "/p2.jpg",
      description: "Bag Six ",
      price: 140,
    },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("sliderCategories");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("sliderCategories");
    slider.scrollLeft = slider.scrollLeft + 235;
  };
  return (
    <>
      <div className="trending">
        <div className="container sm:w-[1200px] w-[300px] flex flex-col justify-center">
          <div
            className="row-container flex gap-9 overflow-hidden whitespace-nowrap scroll-smooth relative drop-shadow-2xl"
            id="sliderCategories"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="row-item border-[2px] border-primary rounded-xl transition-all ease-in hover:border-accent"
              >
                <Link href={`/`} className="link">
                  <div className="item-header w-[300px]">
                    <img
                      className="h-[300px] w-[300px] object-cover rounded-t-xl"
                      src={item.img}
                      alt="product"
                    />
                  </div>
                  <div className="item-description p-4 text-lg text-background bg-primary rounded-b-xl">
                    <p>{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="btns flex justify-center items-center z-10">
            <button
              title="scroll left"
              onClick={slideLeft}
              className="hover:text-accent text-primary"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button
              title="scroll right"
              onClick={slideRight}
              className="hover:text-accent text-primary"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingSlider;
