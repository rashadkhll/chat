import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.initChatWidget = function(selector) {
  const container = document.querySelector(selector);
  if (!container) {
    console.error('Chat widget container not found');
    return;
  }
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
};
