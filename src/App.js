
import React from "react";
import { Futer } from "./components/Futer/Futer";
import { Navbar } from "./components/Navbar/Navbar"
import { Shop } from "./pages/Shop/Shop";
import Xojiakbar from "./Xojiakbar/xojiakbar";
import {Nurbek} from "./pages/Nurbek/Nurbek"

export function App() {

  return (
    <div className="App">
      <Navbar />
      <Nurbek/>
      <Xojiakbar/>
      <Shop/>
      <Futer />
    </div>
  )
};