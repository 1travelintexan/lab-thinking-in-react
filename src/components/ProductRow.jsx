import React, { useState, useEffect } from 'react';

function ProductRow({ product }) {
  const [inStock, setInStock] = useState(true);
  useEffect(() => {
    if (!product.inStock) {
      setInStock(false);
    } else {
      setInStock(true);
    }
  }, [product]);

  return (
    <>
      {inStock ? (
        <div className="product">
          <h2> {product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      ) : (
        <div className="product red">
          <h2> {product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      )}
    </>
  );
}

export default ProductRow;
