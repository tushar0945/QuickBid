// // src/components/profile components/EmailsAndNotifications.jsx

// import React from 'react';

// const settings = [
//   {
//     title: 'NEWSLETTERS & MORE',
//     description: 'Stay up to date with the latest news from Catawiki',
//     options: [
//       'Weekly newsletter',
//       'Seller newsletter',
//       'Special offers & tips',
//       'Sales support',
//     ],
//   },
//   {
//     title: 'MY FOLLOWED AUCTIONS, FAVOURITE LOTS & AUCTION ALERTS',
//     description: 'Updates on lots and auctions that match your preferences',
//     options: [
//       'Weekly update for all interests',
//     ],
//   },
// ];

// export default function EmailsAndNotifications() {
//   return (
//     <div className="w-full max-w-4xl mx-auto pt-4">
//       <h1 className="text-2xl font-semibold mb-4">Emails & Notifications</h1>

//       {settings.map((section, index) => (
//         <div key={index} className="mb-8">
//           <div className="border-b pb-2 mb-4">
//             <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
//               {section.title}
//             </p>
//             <p className="text-sm text-gray-600">{section.description}</p>
//           </div>

//           {section.options.map((label, idx) => (
//             <div key={idx} className="flex items-center justify-between py-3 border-b last:border-b-0">
//               <span className="text-base text-gray-900">{label}</span>
//               <label className="inline-flex items-center cursor-pointer">
//                 <input type="checkbox" className="sr-only peer" defaultChecked />
//                 <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300
//                                 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
//                                 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
//                                 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
//                                 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
//                                 dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600">
//                 </div>
//               </label>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

const settings = [
  {
    title: "NEWSLETTERS & MORE",
    description: "Stay up to date with the latest news from Catawiki",
    options: [
      "Weekly newsletter",
      "Seller newsletter",
      "Special offers & tips",
      "Sales support",
    ],
  },
  {
    title: "MY FOLLOWED AUCTIONS, FAVOURITE LOTS & AUCTION ALERTS",
    description: "Updates on lots and auctions that match your preferences",
    options: ["Weekly update for all interests"],
  },
];

export default function EmailsAndNotifications() {
  return (
    <div className="w-full max-w-4xl mx-auto pt-4">
      <p className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-10">
        Emails & Notifications changes
      </p>

      {settings.map((section, index) => (
        <div key={index} className="mb-8 bg-white p-4 rounded-md shadow-sm">
          <div className="border-b pb-2 mb-4">
            <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              {section.title}
            </p>
            <p className="text-sm text-gray-600 mt-1">{section.description}</p>
          </div>

          {section.options.map((label, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3 border-b last:border-b-0"
            >
              <span className="text-sm sm:text-base text-gray-900">
                {label}
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div
                  className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300
                  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
                  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white
                  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300
                  after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                  dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
                ></div>
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
