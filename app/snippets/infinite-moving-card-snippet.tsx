"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I had my Shopify store built by you, and Alhamdulillah, it’s still running successfully. My sales are great, and even though many other stores have been terminated, mine is still going strong. Thank you so much, Team ECLIPSE—highly recommend!",
    name: "Ali Raza",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "I worked with Team ECLIPSE to build my Shopify store, and I couldn't be happier with the results. Even though some stores have shut down, mine is still thriving and my sales are better than ever. Huge thanks to the team for their incredible work!",
    name: "Rabia Khan",
    title: "Hamlet",
  },
  {
    quote: "Team ECLIPSE helped me create my Shopify store, and Alhamdulillah, it's still running smoothly. My sales have been consistent, and despite other stores facing difficulties, mine continues to succeed. Highly recommend their services for anyone serious about growing their online business",
    name: "Ajmal Mirza",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Building my Shopify store with Team ECLIPSE was one of the best decisions I made. My store is still doing well, and the sales keep growing. Many other stores have faced issues, but mine is still going strong, thanks to their amazing support. Highly recommended!",
    name: "Sara Ali",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "6 month ago, I had only 60,000 PKR and decided to invest in my own Shopify store. I got it built through you and started my business. Today, Alhamdulillah, my business is running successfully, and I couldn’t be more grateful. I was so impressed that I also recommended you to many of my friends, and they started their businesses the same way. Highly recommended!",
    name: "Ayesha Khan",
    title: "Moby-Dick",
  },
];
