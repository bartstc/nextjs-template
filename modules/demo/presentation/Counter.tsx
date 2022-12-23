import { useState } from "react";

interface IProps {
  startFrom?: number;
}

const Counter = ({ startFrom = 0 }: IProps) => {
  const [count, setCount] = useState(startFrom);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export { Counter };
