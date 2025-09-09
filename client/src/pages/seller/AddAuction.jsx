import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance"; // adjust path

// ✅ Custom overlay component
const SubmittingOverlay = () => (
  <div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mb-4"></div>
    <p className="text-xl font-semibold text-gray-700">
      Submitting your item...
    </p>
  </div>
);

export default function AddItemForm() {
  const inputClass =
    "border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full";
  const navigate = useNavigate();

  // Sample dropdown values
  const categories = ["Furniture", "Art", "Jewelry", "Collectibles"];
  const conditions = ["New", "Like New", "Used", "Antique"];

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    condition: "",
    era: "",
    signature: "",
    countryOfOrigin: "",
    material: "",
    numberOfItems: "",
    height: "",
    width: "",
    depth: "",
    startingPrice: "",
    reservePrice: "",
    listingType: "Auction",
    auctionDuration: "", // matches schema
    startDate: "",
    endDate: "",
    deliveryMethod: "Shipping",
    shippingCost: "",
    description: "",
    images: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [auctionDuration, setDuration] = useState("3"); // default 3 days
  const [endDate, setEndDate] = useState("");

  // Auto-calculate end date whenever startDate or auctionDuration changes
  useEffect(() => {
    if (formData.startDate && formData.auctionDuration) {
      const start = new Date(formData.startDate);
      const calculatedEnd = new Date(start);
      calculatedEnd.setDate(
        start.getDate() + parseInt(formData.auctionDuration)
      );
      setFormData((prev) => ({
        ...prev,
        endDate: calculatedEnd.toISOString().slice(0, 10),
      }));
    }
  }, [formData.startDate, formData.auctionDuration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: files }));

    // preview images
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      for (let key in formData) {
        if (key !== "images") {
          form.append(key, formData[key]);
        }
      }
      formData.images.forEach((file) => form.append("images", file));

      // ✅ Axios instance handles token and JSON automatically
      const response = await axiosInstance.post("/api/seller/bids/add", form);

      // Success check
      if (response.status === 200 || response.status === 201) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-2xl my-16">
      {/* ✅ Show overlay only when submitting */}
      {isSubmitting && <SubmittingOverlay />}

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Basic Info */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Basic Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="title"
              placeholder="Title of Item"
              value={formData.title}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select Condition</option>
              {conditions.map((cond) => (
                <option key={cond} value={cond}>
                  {cond}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="era"
              placeholder="Era or Estimated Period"
              value={formData.era}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="text"
              name="signature"
              placeholder="Signature / Markings"
              value={formData.signature}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="text"
              name="countryOfOrigin"
              placeholder="Country of Origin"
              value={formData.countryOfOrigin}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="text"
              name="material"
              placeholder="Material"
              value={formData.material}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="numberOfItems"
              placeholder="Number of Items"
              value={formData.numberOfItems}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>
        </div>

        {/* Dimensions */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Dimensions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="width"
              placeholder="Width (cm)"
              value={formData.width}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="depth"
              placeholder="Depth (cm)"
              value={formData.depth}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        {/* Pricing & Listing */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Pricing & Listing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="number"
              name="startingPrice"
              placeholder="Starting Bid / Price"
              value={formData.startingPrice}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="reservePrice"
              placeholder="Reserve Price (optional)"
              value={formData.reservePrice}
              onChange={handleChange}
              className={inputClass}
            />
            <select
              name="listingType"
              value={formData.listingType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Auction">Auction</option>
              <option value="Buy Now">Buy Now</option>
            </select>

            {/* Auction-Specific Fields */}
            {formData.listingType === "Auction" && (
              <>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate || ""}
                  onChange={(e) => {
                    const start = e.target.value;
                    setFormData((prev) => ({
                      ...prev,
                      startDate: start,
                      endDate: prev.auctionDuration
                        ? new Date(
                            new Date(start).getTime() +
                              prev.auctionDuration * 24 * 60 * 60 * 1000
                          )
                            .toISOString()
                            .split("T")[0]
                        : prev.endDate,
                    }));
                  }}
                  className={inputClass}
                  required
                />

                <select
                  name="auctionDuration"
                  value={formData.auctionDuration || ""}
                  onChange={(e) => {
                    const dur = Number(e.target.value);
                    setFormData((prev) => ({
                      ...prev,
                      auctionDuration: dur,
                      endDate: prev.startDate
                        ? new Date(
                            new Date(prev.startDate).getTime() +
                              dur * 24 * 60 * 60 * 1000
                          )
                            .toISOString()
                            .split("T")[0]
                        : "",
                    }));
                  }}
                  className={inputClass}
                  required
                >
                  <option value="">Select Duration</option>
                  <option value="1">1 day</option>
                  <option value="3">3 days</option>
                  <option value="5">5 days</option>
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                </select>

                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate || ""}
                  readOnly
                  className={`${inputClass} bg-gray-100`}
                />
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Description
          </h3>
          <textarea
            name="description"
            placeholder="Item Description"
            value={formData.description}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            rows={5}
            required
          />
        </div>

        {/* Images */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Upload Images
          </h3>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {imagePreviews.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Preview ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg border border-gray-300"
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// const AddItemForm = () => {
//   // Tailwind shortcut
//   const inputClass =
//     "border rounded-lg px-3 py-2 w-full outline-none focus:ring-2 focus:ring-blue-400";

//   // Dropdown options
//   const categories = ["Furniture", "Art", "Collectibles", "Jewelry"];
//   const conditions = ["New", "Used - Like New", "Used - Good", "Used - Fair"];

//   // State
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     images: [],
//     category: "",
//     condition: "",
//     listingType: "Auction",
//   });

//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [submitting, setSubmitting] = useState(false);

//   // Handle inputs
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle image uploads
//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);
//     setFormData((prev) => ({ ...prev, images: files }));
//     setImagePreviews(files.map((file) => URL.createObjectURL(file)));
//   };

//   // Simulated submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       setSubmitting(false);
//       alert("Form submitted successfully!");
//     }, 2000);
//   };

//   return (
//     <div className="relative max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-2xl my-16">
//       {/* Overlay when submitting */}
//       {submitting && (
//         <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
//           <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
//             Submitting your auction...
//           </div>
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-10">
//         {/* Basic Info */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Basic Info
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="title"
//               placeholder="Title of Item"
//               value={formData.title}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             >
//               <option value="">Select Category</option>
//               {categories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="condition"
//               value={formData.condition}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             >
//               <option value="">Select Condition</option>
//               {conditions.map((cond) => (
//                 <option key={cond} value={cond}>
//                   {cond}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="text"
//               name="era"
//               placeholder="Era or Estimated Period"
//               value={formData.era}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="text"
//               name="signature"
//               placeholder="Signature / Markings"
//               value={formData.signature}
//               onChange={handleChange}
//               className={inputClass}
//             />
//             <input
//               type="text"
//               name="countryOfOrigin"
//               placeholder="Country of Origin"
//               value={formData.countryOfOrigin}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="text"
//               name="material"
//               placeholder="Material"
//               value={formData.material}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="numberOfItems"
//               placeholder="Number of Items"
//               value={formData.numberOfItems}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//           </div>
//         </div>
//         {/* Dimensions */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Dimensions
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <input
//               type="number"
//               name="height"
//               placeholder="Height (cm)"
//               value={formData.height}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="width"
//               placeholder="Width (cm)"
//               value={formData.width}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="depth"
//               placeholder="Depth (cm)"
//               value={formData.depth}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>
//         </div>
//         {/* Pricing & Listing */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Pricing & Listing
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="number"
//               name="startingPrice"
//               placeholder="Starting Bid / Price"
//               value={formData.startingPrice}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="reservePrice"
//               placeholder="Reserve Price (optional)"
//               value={formData.reservePrice}
//               onChange={handleChange}
//               className={inputClass}
//             />
//             <select
//               name="listingType"
//               value={formData.listingType}
//               onChange={handleChange}
//               className={inputClass}
//             >
//               <option value="Auction">Auction</option>
//               <option value="Buy Now">Buy Now</option>
//             </select>

//             {formData.listingType === "Auction" && (
//               <select
//                 name="auctionDuration"
//                 value={formData.auctionDuration}
//                 onChange={handleChange}
//                 className={inputClass}
//                 required
//               >
//                 <option value="">Select Auction Duration</option>
//                 <option value="1 day">1 Day</option>
//                 <option value="3 days">3 Days</option>
//                 <option value="5 days">5 Days</option>
//                 <option value="7 days">7 Days</option>
//                 <option value="10 days">10 Days</option>
//               </select>
//             )}
//           </div>
//         </div>
//         {/* Delivery */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">Delivery</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <select
//               name="deliveryMethod"
//               value={formData.deliveryMethod}
//               onChange={handleChange}
//               className={inputClass}
//             >
//               <option value="Shipping">Shipping</option>
//               <option value="Pickup">Pickup</option>
//               <option value="Both">Both</option>
//             </select>
//             <input
//               type="text"
//               name="shippingCost"
//               placeholder="Shipping Cost (e.g. Free, ₹100, Buyer pays)"
//               value={formData.shippingCost}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           </div>
//         </div>
//         {/* Description */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Description
//           </h3>
//           <textarea
//             name="description"
//             placeholder="Item Description"
//             value={formData.description}
//             onChange={handleChange}
//             className={`${inputClass} resize-none`}
//             rows={5}
//             required
//           />
//         </div>
//         {/* Images */}
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Upload Images
//           </h3>
//           <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//             onChange={handleImageUpload}
//             className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//           />
//           {imagePreviews.length > 0 && (
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//               {imagePreviews.map((src, idx) => (
//                 <img
//                   key={idx}
//                   src={src}
//                   alt={`Preview ${idx + 1}`}
//                   className="w-full h-40 object-cover rounded-lg border border-gray-300"
//                 />
//               ))}
//             </div>
//           )}
//         </div>{" "}
//         {/* Submit */}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit Auction
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddItemForm;
