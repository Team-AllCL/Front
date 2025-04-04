import React, { useState, useContext } from 'react'; // ⭐ useContext 추가
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // ⭐ Context import

export default function Login() {
  const navigate = useNavigate();

  // 이메일, 비밀번호 상태
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ⭐ 전역 상태 업데이트 함수 가져오기
  const { setUserEmail } = useContext(UserContext);

  return (
    <div className="login-wrapper">
      <img src="/images/login.png" alt="로그인 배경" className="login-bg" />
      <div className="login-box">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              // const response = await fetch('http://localhost:8080/api/v1/users/register', {
              const response = await fetch('https://alkbwgtelky2lgukd42le7qmqi0qosvi.lambda-url.ap-northeast-2.on.aws', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              });

              if (response.ok) {
                setUserEmail(email); // 👈 로그인 성공 시 이메일 저장
                console.log("로그인 성공");
                navigate('/main');
              } else {
                alert("로그인 실패 / ID 등록");
                navigate('/main');
              }
            } catch (error) {
              console.error("에러 발생:", error);
            }
          }}
        >
          <input 
            type="email" 
            placeholder="CJ ONE 통합회원 이메일" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="비밀번호" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
}
