import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem('token'); // Retrieve the token from session storage
    if (token) {
      router.push('/dashboard');
    }
  }, []); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const token = data.token;
      sessionStorage.setItem('token', token); 

      setMessage('Login Successfully');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Failed to log in. Please try again.');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className='main-login flex align-center justify-items-center	 mx-auto'>
      <div className='inr-login'>
      <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
            </button>
            <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
