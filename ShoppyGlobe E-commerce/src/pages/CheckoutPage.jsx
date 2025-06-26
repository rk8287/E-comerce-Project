import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import successSound from '../assets/library system_src_assets_successed-295058.mp3';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const [email, setEmail] = useState('');
  const [card, setCard] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postal, setPostal] = useState('');

  const playSound = () => {
    const audio = new Audio(successSound);
    audio.play();
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 25.0;
  const tax = 0.1 * subtotal;
  const total = (subtotal + shipping + tax).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !card || !expiry || !cvc || !address || !city || !state || !postal) {
      toast.error('Please fill all required fields!');
      return;
    }

    playSound();
    dispatch(clearCart());
    setTimeout(() => {
      navigate('/paymentSuccess');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-white md:flex mt-15">
      <div className="w-full md:w-2/3 p-8">
        <h2 className="text-xl font-semibold mb-4">Contact information</h2>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <h2 className="text-xl font-semibold mt-8 mb-4">Payment details</h2>
        <input
          type="text"
          placeholder="Card number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          className="input-field"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Expiration date (MM/YY)"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="input-field w-1/2"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="input-field w-1/2"
          />
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">Shipping address</h2>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="input-field"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="input-field w-1/3"
          />
          <input
            type="text"
            placeholder="State / Province"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="input-field w-1/3"
          />
          <input
            type="text"
            placeholder="Postal code"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            className="input-field w-1/3"
          />
        </div>

        <div className="mt-6">
          <label className="inline-flex items-center">
            <input type="checkbox" defaultChecked className="form-checkbox text-green-600" />
            <span className="ml-2">Same as shipping information</span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-8 rounded-md"
        >
          Pay now
        </button>
      </div>

      {/* Right Section – unchanged */}
      <div className="w-full md:w-1/3 bg-green-700 text-white p-8">
        <h2 className="text-2xl font-semibold mb-6">Amount due</h2>
        <p className="text-4xl font-bold mb-6">${total}</p>

        {cartItems.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-4 border-b border-white/20">
            <div className="flex items-center gap-4">
              <img src={item.thumbnail} alt={item.name} className="w-12 h-12 rounded bg-white p-1" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-200">{item.color}</p>
                <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
              </div>
            </div>
            <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}

        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span><span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span><span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Taxes</span><span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold mt-4 border-t border-white/20 pt-2 text-base">
            <span>Total</span><span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
