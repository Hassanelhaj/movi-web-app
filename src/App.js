import React from "react";
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import MovieCard from "./componnets/movies/MovieCard";
import MoviesList from "./componnets/movies/MoviesList";
import NavBar from "./componnets/Navbar/NavBar";
import List from "./componnets/Watched/List.js";
// import WatchList from "./componnets/Watched/List.js";
// import WatchList from "./componnets/Watched/WatchList,js";
import { Data } from "./Data";

function App() {
  Data();
  return (
    <div className="app">
    <BrowserRouter>
   
   <NavBar/>
    <Routes>
     
      <Route index path="/" element={<div className="movies-list"><MoviesList/></div>}/>
      <Route path="/list" element={<div className="movies-list"><List/></div>}/>
    </Routes>

 
    
    </BrowserRouter>
    </div>
  );
}

export default App;
