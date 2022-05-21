// External modules
import React from 'react';
import ReactDOM from 'react-dom/client';

// My modules
import App from './App'
import './FontStyle.css'

// Global
import Normalize from './Normalize';
import Colors from './components/Colors';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Normalize/>
	<Colors/>
	<App/>
  </React.StrictMode>
);
