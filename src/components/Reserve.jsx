import React from 'react';
import './Reserve.css';
import { useNavigate } from 'react-router-dom';

function Reserve() {
    const navigate = useNavigate();
  
    const navigateToReserve = () => {
      navigate('/root');
    };
  
    return (
      <div className="Reserve">
        <form>
            <h1>
                予約システム
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToReserve}
            >
            予約
            </button>
        </form>
      </div>
    );
  }

  export default Reserve;