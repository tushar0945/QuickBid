// // routes/bidItemRoutes.js
// import express from "express";
// import BidItem from "../models/BidItem.js";
// // import express from "express";
// import upload from "../middleware/upload.js";
// const authMiddleware = require("../middleware/authMiddleware"); // JWT middleware
// // import BidItem from "../models/BidItem.js";

// const router = express.Router();

// /**
//  * @route   GET /api/bids
//  * @desc    Get all bids grouped by category, up to 4 items each, latest first
//  */
// router.get("/", async (req, res) => {
//   //   console.log(req);
//   try {
//     const items = await BidItem.aggregate([
//       { $sort: { createdAt: -1 } }, // newest first
//       {
//         $group: {
//           _id: "$category",
//           items: { $push: "$$ROOT" },
//         },
//       },
//       {
//         $project: {
//           category: "$_id",
//           items: { $slice: ["$items", 4] },
//           _id: 0,
//         },
//       },
//     ]);
//     res.json(items); // [{ category: 'jewellery', items: [...] }, ...]
//   } catch (error) {
//     console.error("Error fetching bid items:", error);
//     res.status(500).json({ message: "Failed to fetch bid items." });
//   }
// });

// /**
//  * @route   GET /api/bids/:filter
//  * @desc    Get all bid items in a single category (case-insensitive), latest first
//  */
// router.get("/:filter", async (req, res) => {
//   const filter = req.params.filter;
//   // console.log(filter);
//   try {
//     // Flexible: If you store categories as slugs, this is robust.
//     const items = await BidItem.find({
//       category: { $regex: new RegExp(`^${filter}$`, "i") },
//     }).sort({ createdAt: -1 });

//     // console.log("Item : ", items);
//     res.json({
//       category: filter,
//       items,
//     });
//   } catch (error) {
//     console.error("Error fetching items by filter:", error);
//     res.status(500).json({ message: "Failed to fetch filtered bid items." });
//   }
// });

// router.get("/product/:id", async (req, res) => {
//   const id = req.params.id;

//   try {
//     const item = await BidItem.findById(id);

//     // console.log("backend ", item);
//     if (!item) {
//       return res.status(404).json({ message: "Product not found." });
//     }

//     res.json(item);
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     res.status(500).json({ message: "Failed to fetch the product." });
//   }
// });

// router.post(
//   "/add",
//   authMiddleware,
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

//       // Map file paths to URLs or local path
//       const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

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
//         message: "Bid item created successfully",
//         data: newBidItem,
//       });
//     } catch (error) {
//       console.error("Error saving bid item:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to create bid item",
//         error: error.message,
//       });
//     }
//   }
// );

// export default router;

// import express from "express";
// import BidItem from "../models/BidItem.js";
// import upload from "../middleware/upload.js";
// import authMiddleware from "../middleware/authMiddleware.js"; // Fixed import

// const router = express.Router();

// // GET /api/bids - grouped by category
// router.get("/", async (req, res) => {
//   try {
//     const items = await BidItem.aggregate([
//       { $sort: { createdAt: -1 } },
//       {
//         $group: {
//           _id: "$category",
//           items: { $push: "$$ROOT" },
//         },
//       },
//       {
//         $project: {
//           category: "$_id",
//           items: { $slice: ["$items", 4] },
//           _id: 0,
//         },
//       },
//     ]);
//     res.json(items);
//   } catch (error) {
//     console.error("Error fetching bid items:", error);
//     res.status(500).json({ message: "Failed to fetch bid items." });
//   }
// });

// // GET /api/bids/:filter - items in one category
// router.get("/:filter", async (req, res) => {
//   const filter = req.params.filter;
//   try {
//     const items = await BidItem.find({
//       category: { $regex: new RegExp(`^${filter}$`, "i") },
//     }).sort({ createdAt: -1 });

//     res.json({ category: filter, items });
//   } catch (error) {
//     console.error("Error fetching items by filter:", error);
//     res.status(500).json({ message: "Failed to fetch filtered bid items." });
//   }
// });

// // GET /api/bids/product/:id - single product by ID
// router.get("/product/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const item = await BidItem.findById(id);
//     if (!item) return res.status(404).json({ message: "Product not found." });
//     res.json(item);
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     res.status(500).json({ message: "Failed to fetch the product." });
//   }
// });

// // POST /api/bids/add - create new bid
// router.post(
//   "/additem",
//   authMiddleware,
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

//       const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

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
//         message: "Bid item created successfully",
//         data: newBidItem,
//       });
//     } catch (error) {
//       console.error("Error saving bid item:", error);
//       res.status(500).json({
//         success: false,
//         message: "Failed to create bid item",
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

// ✅ Specific routes FIRST

// GET /api/bids/product/:id - single product by ID
router.get("/product/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const item = await BidItem.findById(id);
    if (!item) return res.status(404).json({ message: "Product not found." });
    res.json(item);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ message: "Failed to fetch the product." });
  }
});

// GET /api/bids - grouped by category
router.get("/", async (req, res) => {
  try {
    const items = await BidItem.aggregate([
      { $match: { status: { $regex: /^live$/i } } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$category",
          items: { $push: "$$ROOT" },
        },
      },
      {
        $project: {
          category: "$_id",
          items: { $slice: ["$items", 4] },
          _id: 0,
        },
      },
    ]);
    res.json(items);
  } catch (error) {
    console.error("Error fetching bid items:", error);
    res.status(500).json({ message: "Failed to fetch bid items." });
  }
});

// ✅ Generic route LAST
// GET /api/bids/:filter - items in one category
router.get("/:filter", async (req, res) => {
  const filter = req.params.filter;
  try {
    const items = await BidItem.find({
      category: { $regex: new RegExp(`^${filter}$`, "i") },
      status: "live",
    }).sort({ createdAt: -1 });

    res.json({ category: filter, items });
  } catch (error) {
    console.error("Error fetching items by filter:", error);
    res.status(500).json({ message: "Failed to fetch filtered bid items." });
  }
});

export default router;
