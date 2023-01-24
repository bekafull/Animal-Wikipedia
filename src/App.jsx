import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Animal from './Components/Animal';
import Cards from './Pages/Cards';
import Home from './Pages/Home';
;

alert("Created & Designed By Beknur Maxalbayev")

function App() {
  return (
    <>
      {/* ROUTING */}
      <Routes>
        <Route index to="/" element={<Home />} />
        <Route path='/animals' element={<Cards />} />
        <Route path='/animals2' element={<Cards />} />
        <Route path='/animals/:id' element={<Animal/>} />
        <Route path='/animals2/:id' element={<Animal/>} />
      </Routes>
    </>
  );
}

export default App;
