import { useState } from 'react';
import '../Css/AddProductForm.css';

const AddProductForm = ({ handleAddProduct }) => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: Math.random().toString(36).substring(7),
      name,
      stock: parseInt(stock),
      price: parseFloat(price),
    };

    handleAddProduct(newProduct);

    setName('');
    setStock('');
    setPrice('');
  };

  return (
    <div className="add-product-form-container">
      <h2>Cargar Productos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Producto: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Stock: </label>
          <input
            type="number"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Precio: </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProductForm;
