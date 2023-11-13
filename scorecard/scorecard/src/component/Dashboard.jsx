import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Dashboard() {
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('token');
      if (!token) {
        router.push('/');
      }
    }
  }, []); 

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('token'); 
      setMessage('Logged out successfully');
      router.push('/');
    }
  };

  return (
    <>
        <div className='dashboard-main'>
          <div className='container'>
            <div className='inr-dashboard'>
              <h1>Welcome to Dashboard!</h1>
              <div className='logout'>
                <button onClick={handleLogout}>Logout</button>
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Dashboard;
