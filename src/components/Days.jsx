import React from 'react';
import './Days.css';
import { useNavigate } from 'react-router-dom';

function Days() {
    const navigate = useNavigate();
  
    const navigateToDays = () => {
      navigate('/Comfirm');
    };
  
    return (
      <div className="Days">
        <form>
            <h1>
                日付選択
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToDays}
            >
            日付選択
            </button>
        </form>
      </div>
    );
  }

  export default Days;