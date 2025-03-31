import React from 'react';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();

  return (
    <div className="product-wrapper">
      <div className="overlay"/>
      <img src="/images/main.png" alt="배경" className="product-bg" />
      <div className="popup">
        <button className="close-btn" onClick={() => navigate('/main')}>×</button>
        <img src="/images/product.png" alt="팝업" className="popup-img" />
        <div className="popup-buttons">
          <button className="buy-btn" onClick={() => navigate('/product2')}>바로 구매</button>
          <button className="cart-btn">장바구니</button>
        </div>
      </div>
    </div>
  );
}
