import React from "react";
import './input.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";

function App() {
  return (
    <Router>
      <Routes>
        {/* <div> */}
          {/* Sort of Home component */}
          <Route path="/" element={<AllPosts />} />
          <Route path="/:slug" element={<OnePost />} />
        {/* </div> */}
      </Routes>
    </Router>
  );
}

export default App;
