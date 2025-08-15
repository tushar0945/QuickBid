// models/Slide.js
import mongoose from "mongoose";

const slideSchema = new mongoose.Schema({
  title: String, // e.g., "Summer Jewellery"
  subtitle: String, // e.g., "Collection"
  description: String, // e.g., "Celebrate summer's bold beauty..."
  image: String, // image URL for carousel
  slug: String, // e.g., "jewellery" (matches navigation)
});

export default mongoose.model("Slide", slideSchema);
