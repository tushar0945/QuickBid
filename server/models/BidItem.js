// // // models/BidItem.js
// // import mongoose from "mongoose";

// // const bidItemSchema = new mongoose.Schema({
// //   title: String,
// //   description: String,
// //   images: [String],
// //   category: String, // should match Slide slug like 'jewellery'
// //   price: Number,
// //   createdAt: { type: Date, default: Date.now },
// // });

// // export default mongoose.model("BidItem", bidItemSchema);

// // models/BidItem.js
// import mongoose from "mongoose";

// const bidItemSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   category: { type: String, required: true },
//   condition: { type: String, required: true },
//   signature: { type: String },
//   era: { type: String, required: true },
//   countryOfOrigin: { type: String, required: true },
//   material: { type: String, required: true },
//   numberOfItems: { type: Number, default: 1, min: 1 },

//   height: { type: Number },
//   width: { type: Number },
//   depth: { type: Number },

//   startingPrice: { type: Number, required: true },
//   reservePrice: { type: Number },
//   listingType: {
//     type: String,
//     enum: ["Auction", "Buy Now"],
//     default: "Auction",
//   },
//   auctionDuration: { type: String },
//   startDate: { type: Date },
//   endDate: { type: Date },

//   deliveryMethod: {
//     type: String,
//     enum: ["Shipping", "Pickup", "Both"],
//     default: "Shipping",
//   },
//   shippingCost: { type: String },

//   description: { type: String, required: true },
//   images: [{ type: String }],

//   seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

//   status: {
//     type: String,
//     enum: ["pending", "approved", "live", "ended", "sold", "rejected"],
//     default: "pending",
//   },

//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("BidItem", bidItemSchema);

import mongoose from "mongoose";

const bidItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  signature: { type: String },
  era: { type: String, required: true },
  countryOfOrigin: { type: String, required: true },
  material: { type: String, required: true },
  numberOfItems: { type: Number, default: 1, min: 1 },

  height: { type: Number },
  width: { type: Number },
  depth: { type: Number },

  startingPrice: { type: Number, required: true },
  currentPrice: { type: Number, default: 0 }, // ✅ NEW: highest bid so far
  reservePrice: { type: Number },

  listingType: {
    type: String,
    enum: ["Auction", "Buy Now"],
    default: "Auction",
  },
  auctionDuration: { type: String },
  startDate: { type: Date },
  endDate: {
    type: Date,
    required: function () {
      return this.listingType === "Auction";
    },
  },

  deliveryMethod: {
    type: String,
    enum: ["Shipping", "Pickup", "Both"],
    default: "Shipping",
  },
  shippingCost: { type: String },

  description: { type: String, required: true },
  images: [{ type: String }],

  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  currentPrice: { type: Number, default: 0 },
  lastBidder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  // ✅ NEW: for auction closing
  winner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  finalPrice: { type: Number, default: null },

  status: {
    type: String,
    enum: ["pending", "approved", "live", "ended", "sold", "rejected"],
    default: "pending",
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("BidItem", bidItemSchema);
