import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Docs from "./components/Docs";
import { useEffect, useState } from "react";
import productApi from "./api/productApi";
import DocsIn from "./components/DocsIn";
import AddDocs from "./components/AddDocs";

function App() {


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route element={<AddDocs />} path="/adddocs" exact />
        <Route element={<DocsIn />} path="/docsin" exact />
        <Route element={<Docs />} path="/docs" exact />
        <Route element={<Login />} path="/login" exact />
        <Route element={<Content />} path="/" exact />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
