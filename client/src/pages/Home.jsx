import React from "react";
import FilterNavigation from "../components/navigation/FilterNavigation";
import CarouselComponent from "../components/auction/CarouselComponent";
import BiddingSection from "../components/auction/BiddingSection";
import IconicBrands from "../components/brand/IconicBrands";
import SuggestionsCarousel from "../components/shared/SuggestionsCarousel";
import CarouselWithBidding from "../components/auction/CarouselWithBidding";

export default function Home() {
  return (
    <div className="mt-4 w-full overflow-x-hidden">
      <FilterNavigation />
      <CarouselWithBidding />

      <IconicBrands />
      <SuggestionsCarousel />
      {/* <AuctionSection /> */}
    </div>
  );
}
