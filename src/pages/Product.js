
import React, { useState } from 'react';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      navigate('/product2');
    }, 500); // 0.5초 후 이동
  };

  return (
        
    <div className="product-wrapper">

    <div className="product-background"></div>
    <img src="/images/product.png" alt="배경" className="main-background" />
 
      <div className="popup-box">
        {/* <h3>비욘드 엔젤아쿠아 수분 진정 토너<br />500ml (비건)</h3>
        <img src="/images/product-blue.png" alt="토너" className="popup-img" />
        <p className="price-line">결제금액 합계 <span>10,900원</span></p>
        <p>상품을 구매하시겠습니까?</p> */}
        <button onClick={handleConfirm}>바로 구매</button>
      </div>
    </div>
  );
}
