import React from 'react';
import './Root.css';
import { useNavigate } from 'react-router-dom';

function Root() {
    const navigate = useNavigate();
  
    const navigateToRoot = () => {
      navigate('/days');
    };
  
    return (
      <div className="Root">
        <form>
            <h1>
                ルート選択
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToRoot}
            >
            ルート選択
            </button>
        </form>
      </div>
    );
  }

  export default Root;