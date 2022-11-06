import './App.css';
import Home from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/card';
import Header from './components/header';
import Products from './components/products';

// import TestingComponent from './components/testing';
// import Todo from './components/todo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Products />

        <Routes>
          {/* <Route exact path='/' element={<Home />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
