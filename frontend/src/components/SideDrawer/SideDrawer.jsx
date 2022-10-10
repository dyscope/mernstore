import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SideDrawer.css';

const SideDrawer = ({ show }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const [hover, setHover] = useState('#359a86');
  const sideDrawerClass = ['sidedrawer'];

  if (show) {
    sideDrawerClass.push('show');
  }

  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links">
        <li
          onMouseOver={() => setHover('#fff')}
          onMouseLeave={() => setHover('#359a86')}
        >
          <Link to="/cart">
            <FontAwesomeIcon
              icon="shopping-cart"
              color={hover}
              className="shopping-cart"
            />
            <span>
              Cart{' '}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideDrawer;
