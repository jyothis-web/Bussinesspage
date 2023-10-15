import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [showcount, setShowCount] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>counter app</h1>

      <button onClick={() => setShowCount(!showcount)}>{showcount ? 'hide showcount':'show count'}</button>
      {showcount ? (
        <>
          <h2>counter show opened</h2>
          <h3>counter is:{count}</h3>
          <button onClick={()=> setCount (count+1)}>increment</button>
          <br></br>
          <button onClick={()=> setCount (count-1)}>decrement</button>
          
        </>
      ) : null}
    </div>
  );
};

export default Counter;
