import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ticket.css';
import { UserContext } from '../context/UserContext'; // 👈 context import

export default function Ticket() {
  const navigate = useNavigate();
  const { userEmail } = useContext(UserContext); // 👈 로그인한 이메일 가져오기
  const [showPopup, setShowPopup] = useState(false);

  const handleBuyTicket = async () => {
    const requestData = {
      email: userEmail, // 👈 userId 대신 이메일 전달
      ticketName: '올리브영페스타'
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/ticketing`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
      });

      if (response.ok) {
        const result = await response.json();
        console.log("티켓 발급 성공:", result);
        setShowPopup(true);
      } else {
        console.error("티켓 발급 실패:", response.status);
        alert("이미 티켓을 발급 받았습니다.");
      }
    } catch (error) {
      console.error("에러 발생:", error);
      alert("서버 요청 중 문제가 발생했습니다.");
    }
  };

  const handleConfirm = () => {
    setShowPopup(false);
    //navigate('/ticket2');
  };

  return (
    <div className="ticket-wrapper">
      <img src="/images/logo.png" alt="로고" className="logo-button" onClick={() => navigate('/main')} />
      <img src="/images/ticket.png" alt="티켓 배경" className="ticket-bg" />
      <button className="ticket-buy-btn" onClick={handleBuyTicket}>티켓 구매하기</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-img-wrapper">
            <img src="/images/ticket_popup.png" alt="팝업 이미지" className="ticket-popup-img" />
            <button className="popup-confirm-btn" onClick={handleConfirm}>확인</button>
          </div>
        </div>
      )}
    </div>
  );
}
