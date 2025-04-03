
import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: email,
          password: password
        })
      });

      if (response.ok) {
        const user = await response.json();
        alert(`환영합니다, ${user.username}님!`);
        navigate('/main');
      } else {
        const error = await response.text();
        alert(`로그인 실패: ${error}`);
      }
    } catch (error) {
      alert('서버 연결 실패: 나중에 다시 시도해주세요.');
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      <img src="/images/login.png" alt="로그인 배경" className="login-bg" />
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="CJ ONE 통합회원 이메일"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
