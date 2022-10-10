import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavBar.css';

const NavBar = ({ show, click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const hamburgerMenuClass = ['hamburger__menu'];

  if (show) {
    hamburgerMenuClass.push('show');
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_box">
          <div className="navbar__logo">
            <Link to="/">
              <h2>MERN Store</h2>
            </Link>
          </div>

          <ul className="navbar__links">
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/cart" className="cart__link">
                <FontAwesomeIcon icon="shopping-cart" color="white" />
                <span>
                  <span className="cartlogo__badge">{getCartCount()}</span>
                </span>
              </Link>
            </li>
          </ul>

          <div className={hamburgerMenuClass.join(' ')} onClick={click}>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
