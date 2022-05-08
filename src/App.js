import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Pizza from "./containers/Pizza";
import { Users } from "./containers/Users";

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Users</Link>
        <Link to="/pizza">Pizza</Link>
      </div>
      <div>
        <Routes>
          <Route path="/" exact element={<Users />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
