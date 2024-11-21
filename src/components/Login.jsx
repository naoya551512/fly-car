import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/reserve');
    };
  
    return (
      <div className="Login">
        <form>
            <h1>
                ログイン画面
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToLogin}
            >
            ログイン
            </button>
        </form>
      </div>
    );
  }

  export default Login;