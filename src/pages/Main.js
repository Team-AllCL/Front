
import React from 'react';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      {/* ✅ 배너 클릭 시 ticket 페이지로 이동 */}
      <img src="/images/main.png" alt="메인 배너" className="main-banner" />
      <div className="banner-click" onClick={() => navigate('/ticket')}>
        <img src="/images/banner.png" alt="티켓 배너" className="festa-banner" />
      </div>

      <div className="product-section">
        {/* ✅ 첫 번째 상품 클릭 시 product 페이지로 이동 */}
        <div className="product-card" onClick={() => navigate('/product')}>
        </div>
      </div>
    </div>
  );
}
