import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const suma = () => {
    setCount(count + 1);
  };

  const resta = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h3>{count}</h3>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
      </div>
    </>
  );
};
