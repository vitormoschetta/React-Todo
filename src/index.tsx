import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

import './services/firebase';

ReactDOM.render(
  <React.StrictMode>    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals (console.log))
// ou envie para um endpoint analítico. Saiba mais:
// https://bit.ly/CRA-vitals
reportWebVitals();
