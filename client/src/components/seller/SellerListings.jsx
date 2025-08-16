import React from "react";

export default function SellerListings() {
  const bids = [
    {
      _id: 1,
      title: "Vintage Watch",
      category: "Watches",
      startingPrice: 100,
      currentPrice: 150,
      images: ["https://via.placeholder.com/80"],
    },
    {
      _id: 2,
      title: "Classic Ring",
      category: "Jewellery",
      startingPrice: 50,
      currentPrice: 75,
      images: [],
    },
    {
      _id: 3,
      title: "Retro Camera",
      category: "Retro Tech",
      startingPrice: 180,
      currentPrice: 200,
      images: ["https://via.placeholder.com/80"],
    },
  ];

  const handleUpdate = (id) => {
    console.log("Update item:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete item:", id);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">My Bid Items</h2>

      {bids.length === 0 ? (
        <p>No bid items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Starting Price</th>
                <th className="px-4 py-2 text-left">Current Price</th>
                <th className="px-4 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid) => (
                <tr
                  key={bid._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-2">
                    {bid.images?.[0] ? (
                      <img
                        src={bid.images[0]}
                        alt={bid.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-4 py-2">{bid.title}</td>
                  <td className="px-4 py-2">{bid.category}</td>
                  <td className="px-4 py-2">${bid.startingPrice}</td>
                  <td className="px-4 py-2">
                    {bid.currentPrice ? `$${bid.currentPrice}` : "—"}
                  </td>
                  <td className="px-4 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleUpdate(bid._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(bid._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
