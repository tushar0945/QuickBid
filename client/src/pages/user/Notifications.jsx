import React from "react";

const mockNotifications = [
  {
    id: 1,
    type: "bid",
    message: "You have been outbid on 'Canon EOS R10'",
    timestamp: "2 minutes ago",
  },
  {
    id: 2,
    type: "wishlist",
    message: "Item in your wishlist is now on sale: 'Noise Smartwatch'",
    timestamp: "1 hour ago",
  },
  {
    id: 3,
    type: "system",
    message: "Your profile has been updated successfully.",
    timestamp: "Yesterday",
  },
];

const iconByType = {
  bid: "📢",
  wishlist: "❤️",
  system: "⚙️",
};

export default function Notifications() {
  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>

      {mockNotifications.length === 0 ? (
        <p className="text-gray-500">No new notifications.</p>
      ) : (
        <div className="space-y-3">
          {mockNotifications.map((notif) => (
            <div
              key={notif.id}
              className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl">{iconByType[notif.type]}</div>
              <div>
                <p className="text-gray-800">{notif.message}</p>
                <p className="text-sm text-gray-500 mt-1">{notif.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
