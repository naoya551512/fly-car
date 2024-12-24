import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/login');
    };

    return (
      <div className="formContainer">
          <div className="infoBox">
              <h1>空飛ぶ車予約サイト</h1>
              <hr />
              <div className="infoContent">
                  <h3>お問い合わせ情報</h3>
                  <p>電話番号: 090-XXXX-XXXX</p>
                  <p>営業時間: 9:00 - 18:00 </p>
                  <p>「ログインへ」をクリックしてログインページに進んでください。</p>
              </div>
              <button className="submitButton" onClick={navigateToLogin}>
                  ログインへ
              </button>
          </div>
      </div>
  );
}

export default Home;