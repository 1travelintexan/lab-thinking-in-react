import React, { useEffect, useState } from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, setProducts, search, checked }) {
  const [inStock, setInStock] = useState(products);
  useEffect(() => {
    if (checked) {
      let inStockItems = products.filter((elem) => {
        return elem.inStock === true;
      });
      setInStock(inStockItems);
    } else {
      setInStock(products);
    }
  }, [checked]);

  return (
    <div>
      <div className="product header">
        <h2>Product</h2>
        <h2>Price</h2>
      </div>
      {inStock
        .filter((elem) => {
          return elem.name.toLowerCase().startsWith(search.toLowerCase());
        })
        .map((elem, i) => {
          return <ProductRow key={elem.name + i} product={elem} />;
        })}
    </div>
  );
}

export default ProductTable;
