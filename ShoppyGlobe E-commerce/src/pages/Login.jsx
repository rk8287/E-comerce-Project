import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
  return (
     <div className="min-h-screen flex flex-col md:flex-row bg-[#0F172A] text-white">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <div className="flex gap-4 mb-4">
            <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <FcGoogle className="mr-2" /> Sign in with Google
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
              <FaGithub className="mr-2" /> Sign in with Apple
            </button>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-600" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="flex-grow border-gray-600" />
          </div>

          <form className="space-y-4">
            <div>
              <label className="text-sm text-gray-400">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 text-white"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 p-2 bg-gray-800 border border-gray-700 rounded-lg placeholder-gray-500 text-white"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm text-gray-400">Remember me</p>
              </div>
              <a href="#" className="text-sm text-green-500 underline">Forgot password?</a>
            </div>

            <button type="submit" className="w-full py-2 bg-green-950 hover:bg-green-600 rounded-lg font-medium">
              Log in now
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400 text-center">
            New to our platform?{' '}
            <Link to={'/register'} className="text-green-500 underline">Create an account</Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex flex-1 bg-green-950 text-white items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Welcome back! Shop your favorites in one place.
          </h1>
          <p className="mb-6">
            Your go-to destination for the best deals, fastest checkout, and personalized shopping—all in one place.
          </p>
          <div className="flex items-center">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/65.jpg" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/men/73.jpg" alt="" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
            </div>
            <span className="ml-3 text-sm">Trusted by <strong>20,000+</strong> shoppers worldwide</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login