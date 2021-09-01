import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';


axios.get('http://localhost:6500/auth/es')
  .then(res => {
    // console.log(res.data);
    ReactDOM.render(
      <React.StrictMode>
        <App transDict={res.data}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }).catch(e => {
    console.log(e)
  })
    


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
