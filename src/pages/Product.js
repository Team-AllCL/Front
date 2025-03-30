
import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();
  return (
    <div className="popup-bg">
      <div className="popup">
        <img src="https://via.placeholder.com/100x150?text=제품" alt="상품" />
        <p><strong>비욘드 엔젤아쿠아 수분 진정 토너</strong><br />500ml (비건)</p>
        <p>결제금액 합계: <strong>10,900원</strong><br />구매가 완료되었습니다.</p>
        <button className="main-btn" onClick={() => navigate('/main')}>확인</button>
      </div>
    </div>
  );
}
