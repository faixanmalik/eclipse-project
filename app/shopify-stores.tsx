"use client";

import Image from "next/image";

const stores = [
  {
    image: "/assets/shopifyimg1.jpg",
    quote: "Bhai honestly didn’t expect results this fast. Your strategy actually works! Got my first 100+ sales within a week. JazakAllah for the giving your time.",
    name: "Ali Khan",
  },
  {
    image: "/assets/shopifyimg2.jpg",
    quote:
      "I’ve been working consistently for 4 months now and honestly, the results are beyond amazing. Daily sales, growing confidence, and a system that actually works. Couldn’t have done this without ECLIPSE. Highly recommend to anyone still thinking about it!",
    name: "Hamza Ali",
  },

  {
    image: "/assets/shopifyimg3.jpg",
    quote:
      "It’s been just 2 months since I started this journey, and I’ve already made more sales than I expected. Never thought I’d be running an actual business this soon. Thank you ECLIPSE for the guidance and support—this changed everything for me!",
    name: "Bilal Ahmed",
  },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
          Shopify Stores <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
          We create stunning Shopify stores that are designed to convert.
        </p>
        <div className="md:flex items-center space-x-5 justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <Image
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
