import React from 'react';
import styles from './End.module.css'; // CSS Modules をインポート
import { useNavigate } from 'react-router-dom';

function End() {
    const navigate = useNavigate();

    const navigateToLogin = () => {
      navigate('/');
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.infoBox}>
                <h1>予約完了画面</h1>
                <hr />
                <br></br>
                <h5>ご予約ありがとうございます！</h5>
                <p>あなたの空飛ぶ車の予約は無事に完了しました。</p>
                <br></br>
                <button className="submitButton" onClick={navigateToLogin}>
                    ホームへ
                </button>
            </div>
        </div>
    );
}

export default End;