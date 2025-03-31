
import React from 'react';
import '../styles/ticket2.css';
import { useNavigate } from 'react-router-dom';

export default function Ticket2() {
  const navigate = useNavigate();
  return (
    <div className="ticket-wrapper">
      <img src="/images/ticket2.png" alt="티켓 성공 배경" className="ticket-bg" />
      <div className="popup-box">
        <h3>올리브영 페스타 티켓</h3>
        <p>결제금액 합계: <strong>30,000원</strong></p>
        <p>구매가 완료되었습니다.</p>
        <button onClick={() => navigate('/ticket')}>확인</button>
      </div>
    </div>
  );
}
