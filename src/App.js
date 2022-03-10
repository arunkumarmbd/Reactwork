import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Topheader from './components/Topheader';
import Banner from './components/Banner';
import './css/style.css';
import FontAwesome from 'react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContentRequest from "./components/ContentRequest";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);  
  return (
    <div className="App">      
      <Topheader />
      <Banner />
      <ContentRequest />
      {

      }
    </div>
  );  
}
export default App;
