
import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  return (
    <>
      <div className="banner">
        <h2>페스타 티켓 구매하기</h2>
        <p>6월 11일 ~ 6월 15일 | 송도 컨벤시아</p>
        <button className="main-btn" onClick={() => navigate('/ticket')}>티켓 구매하러 가기</button>
      </div>

      <h3 className="section-title">추천 상품</h3>
      <div className="products">
        <div className="card">
          <p><strong>비욘드 수분 진정 토너</strong><br />500ml (비건)</p>
          <p><del>19,000원</del> → 10,900원</p>
          <button className="buy-btn" onClick={() => navigate('/product')}>바로 구매</button>
        </div>
      </div>
    </>
  );
}
