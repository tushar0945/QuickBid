// cronJobs.js
import cron from "node-cron";
import BidItem from "./models/BidItem.js";

// Runs every minute
cron.schedule("* * * * *", async () => {
  const now = new Date();

  try {
    // Find approved items whose startDate has passed
    const updated = await BidItem.updateMany(
      {
        status: "approved",
        startDate: { $lte: now },
      },
      { $set: { status: "live" } }
    );

    if (updated.modifiedCount > 0) {
      console.log(`✅ ${updated.modifiedCount} bids set to live`);
    }
  } catch (err) {
    console.error("❌ Error setting bids to live:", err);
  }
});

cronJobs.js;
// import cron from "node-cron";
// import BidItem from "./models/BidItem.js";

// // Runs every minute
// cron.schedule("* * * * *", async () => {
//   const now = new Date();

//   try {
//     // ✅ 1. Set approved items to live if startDate has passed
//     const updatedToLive = await BidItem.updateMany(
//       {
//         status: "approved",
//         startDate: { $lte: now },
//       },
//       { $set: { status: "live" } }
//     );

//     if (updatedToLive.modifiedCount > 0) {
//       console.log(`✅ ${updatedToLive.modifiedCount} bids set to live`);
//     }

//     // ✅ 2. Set live items to ended if endDate has passed
//     const updatedToEnded = await BidItem.updateMany(
//       {
//         status: "live",
//         endDate: { $lte: now },
//       },
//       { $set: { status: "ended" } }
//     );

//     if (updatedToEnded.modifiedCount > 0) {
//       console.log(`✅ ${updatedToEnded.modifiedCount} bids set to ended`);
//     }
//   } catch (err) {
//     console.error("❌ Error in cron job:", err);
//   }
// });
