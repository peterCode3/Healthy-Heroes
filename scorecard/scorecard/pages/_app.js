// pages/_app.js
import 'tailwindcss/tailwind.css'; 
import '../src/app/globals.css'; 
import '/src/assets/css/form.css'
import '/src/assets/css/dashboard.css'
import '/src/assets/css/style.css'
import '/src/assets/css/participants.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
