import React from 'react';
import './Number.css';
import { useNavigate } from 'react-router-dom';

function Number() {
    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/confirm');
    };

    return (
      <div className="formContainer">
          <div className="infoBox">
              <div className="infoContent">
                  <h4>予約番号をメールアドレスに送信しました。</h4>
                  <br></br>
              </div>
              <button className="submitButton" onClick={navigateToLogin}>
                  次へ
              </button>
          </div>
      </div>
  );
}

export default Number;