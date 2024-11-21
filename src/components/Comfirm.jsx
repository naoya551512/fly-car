import React from 'react';
import './Comfirm.css';
import { useNavigate } from 'react-router-dom';

function Comfirm() {
    const navigate = useNavigate();
  
    const navigateToComfirm = () => {
      navigate('/End');
    };
  
    return (
      <div className="Comfirm">
        <form>
            <h1>
                確認画面
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToComfirm}
            >
            確認
            </button>
        </form>
      </div>
    );
  }

  export default Comfirm;