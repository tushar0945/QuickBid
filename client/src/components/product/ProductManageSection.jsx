import React from "react";

export default function ProductManageSection({ product }) {
  const handleEdit = () => {
    console.log("Edit product", product._id);
    // navigate to edit page or open edit modal
  };

  const handleUpdate = () => {
    console.log("Update product", product._id);
    // open update form/modal
  };

  return (
    <div className="w-full lg:w-[340px] flex flex-col items-center gap-4 lg:mt-16">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 w-full">
        <div className="flex gap-2 mb-4">
          {/* Two Buttons */}

          <button className="w-1/2 py-2 border border-blue-500 text-blue-500 font-semibold rounded">
            Button 1
          </button>
          <button className="w-1/2 py-2 bg-blue-600 text-white font-semibold rounded">
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
}
