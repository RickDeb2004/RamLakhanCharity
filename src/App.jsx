// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Import your Home component
import About from "./components/About"; // Import your About component
import Contact from './components/Contact'; // Import your Contact component
import Media from "./components/Media";
import DoctorProfile from "./components/Doctor-Profile";

import Pic from "./components/Pic";
import WhoAreWe from "./components/Who are we";
import BoardOfDirectors from "./components/Board of directors";
import InHighlights from "./components/InHighlights";
import FAQ from "./components/Faq";
const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Use <Routes> to wrap your routes */}
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
       <Route path="/doctor-profile" element={<DoctorProfile />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/pic" element={<Pic />} />
        <Route path="/who-are-we" element={<WhoAreWe />} />
        <Route path="/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/in-highlights" element={<InHighlights />} />
        <Route path="/faq" element={<FAQ />} />


      </Routes>
    </Router>
  );
};

export default App;
