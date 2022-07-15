import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/loginbg.jpg');
`;

const LoginForm = styled.form`
  width: 320px;
  height: 320px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.3);
  padding: 50px 50px 0;
  border-radius: 60px;
  box-shadow: 0 0 20px #ffffff;
`;

LoginForm.Input = styled.input`
  width: 100%;
  height: 60px;
  padding: 15px;
  background: #f3f3f3;
  color: rgba(0, 0, 0, 0.8);
  margin: 10px 0;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 1.2rem;
  box-shadow: 0 0 8px #ffffff;

  &:focus {
    outline: none;
  }
`;

LoginForm.Submit = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px 25px;
  background-color: #2196f3;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 20px auto 0;
`;

const ErrorMessage = styled.small`
  color: #ff0000;
  font-weight: 900;
  display: block;
  font-size: 1.4rem;
  margin: 20px auto 0;
`;

const SuccessMessage = styled.small`
  color: #00ff00;
  font-weight: 900;
  display: block;
  font-size: 1.2rem;
  margin: 20px auto;
`;

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState({});
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === process.env.LOGIN_USERNAME && password === process.env.LOGIN_PASSWORD) {
      setResponse({ success: true, message: "Success! Wait, we'll redirect you." });
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(process.env.LOGGED_KEY, process.env.LOGGED_VALUE);
      }
      router.push({ pathname: '/admin', param: { logged: true } });
    } else {
      setResponse({ success: false, message: 'User or Password was not correct.' });
    }
  };

  return (
    <Background>
      <LoginForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <LoginForm.Input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="username"
        />

        <LoginForm.Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />

        <LoginForm.Submit type="submit">Login</LoginForm.Submit>

        {response.success === false && <ErrorMessage>{response.message}</ErrorMessage>}
        {response.success === true && <SuccessMessage>{response.message}</SuccessMessage>}
      </LoginForm>
    </Background>
  );
}

export default Login;
