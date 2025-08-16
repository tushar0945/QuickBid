import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";

export default function LiveBidding() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchPendingBids = async () => {
    try {
      const res = await axiosInstance.get("/api/admin/pending-biditems", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBids(res.data || []);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to fetch bidding items");
    } finally {
      setLoading(false);
    }
  };

  const approveBid = async (id) => {
    try {
      await axiosInstance.put(
        `/api/admin/bids/approve/${id}`,
        { status: "approved" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBids((prev) => prev.filter((bid) => bid._id !== id));
    } catch (err) {
      console.error("Failed to approve bid:", err);
      alert("Error approving bid");
    }
  };

  useEffect(() => {
    fetchPendingBids();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Pending Bidding Items
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : bids.length === 0 ? (
        <p>No pending bids found.</p>
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
                  <td className="px-4 py-2 flex justify-center">
                    <button
                      onClick={() => approveBid(bid._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                    >
                      Approve
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
