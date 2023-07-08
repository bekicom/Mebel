
import React from "react";
import { Shop } from "./pages/Shop/Shop";
import Xojiakbar from ".././src/pages/Xojiakbar/xojiakbar";
import { Navbar } from "./components/Navbar/Navbar";
import { Futer } from "./components/Futer/Futer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Xojiakbar />
      <Shop />
      <Futer />
    </div>
  );

}

export default App;
