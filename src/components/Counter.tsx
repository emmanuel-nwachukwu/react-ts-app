import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  return <button onClick={increment}>Count: {count}</button>;
};

export default Counter;
