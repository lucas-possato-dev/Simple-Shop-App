import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
    .get("https://fakestoreapi.com/products")
    .catch((err) => {
      console.log("Err", err);
    });
    dispatch(setProducts(response.data));
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div>
      <ProductComponent />
    </div>
    </>
  )
}

export default ProductListing