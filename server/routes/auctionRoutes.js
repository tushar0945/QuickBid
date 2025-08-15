// import express from "express";
// import Bid from "../models/Bid.js"; // Adjust path as needed
// import User from "../models/User.js"; // Adjust path as needed

// const router = express.Router();

// // GET highest bid and bidder info for a product
// router.get("/highest/:productId", async (req, res) => {
//   const { productId } = req.params;

//   try {
//     // Find the highest bid for the given productId
//     const highestBidDoc = await Bid.findOne({ productId })
//       .sort({ amount: -1 }) // Sort descending by amount to get highest first
//       .populate("userId", "name avatar") // Populate userId with only name and avatar fields
//       .exec();

//     if (!highestBidDoc) {
//       // No bids found for this product yet
//       return res.json({
//         highestBid: 0,
//         highestBidder: null,
//       });
//     }

//     const highestBid = highestBidDoc.amount;
//     const highestBidder = highestBidDoc.userId;

//     return res.json({
//       highestBid,
//       highestBidder,
//     });
//   } catch (err) {
//     console.error("Error fetching highest bid:", err);
//     return res
//       .status(500)
//       .json({ message: "Server error fetching highest bid" });
//   }
// });

// export default router;

import express from "express";
import Bid from "../models/Bid.js"; // Adjust path as needed
import User from "../models/User.js"; // Adjust path as needed
import BidItem from "../models/BidItem.js";
// For product info in POST route

const router = express.Router();

// GET highest bid and bidder info for a product
// router.get("/highest/:productId", async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const highestBidDoc = await Bid.findOne({ productId })
//       .sort({ amount: -1 })
//       .populate("userId", "name avatar")
//       .exec();

//     if (!highestBidDoc) {
//       return res.json({
//         highestBid: 0,
//         highestBidder: null,
//       });
//     }

//     const highestBid = highestBidDoc.amount;
//     const highestBidder = highestBidDoc.userId;

//     return res.json({
//       highestBid,
//       highestBidder,
//     });
//   } catch (err) {
//     console.error("Error fetching highest bid:", err);
//     return res
//       .status(500)
//       .json({ message: "Server error fetching highest bid" });
//   }
// });

// POST place a new bid
// router.post("/bids", async (req, res) => {
//   const { itemId, amount, userId } = req.body;

//   if (!itemId || !amount || !userId) {
//     return res.status(400).json({ message: "Missing required fields." });
//   }

//   try {
//     const product = await Product.findById(itemId);
//     if (!product) {
//       return res.status(404).json({ message: "Product not found." });
//     }

//     const highestBidDoc = await Bid.findOne({ productId: itemId })
//       .sort({ amount: -1 })
//       .exec();

//     const currentHighest = highestBidDoc
//       ? highestBidDoc.amount
//       : product.startingPrice;

//     if (amount <= currentHighest) {
//       return res.status(400).json({
//         message: `Bid must be higher than current highest bid (€${currentHighest}).`,
//       });
//     }

//     const newBid = new Bid({
//       productId: itemId,
//       userId,
//       amount,
//     });

//     await newBid.save();

//     product.currentPrice = amount;
//     await product.save();

//     return res.json({ newHighestBid: amount, success: true });
//   } catch (err) {
//     console.error("Error placing bid:", err);
//     return res.status(500).json({ message: "Server error placing bid." });
//   }
// });

// router.get("/highest/:productId", async (req, res) => {
//   try {
//     const product = await BidItem.findById(req.params.productId)
//       .populate("lastBidder", "name avatar")
//       .exec();

//     if (!product) return res.status(404).json({ message: "Product not found" });

//     res.json({
//       highestBid: product.currentPrice || product.startingPrice,
//       highestBidder: product.lastBidder || null,
//     });
//   } catch (err) {
//     res.status(500).json({ message: "Server error fetching highest bid" });
//   }
// });

// router.post("/bids", async (req, res) => {
//   const { itemId, amount, userId } = req.body;

//   if (!itemId || !amount || !userId) {
//     return res.status(400).json({ message: "Missing required fields." });
//   }

//   try {
//     const newBid = new Bid({
//       item: itemId, // matches schema
//       bidder: userId, // matches schema
//       amount,
//     });

//     await newBid.save();

//     // Update BidItem with latest highest bid and last bidder
//     await BidItem.findByIdAndUpdate(itemId, {
//       currentPrice: amount,
//       lastBidder: userId,
//     });

//     return res.json({ newHighestBid: amount });
//   } catch (error) {
//     console.error("Error placing bid:", error);
//     return res.status(500).json({ message: "Error placing bid." });
//   }
// });

// export default router;

// // ✅ Get highest bid for a product
// router.get("/highest/:productId", async (req, res) => {
//   try {
//     const product = await BidItem.findById(req.params.productId)
//       .populate({
//         path: "lastBidder",
//         select: "name avatar", // ✅ only get these fields
//       })
//       .exec();

//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     console.log("product :", product.lastBidder.name);
//     res.json({
//       highestBid: product.currentPrice || product.startingPrice,
//       highestBidder: product.lastBidder || null,
//     });
//   } catch (err) {
//     console.error("Error fetching highest bid:", err);
//     res.status(500).json({ message: "Server error fetching highest bid" });
//   }
// });

// ✅ Get highest bid for a product
router.get("/highest/:productId", async (req, res) => {
  try {
    const product = await BidItem.findById(req.params.productId)
      .populate({
        path: "lastBidder",
        select: "firstName lastName", // only fetch these fields from User
      })
      .exec();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // console.log(product.lastBidder.name);
    // console.log(product.lastBidder ? product.lastBidder.name : "No bidder yet");
    // console.log(product.lastBidder.firstName);

    res.json({
      highestBid: product.currentPrice || product.startingPrice,
      highestBidder: product.lastBidder
        ? {
            firstName: product.lastBidder.firstName,
            lastName: product.lastBidder.lastName,
          }
        : null,
    });
  } catch (err) {
    console.error("Error fetching highest bid:", err);
    res.status(500).json({ message: "Server error fetching highest bid" });
  }
});

// ✅ Place a new bid
router.post("/bids", async (req, res) => {
  const { itemId, amount, userId } = req.body;

  if (!itemId || !amount || !userId) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    // Fetch the current product
    const product = await BidItem.findById(itemId);
    // console.log("Bditem", product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if new bid is higher
    const currentHighest = product.currentPrice || product.startingPrice;
    if (amount <= currentHighest) {
      return res
        .status(400)
        .json({ message: "Bid must be higher than current price." });
    }

    // Save new bid
    const newBid = new Bid({
      item: itemId,
      bidder: userId,
      amount,
    });
    await newBid.save();

    // Update product's current price and last bidder
    product.currentPrice = amount;
    product.lastBidder = userId;
    await product.save();

    // Populate bidder details to send back
    const updatedProduct = await BidItem.findById(itemId)
      .populate("lastBidder", "name avatar")
      .exec();

    return res.json({
      message: "Bid placed successfully",
      newHighestBid: updatedProduct.currentPrice,
      highestBidder: updatedProduct.lastBidder,
    });
  } catch (error) {
    console.error("Error placing bid:", error);
    return res.status(500).json({ message: "Error placing bid." });
  }
});

export default router;
