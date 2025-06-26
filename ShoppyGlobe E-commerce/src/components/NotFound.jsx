import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 px-4"
    >
      <div className="max-w-2xl w-full text-center space-y-8">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-6xl md:text-8xl font-extrabold text-green-700"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600"
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>

        <motion.img
          src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-illustration-download-in-svg-png-gif-file-formats--404-error-page-pack-network-communication-illustrations-6167023.png"
          alt="Not Found"
          className="mx-auto w-72 md:w-96"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <Link
            to="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition"
          >
            ⬅ Return to Home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default NotFound;