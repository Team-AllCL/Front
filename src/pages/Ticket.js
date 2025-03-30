
import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export default function Ticket() {
  const navigate = useNavigate();
  return (
    <div className="centered">
      <div className="ticket">
        <h2>OLIVE YOUNG AWARDS FESTA</h2>
        <p>2025 올리브영 페스타 티켓 판매 오픈!</p>
        <p>6월 11일 ~ 6월 15일 / 송도 컨벤시아</p>
        <button className="main-btn" onClick={() => navigate('/ticket-success')}>티켓 구매하기</button>
      </div>
    </div>
  );
}
