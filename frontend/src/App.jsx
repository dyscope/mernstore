import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons';

// Pages
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import ProductPage from './pages/ProductPage/ProductPage';

// Components
import NavBar from './components/NavBar/NavBar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

library.add(faShoppingCart, faTrashCan);

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <>
      <NavBar click={() => setSideToggle(!sideToggle)} show={sideToggle} />
      <Backdrop show={sideToggle} click={() => setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
