import express from "express";
import User from "../models/User.js"; // Adjust path to your User model
import BidItem from "../models/BidItem.js"; // your mongoose model
import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
const router = express.Router();

// GET all sellers
router.get("/sellers", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const sellers = await User.find({ role: "seller" }).select("-password"); // exclude password
    res.status(200).json({
      success: true,
      count: sellers.length,
      sellers,
    });
  } catch (error) {
    console.error("Error fetching sellers:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get all customers
router.get("/customers", authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password"); // exclude password
    // console.log(customers);
    res.status(200).json({
      success: true,
      count: customers.length,
      customers,
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

//Get all pending-biditems
router.get(
  "/pending-biditems",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const pendingItems = await BidItem.find({ status: "pending" })
        .sort({ createdAt: -1 }) // newest first
        .lean();

      res.status(200).json(pendingItems);
    } catch (error) {
      console.error("Error fetching pending bid items:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

router.put(
  "/bids/approve/:id",
  authMiddleware,
  adminMiddleware,
  async (req, res) => {
    try {
      const { id } = req.params;

      const bidItem = await BidItem.findById(id);

      if (!bidItem) {
        return res.status(404).json({ message: "Bid item not found" });
      }

      if (bidItem.status !== "pending") {
        return res
          .status(400)
          .json({ message: "Bid item is not in pending state" });
      }

      bidItem.status = "approved";
      await bidItem.save();

      res.status(200).json({
        message: "Bid item approved successfully",
        bidItem,
      });
    } catch (error) {
      console.error("Error approving bid item:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

export default router;
