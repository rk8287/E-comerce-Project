import React from "react";

const Filter = () => {
  return (
    <aside className="w-full md:w-64 p-4 bg-white border-r border-gray-200">
      {/* Colors */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Color</h3>
        <ul className="space-y-2 text-gray-700">
          {["White", "Black", "Blue", "Green", "Red", "Yellow"].map((color) => (
            <li key={color}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span>{color}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Category</h3>
        <ul className="space-y-2 text-gray-700">
          {["New Arrivals", "T-Shirts", "Jackets", "Accessories", "Shoes"].map((category) => (
            <li key={category}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span>{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Sizes */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Size</h3>
        <ul className="space-y-2 text-gray-700">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <li key={size}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span>{size}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Price Range</h3>
        <ul className="space-y-2 text-gray-700">
          {["Under ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "Above ₹2000"].map((range) => (
            <li key={range}>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-green-600" />
                <span>{range}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
