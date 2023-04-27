import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';

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
    <div className="grid">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="grid md:w-[960px] mx-auto mt-20 grid-cols-1 md:grid-cols-2">
          <div className="col mx-2 md:mx-3">
            <img className="w-[350px] mx-auto"  src={image} alt={title} />
          </div>
          <div className="col mx-2 md:mx-3 mt-20">
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>{category}</h3>
            <p>{description}</p>
            <div className="" tabIndex="0">
              <div className="visible">Add to Cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
