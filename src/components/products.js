import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const responce = await fetch('https://fakestoreapi.com/products');

      if (componentMounted) {
        setData(await responce.clone().json());
        setFilter(await responce.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    console.log(data);
    getData();
  }, []);

  const filterProduct = (cat) => {
    const updateData = data.filter((x) => {
      return x.category == cat;
    });
    setFilter(updateData);
  };

  const Loading = () => {
    return <Skeleton />;
  };

  const ShowProducts = () => {
    return (
      <>
        {' '}
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <div
            className='btn btn-outline-dark me-2'
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </div>
          <div
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </div>
          <div
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('jewelery')}
          >
            jewelery
          </div>
          <div
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('electronics')}
          >
            Electronics
          </div>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className='col-md-3 mb-4'>
                <div
                  className='card h-100 text-center p-4'
                  key={product.id}
                  style={{ width: '18rem' }}
                >
                  <img
                    className='card-img-top'
                    src={product.image}
                    alt={product.title}
                    height='250px'
                  />
                  <div className='card-body'>
                    <h5 className='card-title mb-0'>
                      {product.title.substring(0, 50)}
                    </h5>
                    <p className='card-text lead fw-bold'>${product.price}</p>
                    <NavLink
                      to={`products/${product.id}`}
                      className='btn btn-outline-dark'
                    >
                      Buy
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-12-mb-5'>
            <h1 className='display-6 fw-bolder text-center'>
              Lattest products
            </h1>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
