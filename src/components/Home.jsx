import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  
    const navigateToLogin = () => {
      navigate('/login');
    };
  
    return (
      <div className="Home">
        <form>
            <h1>
                ホーム
            </h1>
            <hr />

            <button 
            type="button" 
            className="button" 
            onClick={navigateToLogin}
            >
            ホーム
            </button>
        </form>
      </div>
    );
  }

  export default Home;