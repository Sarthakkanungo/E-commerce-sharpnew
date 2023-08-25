import React, {useState} from 'react';
import ProductList from './ProductList';
import Header from './components/Header';
import Cart from './components/Cart';
import Banner from './components/Banner';

const Home = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
    const hideCartHandler = () => {
      setCartIsShown(false);
    };
  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Banner />
      <ProductList  onShowCart={showCartHandler} />  
    </>
  )
}

export default Home;