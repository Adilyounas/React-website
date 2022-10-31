import "./App.css"


import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import About from "./About";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/service" element={<Service />} />
          <Route exact="true" path="/contact" element={<Contact />} />
          <Route exact="true" path="/about" element={<About />} />
          <Route exact="true" path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
