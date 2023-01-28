import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// import { BrowserRouter, Routes, Redirect, Route } from "react-router-dom";
import { Route, redirect, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />

      <Footer />
    </div>
  );
};

export default App;
