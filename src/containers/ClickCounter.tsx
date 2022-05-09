import React, { useState } from 'react';

export const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Click counter</h1>
      <p>{count}</p>
      <button style={{ width: 200, height: 50 }} onClick={() => setCount(count => ++count)}>
        Increase
      </button>
    </div>
  );
};
