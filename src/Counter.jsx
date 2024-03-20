import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(1);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}
