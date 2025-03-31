
import React from 'react';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom';

export default function Product2() {
  const navigate = useNavigate();

  return (
    <div className="product-wrapper">
      <div className="overlay"/>
      <img src="/images/main.png" alt="배경" className="product-bg" />
      <div className="popup">
        <button className="close-btn" onClick={() => navigate('/main')}>×</button>
        <img src="/images/product2.png" alt="팝업" className="popup-img" />
        <div className="popup-buttons">
          <button className="confirm-btn2" onClick={() => navigate('/main')}>확인</button>
        </div>
      </div>
    </div>
  );
}
