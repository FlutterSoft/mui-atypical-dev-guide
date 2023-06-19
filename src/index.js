import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import { Grid } from '@mui/material'
import Authentication from './pages/Authentication/Authentication';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import MachineLearning from './pages/Machine Learning/MachineLearning';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Grid container>
        <Navbar />
        <Grid item>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/authentication" element={<Authentication />}></Route>
            <Route path="/database" element={<Database />}></Route>
            <Route path="/storage" element={<Storage />}></Route>
            <Route path="/hosting" element={<Hosting />}></Route>
            <Route path="/functions" element={<Functions />}></Route>
            <Route path="/machine-learning" element={<MachineLearning />}></Route>
          </Routes>
        </Grid>
    </Grid>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
