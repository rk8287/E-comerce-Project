import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import Card from "../pages/Card";
import Filter from "../pages/Filter";
import Pagination from "../pages/Pagination";
import { Link } from "react-router-dom";


function ProductList() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  console.log(products)

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Pagination logic
  const indexOfLast = currentPage * productPerPage;
  const indexOfFirst = indexOfLast - productPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / productPerPage);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div className="px-6 py-10 bg-white min-h-screen mt-12">
      
      <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-8 text-center">
        All Products
      </h2>

      
      <div className="flex flex-col md:flex-row gap-6">
       
        <div className="md:w-1/4">
          <div className="sticky top-24">
            <Filter />
          </div>
        </div>

     
        <div className="md:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <Link to={`/productDetails/${product.id}`} key={product.id}>
              <Card
                key={product.id}
                title={product.title}
                image={product.thumbnail}
                price={product.price}
                rating={product.rating}
              />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
