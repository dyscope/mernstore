import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HomePage.css';

// Components
import Product from '../../components/Product/Product';

// Actions
import { getProducts as listProducts } from '../../redux/actions/productActions';

const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h2 className="page__title">Latest Products</h2>
      <div className="products__grid">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </>
  );
};
export default HomePage;
