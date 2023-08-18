import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Category from './components/Category';
import Header from './components/Header';
import ProductList from './ProductList';
import Footer from './components/Footer';

import Cart from './components/Cart';



function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <ProductList />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
