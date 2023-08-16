
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Category from './components/Category';
import Header from './components/Header';
import ProductList from './ProductList';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
