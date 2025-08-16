import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import BiddingCard from "./BidCard";

export default function BiddingSection({ category }) {
  const [categoryItemsMap, setCategoryItemsMap] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBids = async () => {
      try {
        const res = await axiosInstance.get("/api/bids");
        // console.log(res.data);
        const rawData = res.data;

        const formattedData = {};
        rawData.forEach(({ category, items }) => {
          formattedData[category] = items.map((item) => ({
            ...item,
            images: Array.isArray(item.images)
              ? item.images
              : item.image
              ? [item.image]
              : [],
          }));
        });

        setCategoryItemsMap(formattedData);
      } catch (error) {
        console.error("Error fetching bid items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  const filteredItems = categoryItemsMap[category] || [];

  const handleCardClick = (category) => {
    navigate(`/filter/${category}`);
  };

  return (
    <section className="px-4 py-8 bg-white">
      {loading ? (
        <p className="text-center text-gray-500">Loading items...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item._id}
                onClick={() => handleCardClick(category)}
                className="cursor-pointer"
              >
                <BiddingCard item={item} />
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in this category.</p>
          )}
        </div>
      )}
    </section>
  );
}
