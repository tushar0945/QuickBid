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
