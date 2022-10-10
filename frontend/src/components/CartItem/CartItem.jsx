import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.css';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  const [hover, setHover] = useState('#359a86');

  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onMouseOver={() => setHover('#fff')}
        onMouseLeave={() => setHover('#359a86')}
        onClick={() => removeHandler(item.product)}
      >
        <FontAwesomeIcon icon="trash-can" color={hover} />
      </button>
    </div>
  );
};
export default CartItem;
