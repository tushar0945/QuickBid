// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import slideRoutes from "./routes/slideRoutes.js";
// import bidItemRoutes from "./routes/bidItemRoutes.js";
// import sellerBidsRoutes from "./routes/sellerBids.js";

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect to DB
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch((err) => console.error("❌ MongoDB connection failed:", err));

// // Register routes
// app.use("/api/auth", authRoutes);

// app.use("/api/slides", slideRoutes);
// app.use("/api/bids", bidItemRoutes);

// app.use("/api/users", userRoutes);

// app.use("/api/seller/bids", sellerBidsRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import "./cronJobs.js"; // <-- Add this line
// Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import slideRoutes from "./routes/slideRoutes.js";
import bidItemRoutes from "./routes/bidItemRoutes.js";
import sellerBidsRoutes from "./routes/sellerRoutes.js";
import auctionRoutes from "./routes/auctionRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/slides", slideRoutes);
app.use("/api/bids", bidItemRoutes); // Public bids
app.use("/api/seller/bids", sellerBidsRoutes); // Seller-only bids
app.use("/api/auction", auctionRoutes);
app.use("/api/admin", adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
