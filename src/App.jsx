import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <div className="app-container">
      <Menu />
      <div className="content-container">
        <AddProductForm handleAddProduct={handleAddProduct} />
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default App;
