import React from "react";
import { Rating } from "react-simple-star-rating";

function Card({ title, image, price, rating }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      {/* Image */}
      <a href="#">
        <img
          className="p-6 rounded-t-lg object-contain h-48 w-full"
          src={image}
          alt={title}
          loading="lazy"
        />
      </a>

      {/* Content */}
      <div className="flex flex-col justify-between flex-grow px-5 pb-5">
        {/* Title and Rating */}
        <div className="mb-4">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white min-h-[3rem] line-clamp-2">
            {title}
          </h5>

          <div className="flex items-center mt-2">
            <Rating
              initialValue={rating}
              readonly
              allowFraction
              size={20}
              SVGstyle={{ display: "inline-block" }}
            />
            <span className="ml-2 text-sm text-gray-400">{rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Price and Button aligned at bottom */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white truncate max-w-[100px]">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
