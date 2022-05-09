import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ClickCounter } from './containers/ClickCounter';
import Pizza from './containers/Pizza';

const App = () => {
  const bl = "ss"
  return (
    <div>
      <div>
        <Link to="/">Users</Link>
        <Link to="/pizza">Pizza</Link>
      </div>
      {process.env.name}
      <div>
        <Routes>
          <Route path="/" element={<ClickCounter />} />
          <Route path="/pizza" element={<Pizza />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
