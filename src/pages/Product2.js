
import React from 'react';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom';

export default function Product2() {
  const navigate = useNavigate();

  return (
    <div className="product-wrapper">

            
    <div className="product-background"></div>
    <img src="/images/product2.png" alt="배경" className="main-background" />


      <div className="popup-box">
        {/* <h3>비욘드 엔젤아쿠아 수분 진정 토너<br />500ml (비건)</h3>
        <img src="/images/product-blue.png" alt="토너" className="popup-img" />
        <p className="price-line">결제금액 합계 <span>10,900원</span></p>
        <p>구매가 완료되었습니다.</p> */}
        <button onClick={() => navigate('/main')}>확인</button>
      </div>
    </div>
  );
}
