import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 px-4"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center space-y-6"
      >
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 text-lg">
          Your product will be delivered soon. Thank you for shopping with us! 
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Success;
