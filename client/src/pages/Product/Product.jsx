// import React, { useEffect, useState } from "react";
// import ProductDetails from "../../components/product/ProductDetails";
// import ProductOther from "../../components/product/ProductOther";
// import axiosInstance from "../../api/axiosInstance";

// export default function Product() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Example API call
//     axiosInstance
//       .get("")
//       .then((res) => setProduct(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   if (!product) return <p>Loading...</p>;

//   return (
//     <>
//       <ProductDetails product={product} />
//       <ProductOther product={product} />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

import ProductDetails from "../../components/product/ProductDetails";
import ProductOther from "../../components/product/ProductOther";
import ProductGallery from "../../components/product/ProductGallery";
import ProductBidSection from "../../components/product/ProductBidSection";

// export default function Product() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [likes, setLikes] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isViewerOpen, setIsViewerOpen] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axiosInstance.get(`/bids/product/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };
//     fetchProduct();
//   }, [id]);

//   const handleLike = () => setLikes((prev) => prev + 1);
//   const openViewer = (index) => {
//     setCurrentIndex(index);
//     setIsViewerOpen(true);
//   };
//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % (product?.images?.length || 1));
//   };
//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) =>
//         (prev - 1 + (product?.images?.length || 1)) %
//         (product?.images?.length || 1)
//     );
//   };

//   if (!product) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <>
//       <ProductDetails
//         product={product}
//         likes={likes}
//         handleLike={handleLike}
//         openViewer={openViewer}
//         currentIndex={currentIndex}
//         isViewerOpen={isViewerOpen}
//         nextSlide={nextSlide}
//         prevSlide={prevSlide}
//         setIsViewerOpen={setIsViewerOpen}
//       />
//       <ProductOther productId={id} />
//     </>
//   );
// }

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/bids/product/${id}`);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 px-4">
        {/* Left - Gallery & Info */}
        <ProductGallery product={product} />

        {/* Right - Bidding & Buyer Protection */}
        <ProductBidSection product={product} />
      </div>

      {/* Bottom Section: Extra Details */}
      <div className="px-4 mt-8">
        <ProductOther product={product} />
      </div>
    </>
  );
}
