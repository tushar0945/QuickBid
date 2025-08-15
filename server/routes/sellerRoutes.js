// import express from "express";
// import BidItem from "../models/BidItem.js";
// import upload from "../middleware/upload.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// // POST /api/seller/bids/add
// router.post(
//   "/add",
//   authMiddleware, // Only logged-in sellers
//   upload.array("images", 4),
//   async (req, res) => {
//     try {
//       const {
//         title,
//         category,
//         description,
//         condition,
//         signature,
//         era,
//         countryOfOrigin,
//         material,
//         height,
//         width,
//         depth,
//         numberOfItems,
//         startingPrice,
//         reservePrice,
//         listingType,
//         auctionDuration,
//         deliveryMethod,
//         shippingCost,
//       } = req.body;

//       const imagePaths = req.files?.map((file) => file.path) || [];

//       const newBidItem = new BidItem({
//         title,
//         category,
//         description,
//         condition,
//         signature,
//         era,
//         countryOfOrigin,
//         material,
//         height,
//         width,
//         depth,
//         numberOfItems,
//         startingPrice,
//         reservePrice,
//         listingType,
//         auctionDuration,
//         deliveryMethod,
//         shippingCost,
//         images: imagePaths,
//         seller: req.user._id,
//       });

//       await newBidItem.save();

//       res.status(201).json({
//         success: true,
//         message: "Auction item created successfully",
//         data: newBidItem,
//       });
//     } catch (error) {
//       console.error("Error creating auction item:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to create auction item",
//         error: error.message,
//       });
//     }
//   }
// );

// export default router;

import express from "express";
import BidItem from "../models/BidItem.js";
import upload from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/seller/bids/add
router.post(
  "/add",
  authMiddleware, // Only logged-in sellers
  upload.array("images", 4),
  async (req, res) => {
    try {
      const {
        title,
        category,
        description,
        condition,
        signature,
        era,
        countryOfOrigin,
        material,
        height,
        width,
        depth,
        numberOfItems,
        startingPrice,
        reservePrice,
        listingType,
        auctionDuration,
        deliveryMethod,
        shippingCost,
        startDate, // ✅ Accept from frontend
        endDate, // ✅ Accept from frontend
      } = req.body;

      const imagePaths = req.files?.map((file) => file.path) || [];

      // ✅ Determine start date: use frontend value or default to now
      const finalStartDate = startDate ? new Date(startDate) : new Date();

      // ✅ Determine end date:
      let finalEndDate = endDate ? new Date(endDate) : null;
      if (!finalEndDate && auctionDuration) {
        const durationInDays = parseInt(auctionDuration);
        if (!isNaN(durationInDays)) {
          finalEndDate = new Date(finalStartDate.getTime());
          finalEndDate.setDate(finalStartDate.getDate() + durationInDays);
        }
      }

      const newBidItem = new BidItem({
        title,
        category,
        description,
        condition,
        signature,
        era,
        countryOfOrigin,
        material,
        height,
        width,
        depth,
        numberOfItems,
        startingPrice,
        reservePrice,
        listingType,
        auctionDuration,
        startDate: finalStartDate, // ✅ Save start date
        endDate: finalEndDate, // ✅ Save end date
        deliveryMethod,
        shippingCost,
        images: imagePaths,
        seller: req.user._id,
        status: "pending", // All new items start as pending
      });

      await newBidItem.save();

      res.status(201).json({
        success: true,
        message: "Auction item submitted for approval",
        data: newBidItem,
      });
    } catch (error) {
      console.error("Error creating auction item:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create auction item",
        error: error.message,
      });
    }
  }
);

export default router;
