import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

import ProductDetails from "../../components/product/ProductDetails";
import ProductOther from "../../components/product/ProductOther";
import ProductGallery from "../../components/product/ProductGallery";
import ProductBidSection from "../../components/product/ProductBidSection";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/bids/product/${id}`);
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
