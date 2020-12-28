
import './App.css';

import React from "react";


import {BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./Router/AppRouter";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/video";
import AboutPage from "./pages/AboutPage/AboutPage";





function App() {
  return (

      <HashRouter>
          <AppRouter></AppRouter>
      </HashRouter>


  );
}

export default App;
