import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookTest from "./pages/BookTest";
import Preparation from "./pages/Preparation";
import Resources from "./pages/Resources";
import Destinations from "./pages/Destinations";
import BookNow from "./pages/BookNow"; // exact casing
import Footer from "./components/Footer";



const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Features />
          
          </>
        } />
        <Route path="/book-test" element={<BookTest />} />
        <Route path="/preparation" element={<Preparation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/BookNow" element={<BookNow />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
