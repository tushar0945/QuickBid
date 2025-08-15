// // models/Bid.js
// import mongoose from "mongoose";

// const bidSchema = new mongoose.Schema({
//   auction: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "BidItem",
//     required: true,
//   },
//   bidder: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   amount: { type: Number, required: true },
//   time: { type: Date, default: Date.now },
// });

// export default mongoose.model("Bid", bidSchema);

import mongoose from "mongoose";

const bidSchema = new mongoose.Schema({
  item: {
    // ✅ renamed from auction for clarity
    type: mongoose.Schema.Types.ObjectId,
    ref: "BidItem",
    required: true,
  },
  bidder: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  time: { type: Date, default: Date.now },
});

export default mongoose.model("Bid", bidSchema);
