// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top CTA Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-green-400 font-semibold">Get started</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Boost your productivity.<br />
            Start using our <span className="text-green-400">app today.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg">
            Get started
          </button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm mb-12">
          
          <div>
            <h4 className="font-semibold mb-2">Solutions</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Submit ticket</li>
              <li>Documentation</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Terms of service</li>
              <li>Privacy policy</li>
              <li>License</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-6">
          <p className="mb-4 md:mb-0">© 2024 Your Company, Inc. All rights reserved.</p>
          <div className="flex space-x-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaYoutube />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
