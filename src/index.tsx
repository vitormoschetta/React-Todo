import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App, { AppRouter } from './App';

ReactDOM.render(
  <React.StrictMode>    
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);






// Se você deseja começar a medir o desempenho em seu aplicativo, passe uma função
// para registrar os resultados (por exemplo: reportWebVitals (console.log))
// ou envie para um endpoint analítico. Saiba mais:
// https://bit.ly/CRA-vitals
reportWebVitals();
