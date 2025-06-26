import React from "react";

const Filter = ({ selectedRanges, handlePriceChange }) => {
  const priceOptions = [
    { label: "Under $10", range: [0, 9.99] },
    { label: "$10 - $50", range: [10, 50] },
    { label: "$51 - $100", range: [51, 100] },
    { label: "Above $100", range: [100.01, Infinity] },
  ];

  const handleChange = (range) => {
    handlePriceChange(range);
  };

  return (
    <aside className="w-full md:w-64 p-4 bg-white border-r border-gray-200">
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Category</h3>
        <ul className="space-y-2 text-gray-700">
          {["New Arrivals", "T-Shirts", "Jackets", "Accessories", "Shoes"].map(
            (category) => (
              <li key={category}>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-600"
                  />
                  <span>{category}</span>
                </label>
              </li>
            )
          )}
        </ul>
      </div>

      <hr className="my-4" />

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Price Range
        </h3>
        <ul className="space-y-2 text-gray-700">
          {priceOptions.map(({ label, range }) => (
            <li key={label}>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedRanges.some(
                    ([min, max]) => min === range[0] && max === range[1]
                  )}
                  onChange={() => handlePriceChange(range)}
                  className="form-checkbox text-green-600"
                />
                <span>{label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filter;
