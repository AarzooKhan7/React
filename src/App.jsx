import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Time from './Pages/Time';
import Contact from './Pages/Contact';
import Converter from './Pages/Converter';
import Blogs from './Pages/Blogs';
import Notes from './Pages/Notes';
function App() {
  return (
    <>
      <Router>
        <Header title="React" />




        <Routes>
          <Route path="/" element={<Home />} exact ></Route>
          <Route path="/time" element={<Time />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/converter" element={<Converter />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/notes" element={<Notes />}></Route>




        </Routes>

      </Router>

    </>

  );
}

export default App;