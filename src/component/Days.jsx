import React from 'react';
import './Days.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Days() {
    const navigate = useNavigate();
  
    const navigateToDays = () => {
        navigate('/number');
    };
  
    const initialValues = { date: "", time: "" }; // 時間フィールドを追加
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("選択された日付:", formValues.date);
            console.log("選択された時間:", formValues.time);
        }
    }, [formErrors]);

    // 日付と時間のバリデーション
    const validate = (values) => {
        const errors = {};
        if (!values.date) {
            errors.date = "日付を選択してください。";
        }
        if (!values.time) {
            errors.time = "時間を選択してください。";
        }
        return errors;
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>日時選択</h1>
                <hr />
                <div className="uiForm">
                    {/* 日付入力 */}
                    <div className="formField">
                        <label>日付</label>
                        <input
                            type="date"
                            name="date"
                            value={formValues.date}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="errorMsg">{formErrors.date}</p>

                    {/* 時間入力 */}
                    <div className="formField">
                        <label>時間</label>
                        <input
                            type="time"
                            name="time"
                            value={formValues.time}
                            onChange={handleChange}
                        />
                    </div>
                    <p className="errorMsg">{formErrors.time}</p>

                    <button className="submitButton" type="submit">
                        確定
                    </button>
                    <button className="submitButton" onClick={navigateToDays}>
                        次へ
                    </button>
                    {Object.keys(formErrors).length === 0 && isSubmit && (
                        <div className="msgOk">
                            日時が選択されました: {formValues.date} {formValues.time}
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Days;