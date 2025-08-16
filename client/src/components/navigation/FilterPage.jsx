import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import FilterNavigation from "./FilterNavigation";
import BiddingCard from "../auction/BidCard";

export default function FilterPage() {
  const { category: selectedCategory } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axiosInstance.get(`/api/bids/${selectedCategory}`);
        const bidItems = (res.data.items || []).map((item) => ({
          ...item,
          images: Array.isArray(item.images)
            ? item.images
            : item.image
            ? [item.image]
            : [],
        }));
        setAllItems(bidItems);
      } catch (err) {
        console.error("Error fetching items:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [selectedCategory]);

  const filteredItems = selectedCategory
    ? allItems.filter((item) => item.category === selectedCategory)
    : allItems;

  return (
    <div className="mt-4 w-full overflow-x-hidden">
      <FilterNavigation />
      <div className="min-h-screen bg-white px-6 pt-4">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
            {(selectedCategory || "All").toUpperCase()}
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Loading items...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item._id}
                    to={`/filter/${selectedCategory}/${item._id}`}
                  >
                    <BiddingCard item={item} />
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">No items in this category.</p>
              )}
            </div>
          )}
        </div>

        {/* Modal for enlarged image */}
        {selectedImg && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="relative w-[600px] h-[400px] bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 text-black text-2xl font-bold bg-white bg-opacity-80 rounded-full px-2 hover:bg-opacity-100"
              >
                &times;
              </button>
              <img
                src={selectedImg}
                alt="Enlarged"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
