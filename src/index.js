import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContextProvider from './context/ContextProvider';
import { PermissionProvider } from './context/PermissionContext';
 // ✅ Add this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <PermissionProvider permissions={{}}> {/* You can also pass empty initially */}
        <App />
      </PermissionProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
