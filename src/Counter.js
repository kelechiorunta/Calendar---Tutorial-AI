import { useState } from "react";
import React from "react";
import useCounter from "./useCounter";

function Counter() {
  useCounter((counts, increment, decrement) => {
    return (
      <div>
        <button onClick={increment}>Increment Count - {counts}</button>
        <button onClick={decrement}>Decrement Count - {counts}</button>
      </div>
    );
  });
}

export default Counter;
