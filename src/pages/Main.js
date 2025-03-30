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
        <img src="/images/festa.png" alt="티켓 배너" className="festa-banner" />
      </div>

      <div className="product-section">
        {/* <h2 className="section-title">요즘 주목 받는 상품</h2> */}

        <div className="product-grid">
          {/* ✅ 첫 번째 상품 클릭 시 product 페이지로 이동 */}
          <div className="product-card" onClick={() => navigate('/product')}>
            {/* <img src="/images/product-blue.png" alt="수분 진정 토너" />
            <p className="name">비욘드 엔젤아쿠아 수분 진정 토너<br />500ml (비건)</p>
            <p className="price"><del>19,000원</del> <strong>10,900원</strong></p> */}
            <p className="purchase"><strong>바로구매</strong></p>
          </div>

          {/* <div className="product-card">
            <img src="/images/product-white.png" alt="피지오겔 시카" />
            <p className="name">피지오겔 레드수딩 시카 토너<br />200ml</p>
            <p className="price"><del>28,000원</del> <strong>22,400원</strong></p>
          </div>

          <div className="product-card">
            <img src="/images/product-pink.png" alt="메디큐브 핑크패드" />
            <p className="name">메디큐브 PDRN 핑크 콜라겐 젤 패드<br />70매</p>
            <p className="price"><del>24,500원</del> <strong>17,900원</strong></p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
