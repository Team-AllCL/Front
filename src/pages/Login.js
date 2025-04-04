import React, { useState } from 'react';   // ⭐ useState 추가
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  // ⭐ 이메일, 비밀번호 저장할 상태 추가
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-wrapper">
      <img src="/images/login.png" alt="로그인 배경" className="login-bg" />
      <div className="login-box">
        <form
          onSubmit={async (e) => {  // ⭐ async 꼭 붙여야 await 가능
            e.preventDefault();
            try {
  		const response = await fetch('http://172.30.48.1:8080/api/v1/users/register', {
    		method: 'POST',
    		headers: {
    		  'Content-Type': 'application/json',
   		 },
   		 body: JSON.stringify({ email, password }),
 		 });

		 if (response.ok) {
   			console.log("로그인 성공");
    			navigate('/main');
  		} else {
   			alert("로그인 실패 / ID 등록");
   			navigate('/main');
  		}
		} catch (error) {
			console.error("에러 발생:", error);
		}		

          }}   // ⭐ 여기가 함수 닫는 중괄호
        >
          {/* ⭐ input에 value, onChange 추가 */}
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
