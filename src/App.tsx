import React from 'react';
import './App.css';
import Gallery from "./Components/Gallery";
import CharacterDetail from "./Components/CharacterDetail"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
          <Routes>
              <Route path={'gallery'} element={<Gallery />} />
              <Route path={'gallery:characterId'} element={<CharacterDetail />} />
          </Routes>
      </BrowserRouter>
  );
}
export default App;
