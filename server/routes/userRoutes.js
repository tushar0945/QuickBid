// routes/userRoutes.js or similar
const express = require("express");
const router = express.Router();
const importedUser = require("../models/User"); // ✅ import the module
const User = importedUser.default; // ✅ extract actual model
// Adjust path if needed
const authMiddleware = require("../middleware/authMiddleware"); // JWT middleware
const Order = require("../models/Order");
const Notification = require("../models/Notification");

// ✅ Become Seller route
router.post("/become-seller", authMiddleware, async (req, res) => {
  try {
    const { businessName } = req.body;

    if (!businessName) {
      return res.status(400).json({ message: "Business name is required" });
    }

    // Find logged-in user
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update role and business name
    user.role = "seller";
    user.businessName = businessName;
    await user.save();

    res.status(200).json({
      message: "Role updated to seller successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        businessName: user.businessName,
      },
    });
  } catch (error) {
    console.error("Become seller error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/users/account , authMiddleware
router.put("/account", authMiddleware, async (req, res) => {
  try {
    // console.log(req.user);
    const userId = req.user._id; // from token middleware

    const updates = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      company: req.body.company,
    };

    //   if (req.body.password) {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //     updates.password = hashedPassword;
    //   }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true }
    ).select("-password"); // don't send password back
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 👇 Add this address update route below your other user routes
router.put("/address", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const updates = {
      address: {
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        country: req.body.country,
      },
      //   isProfileComplete: true, // ✅ Final step
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Address update error:", error);
    res.status(500).json({ message: "Failed to update address" });
  }
});

// Add this below your address route
router.put("/payment", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;

    const updates = {
      paymentDetails: {
        cardNumber: req.body.cardNumber,
        expiry: req.body.expiry,
        cvv: req.body.cvv,
      },
      isProfileComplete: true, // You can keep this if payment is also required to complete the profile
    };

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Payment update error:", error);
    res.status(500).json({ message: "Failed to update payment details" });
  }
});

// PUT /api/users/notifications - update email notification preference
router.put("/notifications", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update only the emailUpdates preference
    user.notificationPreferences = {
      ...user.notificationPreferences,
      emailUpdates: req.body.emailUpdates,
    };

    const updatedUser = await user.save();

    res.status(200).json({
      notificationPreferences: updatedUser.notificationPreferences,
    });
  } catch (error) {
    console.error("Notification update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password"); // exclude password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id/userdetails", authMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    // console.log(userId);
    const user = await User.findById(userId).select("-password");
    const orders = await Order.find({ user: userId });
    const notifications = await Notification.find({ user: userId });
    // console.log(user);
    return res.status(200).json({ user, orders, notifications });
  } catch (error) {
    console.log("Details fetch error: ", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
