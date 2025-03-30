
import React from 'react';
import '../styles/style.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="centered">
      <h1>OLIVE YOUNG</h1>
      <h2>로그인</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate('/main');
        }}
      >
        <input type="email" placeholder="이메일" required />
        <br />
        <input type="password" placeholder="비밀번호" required />
        <br />
        <button className="main-btn" type="submit">
          로그인
        </button>
        <br />
        <button
          type="button"
          className="kakao-btn"
          onClick={() => navigate('/main')}
        >
          카카오로 로그인
        </button>
      </form>
    </div>
  );
}
