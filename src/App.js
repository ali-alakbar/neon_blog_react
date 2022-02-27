import React, { Component } from "react";
import Home from "./component/myPages/Home";
import Nav from "./component/nav/Nav";
import Contact from "./component/myPages/Contact";
import About from "./component/myPages/About";
import SignUp from "./component/myPages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/neon_blog_react" element={<Home />} />
          <Route path="/Home.js" element={<Home />} />
          <Route path="/Contact.js" element={<Contact />} />
          <Route path="/About.js" element={<About />} />
          <Route path="/SignUp.js" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;