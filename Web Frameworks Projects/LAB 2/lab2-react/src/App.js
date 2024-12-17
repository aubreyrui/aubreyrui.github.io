import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [showItems, setShowItems] = useState(false);
  const [cats] = useState([
    { category: 'beauty' },
    { category: 'fragrances' },
    { category: 'furniture' },
    { category: 'groceries' }
  ]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [apiResponse, setApiResponse] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateSelected = (selected) => {
    setSelectedCat(selected);
    setShowItems(true);
    console.log(selected);
  };

  const showProduct = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        console.log(res);
        setApiResponse(res.data.products);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {!showItems ? (
        <div className="list-group">
          <h1></h1>
          {cats.map((cat, index) => (
            <button
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => updateSelected(cat.category)}
            >
              {cat.category}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShowItems(false);
              setSelectedProduct(null);
            }}
          >
            Go back
          </button>
          <h1>{selectedCat}</h1>
          {apiResponse.map((product, i) => (
            <div key={i}>
              {product.category === selectedCat && (
                <ul>
                  <li>
                    <a href="#" onClick={() => showProduct(product)}>
                      {product.title}
                    </a>
                  </li>
                </ul>
              )}
              <br />
              {selectedProduct === product && (
                <div>
                  <h2>{product.title}</h2>
                  <img src={product.images} alt={product.title} />
                  <p>Description: {product.description}</p>
                  <p>Price: {product.price}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
