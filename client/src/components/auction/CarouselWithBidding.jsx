import React, { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import BiddingSection from "./BiddingSection";

export default function CarouselWithBidding() {
  const [currentCategory, setCurrentCategory] = useState("art-life"); // initial category

  return (
    <div>
      <CarouselComponent onCategoryChange={setCurrentCategory} />
      <BiddingSection category={currentCategory} />
    </div>
  );
}
