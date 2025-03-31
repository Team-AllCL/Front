import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ticket.css';

export default function Ticket() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleConfirm = () => {
    setShowPopup(false);
    navigate('/ticket');
  };

  return (
    <div className="ticket-wrapper">
      <img src="/images/logo.png" alt="로고" className="logo-button" onClick={() => navigate('/main')} />

      <img src="/images/ticket.png" alt="티켓 배경" className="ticket-bg" />
      <button className="ticket-buy-btn" onClick={() => setShowPopup(true)}> 티켓 구매하기 </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-img-wrapper">
            <img src="/images/ticket_popup.png" alt="팝업 이미지" className="ticket-popup-img" />
            <button className="popup-confirm-btn" onClick={handleConfirm}> 확인 </button>
          </div>
        </div>
      )}
    </div>
  );
}
