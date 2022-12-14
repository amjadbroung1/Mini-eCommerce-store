import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { addCart } from '../redux/action/action';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const Loading = () => {
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };

    fetchData();
  }, []);
  const ShowProduct = () => {
    return (
      <>
        <div className='col-md-6'>
          <img
            src={product.image}
            alt={product.title}
            height='400px'
            width='400px'
          />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{product.category}</h4>
          <h1 className='display-5'>{product.title}</h1>
          <p className='lead'>
            Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
          </p>
          <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-dark' onClick={() => addProduct(product)}>
            Add to Cart
          </button>
          <NavLink to='/cart' className='btn btn-dark ms-2 px-3 py-2'>
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className='container py -5'>
      <div className='row'>{loading ? <Loading /> : <ShowProduct />}</div>
      <div>{product.id}</div>
    </div>
  );
};

export default SingleProduct;
