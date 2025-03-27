import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.find((product) => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handleMinusQuantity = () =>
    setQuantity((prev) => Math.max(prev - 1, 1));
  const handlePlusQuantity = () => setQuantity((prev) => prev + 1);
  const handleAddToCart = () =>
    dispatch(addToCart({ productId: detail.id, quantity }));

  return (
    <div className="min-h-full">
      <h2 className="text-3xl text-center mb-8">PRODUCT DETAIL</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <img src={detail.image} alt={detail.name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors"
                onClick={handleMinusQuantity}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center hover:bg-gray-200 transition-colors"
                onClick={handlePlusQuantity}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl hover:bg-slate-800 transition-colors"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Product Description</h3>
            <p className="text-gray-600">{detail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
