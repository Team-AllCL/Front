
import React from 'react';
import '../styles/ticket.css';
import { useNavigate } from 'react-router-dom';

export default function Ticket() {
  const navigate = useNavigate();
  return (
    <div className="ticket-wrapper">
      <img src="/images/ticket.png" alt="티켓 배경" className="ticket-bg" />
      <div className="ticket-box">
        <h2>2025 올리브영 페스타<br />티켓 판매 오픈</h2>
        <p>일정: 6월 11일 ~ 6월 15일</p>
        <p>장소: 송도 컨벤시아 전시홀</p>
        <button onClick={() => navigate('/ticket2')}>티켓 구매하기</button>
      </div>
    </div>
  );
}
