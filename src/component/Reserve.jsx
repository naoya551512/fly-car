import React from 'react';
import styles from './Reserve.module.css'; // CSS Modules をインポート
import { useNavigate } from 'react-router-dom';

function Reserve() {
    const navigate = useNavigate();

    const navigateToLogin1 = () => {
        navigate('/Root');
    };
    const navigateToLogin2 = () => {
        navigate('/Confirm');
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.infoBox}>
                <h1>予約画面</h1>
                <hr />
                <br></br>
                <button className="submitButton" onClick={navigateToLogin1}>
                    予約
                </button>
                <button className="submitButton" onClick={navigateToLogin2}>
                    予約確認
                </button>
            </div>
        </div>
    );
}

export default Reserve;