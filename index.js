import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import './index.css'; // Assuming you have additional CSS styling
const root = ReactDOM.createRoot(document.getElementById('root'));
const ele = (
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
root.render(ele);
