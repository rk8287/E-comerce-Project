import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.0;
  const tax = 8.32;
  const total = (subtotal + shipping + tax).toFixed(2);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="bg-white min-h-screen px-4 py-12 sm:px-6 lg:px-8 mt-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start gap-6 border-b border-gray-200 pb-6"
              >
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-md"
                />
                <div className="flex-1 w-full">
                  <div className="flex justify-between w-full">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {item.color} {item.size && `| ${item.size}`}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        ${item.price.toFixed(2)} × {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 text-xl"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="mt-2 text-sm">
                    {item.status === "In stock" ? (
                      <span className="text-green-600">✔ {item.status}</span> 
                    ) : (
                      <span className="text-gray-500">🕓 {item.status}</span>
                    )}
                  </div>
                </div>
                <select className="border border-gray-300 rounded-md px-2 py-1 w-20" value={item.quantity}>
                  {[1, 2, 3, 4].map((qty) => (
                    <option key={qty}>{qty}</option>
                  ))}
                </select>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-gray-50 flex flex-col h-full">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order summary</h2>

          <div className="space-y-2 text-sm text-gray-700 flex-grow">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping estimate</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax estimate</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-gray-900">
              <span>Order total</span>
              <span>${total}</span>
            </div>
          </div>

          <Link
            to="/checkOut"
            className="mt-6 w-full px-4 py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
