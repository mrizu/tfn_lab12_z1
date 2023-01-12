import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Whoops404,
  ContactUS, ContactPL, ContactDE, Services
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}>
          <Route
            path="us"
            element={<ContactUS />}
          />
          <Route
            path="pl"
            element={<ContactPL />}
          />
          <Route
            path="de"
            element={<ContactDE />}
          />
        </Route>
        <Route path="services" element={<Services />}/>
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
