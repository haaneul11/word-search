import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WordSearchPage from "./pages/WordSearchPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/word-search">Word Search</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/word-search" element={<WordSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
