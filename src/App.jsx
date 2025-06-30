import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import GameWorld from "./Components/GameWorld/GameWorld";
import Touch_3D_Robot from "./Components/Touch_3D_Model/Touch_3D_Robot";
import Touch_3D_Sand from "./Components/Touch_3D_Model/Touch_3D_Sand";
import List_of_Work from "./Components/List_of_Work/List_of_Work";

const PortfolioHome = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </>
);

const App = () => (
  <Router basename="/sahilkhan-portfolio">
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/gameworld" element={<GameWorld />} />
      <Route path="/sand" element={<Touch_3D_Sand />} />
      <Route path="/never-leave" element={<Touch_3D_Robot />} />
      <Route path="/listofwork" element={<List_of_Work />} />
    </Routes>
  </Router>
);

export default App;
