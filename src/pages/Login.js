
import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-wrapper">
      <img src="/images/login.png" alt="로그인 배경" className="login-bg" />
      <div className="login-box">
        <h2>로그인</h2>
        <form onSubmit={(e) => { e.preventDefault(); navigate('/main'); }}>
          <input type="email" placeholder="이메일" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
