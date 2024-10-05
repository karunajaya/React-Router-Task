import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import All from "./assets/All";
import Full from "./Full";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";
import { BrowserRouter, Route, Router,Routes } from "react-router-dom";


function App() {
  return (
    <> 
      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route index path="/" element={<All />} />
        <Route index path="/Full" element={<Full />} />
        <Route index path="/DataScience" element={<DataScience />} />
        <Route index path="/CyberSecurity" element={<CyberSecurity />} />
        <Route index path="/Career" element={<Career />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;



