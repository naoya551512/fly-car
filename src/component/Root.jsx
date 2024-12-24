import React from 'react';
import './Root.css';
import { useNavigate } from 'react-router-dom';

function Root() {
    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/days');
    };

    return (
      <div className="formContainer">
          <div className="infoBox">
              <h1>コース選択画面</h1>
              <hr />
              <div className="infoContent">
                  <p>以下のコースから1つ選択してください。</p>
                  <h2>コースA：大工大枚方キャンパス-USJ</h2>
                  <h2>コースB：大工大枚方キャンパス-大阪城</h2>
                  <h2>コースC：大工大枚方キャンパス-淀川河川敷


                  </h2>
              </div>
              <button className="submitButton" onClick={navigateToLogin}>
                  コースA
              </button>
              <button className="submitButton" onClick={navigateToLogin}>
                  コースB
              </button>
              <button className="submitButton" onClick={navigateToLogin}>
                  コースC
              </button>
          </div>
      </div>
  );
}

export default Root;