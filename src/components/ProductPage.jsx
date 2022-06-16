import { useEffect, useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  return (
    <div className="product-page">
      <h1>IronStore</h1>
      <SearchBar
        search={search}
        onSearch={setSearch}
        onChecked={setChecked}
        checked={checked}
      />

      <ProductTable
        products={products}
        setProducts={setProducts}
        search={search}
        checked={checked}
      />
    </div>
  );
}
export default ProductsPage;
