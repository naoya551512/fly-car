import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // React Router v6 の useNavigate をインポート
import "./Confirm.css"; // confirm.cssは後で作成します。

function Confirm() {
  const navigate = useNavigate(); // useNavigateフックを使ってページ遷移を管理

  // ログインフォームで入力された値
  const [formValues, setFormValues] = useState({
    username: "松田はんと",       // ユーザー名
    reservationNumber: "123456",  // 予約番号
    mailAddress: "sample@example.com", // メールアドレス
    reservationDate: "2024-12-25 15:00", // 予約日時
    reservationRoute: "大工大枚方キャンパス - USJ", // 予約ルート
  });

  // 確認完了ボタンが押された時に /login に遷移する関数
  const handleSubmit = () => {
    navigate("/end"); // /loginページに遷移
  };

  return (
    <div className="formContainer">
      <form>
        <h1>確認画面</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <textarea
              value={formValues.username}
              readOnly
              rows="1"
            />
          </div>
          <div className="formField">
            <label>予約番号</label>
            <textarea
              value={formValues.reservationNumber}
              readOnly
              rows="1"
            />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <textarea
              value={formValues.mailAddress}
              readOnly
              rows="1"
            />
          </div>

          <div className="formField">
            <label>予約日時</label>
            <textarea
              value={formValues.reservationDate}
              readOnly
              rows="1"
            />
          </div>
          <div className="formField">
            <label>予約ルート</label>
            <textarea
              value={formValues.reservationRoute}
              readOnly
              rows="1"
            />
          </div>
          <button className="submitButton" type="button" onClick={handleSubmit}>確認完了</button>
        </div>
      </form>
    </div>
  );
}

export default Confirm;