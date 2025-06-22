import React, { useState } from 'react';
import { FaHeart, FaCartPlus } from 'react-icons/fa';

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('Pink');
  const [storage, setStorage] = useState('256GB');
  const [pickupOption, setPickupOption] = useState('Shipping');

  return (
    <div className="bg-[#0F172A] text-white min-h-screen px-4 md:px-10 lg:px-16 py-10 mt-14">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left image section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-700 rounded-lg h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full mb-4" />
        </div>

        {/* Right product info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <span className="text-green-400 font-medium">In stock</span>

          <h1 className="text-2xl sm:text-3xl font-bold">
            Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM, 256GB SSD, Mac OS, Pink
          </h1>

          <div className="flex items-center gap-2 text-yellow-400 text-sm sm:text-base">
            <span className="text-lg">★★★★★</span>
            <span className="text-white">(5.0)</span>
            <a href="#" className="underline">345 Reviews</a>
          </div>

          <p className="text-2xl sm:text-3xl font-bold">$1,249.99</p>

          {/* Action Buttons and Quantity */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mt-4">
            <button className="w-full sm:w-auto px-5 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaHeart /> Add to favorites
            </button>
            <button className="w-full sm:w-auto px-5 py-2 rounded bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2">
              <FaCartPlus /> Add to cart
            </button>
            <div className="flex items-center gap-2">
              <label className="text-sm">Qty</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="bg-gray-800 text-white rounded px-2 py-1"
              >
                {[1, 2, 3, 4, 5].map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
          </div>

          {/* Color */}
          <div>
            <h4 className="font-semibold mb-1">Colour</h4>
            <div className="flex flex-wrap gap-2">
              {['Green', 'Pink', 'Silver', 'Blue'].map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3 py-1 rounded border text-sm ${color === c ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* SSD Capacity */}
          <div>
            <h4 className="font-semibold mb-1">SSD Capacity</h4>
            <div className="flex flex-wrap gap-2">
              {['256GB', '512GB', '1TB'].map(s => (
                <button
                  key={s}
                  onClick={() => setStorage(s)}
                  className={`px-3 py-1 rounded border text-sm ${storage === s ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Pickup */}
          <div>
            <h4 className="font-semibold mb-1">Pickup</h4>
            <div className="space-y-2 text-sm">
              {['Shipping - $19', 'Pickup from Flowbox - $9', 'Pickup from our store - Not available'].map(option => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pickup"
                    value={option}
                    checked={pickupOption === option}
                    onChange={() => setPickupOption(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
