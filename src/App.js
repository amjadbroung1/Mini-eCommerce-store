import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Products from './components/products';
import SingleProduct from './components/singleProduct';
import Cart from './components/cart';

// import TestingComponent from './components/testing';
// import Todo from './components/todo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
          <Route exact path='/cart' element={<Cart />}></Route>
          <Route
            exact
            path='products/products/:id'
            element={<SingleProduct />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
