import React, { useEffect } from "react";
import img from "../assets/images/img-one.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section className="flex flex-col md:flex-row items-center min-h-screen px-10 py-20 bg-[#0F172A]">
        {/* Left side - Text */}
        <div className="flex-1 text-[#ffffff]">
          <h1 className="text-5xl font-black tracking-tight">
            SHOP THE <span className="text-green-400">LATEST TRENDS</span>
          </h1>
          <p className="text-gray-300 mt-6 max-w-md">
            Discover amazing products, unbeatable prices, and a shopping
            experience that brings happiness directly to your doorstep.
          </p>
          <Link
            to="/products"
            className="inline-block mt-6 bg-green-400 border border-gray-500 px-4 py-2 
             text-black font-semibold hover:bg-green-600 
             transition transform hover:translate-x-1 hover:translate-y-1 shadow-md"
          >
            SHOP NOW
          </Link>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 mt-10 md:mt-0 ml-0 md:ml-10 flex justify-end">
          <img
            src={img}
            alt="Shop the Latest Trends"
            className="w-1xl rounded-md shadow-md filter brightness-90 contrast-125"
          />
        </div>
      </section>

      <section>
        <div className="bg-green-950 min-h-screen text-white">
          <section className="text-center py-12">
            <h2 className="text-xl md:text-2xl text-green-400 font-semibold italic">
              Build
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mt-2">
              Build an online store that <br className="hidden md:block" />
              <span className="text-green-400">never sleeps.</span>
            </h1>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition">
              Build an online store today →
            </button>
          </section>

          <section className="bg-white rounded-t-3xl py-10 px-4 md:px-8 max-w-7xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">
              Popular Products
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {loading ? (
                <p className="text-center col-span-full">Loading...</p>
              ) : error ? (
                <p className="text-center text-red-500 col-span-full">
                  Error: {error}
                </p>
              ) : products?.length > 0 ? (
                products.slice(0, 12).map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-xl shadow-lg bg-white text-black"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold">{product.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-green-600 font-semibold">
                          ${product.price}
                        </span>
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-full">No products found.</p>
              )}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white py-12 px-4 md:px-16">
            <div>
              <h4 className="font-bold text-lg mb-2 text-green-400">
                Show your brand in bold
              </h4>
              <p>Pick from an array of stunning templates.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-green-400">
                Launch with zero code
              </h4>
              <p>Save time and costs on coding.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-green-400">
                Customize, start to finish
              </h4>
              <p>Show your buyers how easy and modern your store is.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-green-400">
                Curate pretty displays
              </h4>
              <p>Thoughtfully list, categorize, and present products.</p>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#fdf0da] py-24 px-4 flex flex-col items-center text-center relative overflow-hidden">
        {/* Central Text */}
        <div className="z-10 relative mb-16 md:mb-20">
          <p className="text-red-500 italic">Manage</p>
          <h2 className="text-xl md:text-2xl font-medium">
            From shopping carts to content customers
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            your entire order cycle,
            <br /> automated
          </h1>
        </div>

        {/* Outer Circle */}
        <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] border border-black rounded-full flex items-center justify-center">
          {/* Center is empty */}

          {/* Icons around circle */}
          <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#ff4b4b"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#0e4e47",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2">Online order placed</p>
          </div>

          <div className="absolute top-[15%] right-[-30px] flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/yrbmguoo.json"
              trigger="loop"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ffe3e3",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2 text-center">Payments received</p>
          </div>

          <div className="absolute bottom-[25%] right-[-30px] flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/whrxobsb.json"
              trigger="loop"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#d7f7f1",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2 text-center">
              Inventory levels
              <br />
              updated
            </p>
          </div>

          <div className="absolute bottom-[-30px] right-1/2 translate-x-1/2 flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/gqzfzudq.json"
              trigger="loop"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ffffff",
                border: "4px solid #4ade80",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2 text-center">
              Product delivered
              <br />
              to the customer
            </p>
          </div>

          <div className="absolute bottom-[25%] left-[-30px] flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/ulhdumaq.json"
              trigger="loop"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#f4f4f4",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2 text-center">
              Happy
              <br />
              customer +1
            </p>
          </div>

          <div className="absolute top-[15%] left-[-30px] flex flex-col items-center">
            <lord-icon
              src="https://cdn.lordicon.com/dnmvmpfk.json"
              trigger="loop"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#f4f4f4",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
            <p className="text-sm mt-2 text-center">
              Products shipped
              <br />& tracked
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
