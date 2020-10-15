import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Content from "../Content";
import "../../styles/styles.scss";

export default function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}
