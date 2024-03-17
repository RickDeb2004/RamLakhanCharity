// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Media from "./components/Media";
import DoctorProfile from "./components/Doctor-Profile";
import Loader from "./components/loader";
import Pic from "./components/Pic";
import WhoAreWe from "./components/Who are we";
import BoardOfDirectors from "./components/Board of directors";
import InHighlights from "./components/InHighlights";
// import Faq from "./components/Faq";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    // <Router>
    //   <Routes>
    //     {" "}
    //     {/* Use <Routes> to wrap your routes */}
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/media" element={<Media />} />
    //     <Route path="/doctor-profile" element={<DoctorProfile />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/pic" element={<Pic />} />
    //     <Route path="/who-are-we" element={<WhoAreWe />} />
    //     <Route path="/board-of-directors" element={<BoardOfDirectors />} />
    //     <Route path="/in-highlights" element={<InHighlights />} />
    //     <Route path="/faq" element={<FAQ />} />
    //   </Routes>
    // </Router>
    <Router>
      <Routes>
        {loading ? (
          <Route path="/*" element={<Loader />} />
        ) : (
          <>
            <Route path="/*" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/media" element={<Media />} />
            <Route path="/doctor-profile" element={<DoctorProfile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pic" element={<Pic />} />
            <Route path="/who-are-we" element={<WhoAreWe />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/in-highlights" element={<InHighlights />} />
            {/* <Route path="/faq" element={<Faq />} /> */}
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
