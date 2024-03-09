import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Product from "./components/Product";
import Service from "./components/Service";
import Home from "./components/Home";

import Header from "./components/Header";

import Prices from "./components/about/Prices";
import Image from "./components/about/Image";
import Location from "./components/about/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />}>
            <Route path="Image" element={<Image />}></Route>
            <Route path="Location" element={<Location />}></Route>
            <Route path="Prices" element={<Prices />}></Route>
          </Route>

          {/* <Route path='/About' element={<About/>}/> 
          <Route path='Image' element={<Image/>}></Route>
          <Route path='Location' element={<Location/>}></Route>
          <Route path='Prices' element={<Prices/>}></Route>   */}

          <Route path="/Product" element={<Product />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
