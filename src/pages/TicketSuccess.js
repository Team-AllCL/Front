
import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export default function TicketSuccess() {
  const navigate = useNavigate();
  return (
    <div className="popup-bg">
      <div className="popup">
        <img src="https://via.placeholder.com/80x80?text=🎫" alt="티켓" />
        <h3>올리브영 페스타 티켓</h3>
        <p>결제금액 합계: <strong>30,000원</strong></p>
        <p>구매가 완료되었습니다.</p>
        <button className="main-btn" onClick={() => navigate('/main')}>확인</button>
      </div>
    </div>
  );
}
