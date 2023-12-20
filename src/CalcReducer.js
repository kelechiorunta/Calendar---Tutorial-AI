import React from "react";
import { useReducer, useRef, useState, useEffect } from "react";

const initialState = "";
let val = "";
let digit = "";
let current_input = "";
let operator = "";

const reducer = (state, action) => {
  switch (action) {
    case "appendnumber": {
      return state === 0 ? Number(digit) : Number(state + digit);
    }
    case "clear": {
      return (state = "");
    }
    case "reset": {
      return 0;
    }
    case "multiply": {
      return 1;
    }
    default: {
      return state;
    }
  }
};

// function appendno(digit) {
//   return (state = state + digit);
// }

function MyButton({ val, handleClick }) {
  return <button onClick={handleClick}>{val}</button>;
}

function CalcReducer() {
  const [sum, computeState] = useState(0);
  const [operand, Setoperand] = useState("");
  const [iscomputed, Iscomputed] = useState(false);
  const [mystate, dispatch] = useReducer(reducer, initialState);

  let myref = useRef(null);

  function Operation(operator) {
    if (operand === "+") {
      computeState(sum + mystate);
      //current_input = mystate;
      //dispatch("reset");
    } else if (operand === "-") {
      computeState(sum - mystate);
      //current_input = mystate;
    } else if (operand === "*") {
      computeState(sum * mystate);
    } else if (operand === "/") {
      computeState(sum / mystate);
    } else if (operand === "") {
      computeState(sum + mystate);
    } else {
      return;
    }

    Setoperand(operator);
  }

  useEffect(() => {
    //dispatch("reset");
    //dispatch(current_input);
    myref.current.style.border = "3px solid green";
    //return (myref.current.style.border = "3px solid red");

    //current_input = 0;
    console.log(current_input);
  }, [sum]);

  return (
    <div>
      <input type="text" value={sum + operand} />
      <input ref={myref} type="text" value={current_input} />
      <div>{current_input}</div>

      <MyButton
        val="1"
        handleClick={() => {
          iscomputed === true && dispatch("clear");
          iscomputed === true && (current_input = "");
          Iscomputed(false);
          digit = "1";
          dispatch("appendnumber");
          current_input += digit; //+ mystate;
        }}
      ></MyButton>
      <MyButton
        val="2"
        handleClick={() => {
          iscomputed === true && dispatch("clear");
          iscomputed === true && (current_input = "");
          Iscomputed(false);
          digit = "2";
          dispatch("appendnumber");
          current_input += digit; //+ mystate;
        }}
      ></MyButton>
      <MyButton
        val="3"
        handleClick={() => {
          iscomputed === true && dispatch("clear");
          iscomputed === true && (current_input = "");
          Iscomputed(false);
          digit = "3";
          dispatch("appendnumber");
          current_input += digit; //+ mystate;
        }}
      ></MyButton>
      <MyButton
        val="+"
        handleClick={() => {
          dispatch("reset");
          Operation("+");
          Iscomputed(true);
        }}
      ></MyButton>
      <MyButton
        val="-"
        handleClick={() => {
          dispatch("reset");
          Operation("-");
          Iscomputed(true);
        }}
      ></MyButton>
      <MyButton
        val="*"
        handleClick={() => {
          dispatch("multiply");
          Operation("*");
          Iscomputed(true);
        }}
      ></MyButton>
      <MyButton
        val="/"
        handleClick={() => {
          dispatch("multiply");
          Operation("/");
          Iscomputed(true);
        }}
      ></MyButton>
    </div>
  );
}

export default React.memo(CalcReducer);
