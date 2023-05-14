import React from 'react';
import { Router } from '@components/router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

function App() {
  return (
    <div className='app'>
      <Router/>
      <ToastContainer
                position='bottom-right'
                autoClose={2000}
                limit={2}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
            />

    </div>
  );
}

export default App;
