import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Contact from './components/Contact'


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}  >
    <Routes>
      <Route  path="/" element={<App />} />
      <Route  path="contact" element={<Contact />} />
      
     
    </Routes>
  </BrowserRouter>
);


