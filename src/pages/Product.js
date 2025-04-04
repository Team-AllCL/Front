import React from 'react';
import '../styles/product.css';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const navigate = useNavigate();

  return (
    <div className="product-wrapper">
      <div className="overlay"/>
      <img src="/images/main.png" alt="배경" className="product-bg" />
      <div className="popup">
        <button className="close-btn" onClick={() => navigate('/main')}>×</button>
        <img src="/images/product.png" alt="팝업" className="popup-img" />
        <div className="popup-buttons">
          <button className="buy-btn" onClick={async () => {
              try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/order`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    productName: 'blue toner',
                  }),
                });

                if (!response.ok) throw new Error('API 요청 실패');

                console.log('주문 요청 완료');
                navigate('/product2');
              } catch (error) {
                console.error('에러:', error);
                alert('API 요청 중 문제가 발생했습니다.');
              }
            }}>
            바로 구매
          </button>

          <button className="cart-btn">장바구니</button>
        </div>
      </div>
    </div>
  );
}