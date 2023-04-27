import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description} = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(selectedProduct(response.data));
    };

    if (productId && productId !== "") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId, dispatch])

  return (
    <>
    <div className="grid">
      {Object.keys(product).length === 0 ? (
        <div className='grid items-center absolute top-[-10%] w-screen h-screen text-center text-xl font-thin text-stone-700 animate-pulse'>Carregando...</div>
      ) : (
        <div className="grid md:w-[960px] mx-auto mt-20 items-center grid-cols-1 md:grid-cols-2">
          <div className="col mx-2 md:mx-3">
            <img className="w-[350px] mx-auto hover:scale-105 transition-all duration-300 ease-out"  src={image} alt={title} />
          </div>
          <div className="col mx-2 md:mx-3 mt-20">
            <h1 className='text-xl font-bold text-stone-800 mb-2'>{title}</h1>
            <h2 className='bg-stone-900 text-white p-2 rounded-lg inline-block mb-2'>${price}</h2>
            <h3 className='text-sm text-slate-500 mb-4'>{category}</h3>
            <p className='capitalize mb-4'>{description}</p>
            <div className="" tabIndex="0">
              <div className="bg-red-600 p-4 inline-block rounded-xl text-white cursor-pointer transition-all duration-300 hover:bg-red-800 hover:scale-105">Add to Cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Link to={'/'}>
    <button className='bg-stone-900 p-4 text-lg text-white inline-block absolute top-[45%] hover:bg-white hover:text-black hover:border-2 hover:border-black'><span className='animate-pulse'>←</span>  Back</button>
    </Link>
    </>
  );
};

export default ProductDetails;
