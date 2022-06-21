import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Time from './Pages/Time';
import Contact from './Pages/Contact';
import Converter from './Pages/Converter';
import Form from './Pages/Form';
import Notes from './Pages/Notes';
import Classes from './Pages/Classes';
function App() {
  return (
    <>
      <Router>
        <Header title="React Js"/>




        <Routes>
          <Route path="/" element={<Home />} exact ></Route>
          <Route path="/time" element={<Time />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/converter" element={<Converter />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/notes" element={<Notes />}></Route>

          <Route path="/classes" element={<Classes />}></Route>




        </Routes>

      </Router>

    </>

  );
}

export default App;