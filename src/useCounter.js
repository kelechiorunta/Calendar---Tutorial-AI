import useState from "react";

import React from "react";

function useCounter(initialCount = 0) {
  const [counts, setmycounter] = useState(initialCount);

  const increment = () => {
    setmycounter(counts + 1);
  };

  const decrement = () => {
    setmycounter(counts - 1);
  };

  return [counts, increment, decrement];
}

export default useCounter;
