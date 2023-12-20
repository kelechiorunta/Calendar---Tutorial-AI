import React, { useState } from "react";
import { riders } from "./riders";
import { useRef, useEffect } from "react";

//import propTypes

var digit_input = 0;
var mytotal = [];
var result = [];
// var mystyle = { color: "red", background: "green" };

export function Rider({ children }) {
  const [selectedindex, setselectedIndex] = useState(null);
  //const [squares, setsaves] = useState(Array(0).fill(null));
  let [digit, setdigit] = useState("");
  let [updateddigit, computation] = useState(0);
  let [ridername, setRidername] = useState("");
  let [sum, setsum] = useState([]);
  let [counter, setcounter] = useState(0);
  let [operand, setOperand] = useState([]);
  let [updated, setUpdated] = useState(false);

  const mysum = useRef(updated);

  useEffect(() => {
    console.log(mytotal, result);
    mysum.current = { updated };
    console.log(mysum.current);
    //alert("hello");
  }, [updated]); //THIS RENDERS ONLY WHEN UPDATED STATE VARIABLE IS RE-RENDERED FROM SETUPDATED FUNCTION IN  USESTATE
  //CHECK THE EQUALTO COMPUTE FUNCTION

  const ref_node = useRef(sum);

  function backspace() {
    updated === true && setsum("");
    digit.length <= 1 && (digit_input = 0);

    digit_input.length > 1
      ? (digit_input = digit_input
          .toString()
          .substring(0, digit_input.length - 1))
      : (digit_input = 0);

    setdigit(digit_input);
    computation(digit_input);
  }

  function cleardisplay() {
    //for (let i = 0; i < 4; i++) {
    setdigit("");
    computation(0);
    digit_input = 0;
    setsum("");
    setOperand("");

    //}
  }

  function setdecimal() {
    updated === true && setsum("");

    digit_input.toString().includes(".")
      ? (digit_input = digit_input)
      : setdigit((digit_input = digit_input + "."));

    computation(digit_input);

    digit === ""
      ? setdigit((digit_input = 0 + "."))
      : (digit_input = digit_input);

    setUpdated(false);
  }

  function saving(i) {
    updated === true && setsum("");

    if (digit === "0" && i === "0") {
      return;
    } else {
      setdigit(
        digit_input === 0 || digit === "0"
          ? (digit_input = Number(i))
          : (digit_input = digit + i)
      );
    }
    // digit === "" ? (digit_input = Number(i)) : (digit_input = digit + i);
    computation(digit_input);
    setUpdated(false);
  }

  function Compute(sign) {
    mytotal.push(updateddigit);
    result = mytotal.slice().join("+");

    setUpdated(false);
    //THIS IS TO FINALIZE ANY PREVIOUS OPERATION WITH THE OPERAND DISPLAYING IN THE INPUT(className is CURRENTOUTPUT) PRESENTLY

    switch (operand) {
      case "+": {
        console.log(operand);
        setsum(Number(sum) + Number(updateddigit));
        //computation(0);
        break;
      }
      case "-": {
        console.log(operand);
        setsum(Number(sum) - Number(updateddigit));
        //computation(0);
        break;
      }
      case "*": {
        console.log(operand);
        setsum(Number(sum) * Number(updateddigit));
        //computation(1);
        break;
      }
      case "/": {
        console.log(operand);
        setsum(Number(sum) / Number(updateddigit));
        //computation(1);
        break;
      }
      default:
        setsum(Number(sum) + Number(updateddigit));
        setdigit("");
        if (sign === "/") {
          computation(1);
        } //: computation(0);
        else if (sign === "*") {
          computation(1);
        } //: computation(0);
        else if (sign === "+") {
          computation(0);
        } //: computation(1);
        else if (sign === "/") {
          computation(0);
        } //: computation(1);
        //computation(0);
        else return;
    }

    setdigit("");
    //THIS IS TO SET THE NEXT OPERATOR OR OPERAND WITH THE CURRENT SELECTED OPERATOR OR OPERAND PASSED AS A 'SIGN' ARGUMENT
    setOperand(sign);
  }

  function handleClick(e) {
    selectedindex === 1 &&
      (ref_node.current.value =
        riders[selectedindex - 1].name +
        " is Rider" +
        selectedindex +
        " on the list");
  }

  function Square({ classname = "square", value, onSquareClick }) {
    return (
      <button className={classname} onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  const riderlist = riders.map((user) => {
    return (
      <li
        onClick={() => {
          setselectedIndex(user.id);
          setRidername(user.name);
        }}
        key={user.id}
        style={
          selectedindex === user.id
            ? {
                border: "1px solid",
                width: 100,
                background: "lightgray",
              }
            : {
                border: "1px solid",
                width: 100,
                background: "none",
                listStyleType: "none",
              }
        }
      >
        {" "}
        {user.name}{" "}
      </li>
    );
  });

  const Message = () => {
    return riderlist.length > 0 ? (
      <h2 style={{ textAlign: "left", marginLeft: 40 }}>List of Riders</h2>
    ) : (
      <h2 style={{ textAlign: "left", marginLeft: 40 }}>No Rider</h2>
    );
  };

  //var oldstyle = { color: "blue" };

  return (
    <>
      {/* <h1 style={{ textAlign: "left", marginLeft: 40 }}>{props.heading}</h1> */}
      {/* <Message />
      <div className="riders_list">
        <ul style={{ textAlign: "left" }}>
          {riderlist}+{ridername}
        </ul>
        {children}
      </div>

      <button onClick={handleClick}>Click Me</button> */}

      <div className="board-row">
        {/* {selectedindex && ( */}
        <div className="calculator_grid">
          <input
            style={{ fontSize: 30 - digit_input.length }}
            className="currentoutput"
            value={(sum ??= Number(setsum(digit_input))) + operand + digit}
            onChange={() => {}}
          />
          {/* {selectedindex === 1 &&  */}
          <input
            style={
              digit.length < 1
                ? { opacity: 0.6, fontSize: 15 }
                : { opacity: 1, fontSize: 15 }
            }
            className="currentinput"
            ref={ref_node}
            value={digit_input}
          />
          <Square
            classname="clearall"
            value={"CE"}
            onSquareClick={() => cleardisplay()}
          />
          <Square
            classname="backspace"
            value={"DEL"}
            onSquareClick={() => {
              backspace();
            }}
          />

          <Square value={1} onSquareClick={() => saving("1")} />
          <Square value={2} onSquareClick={() => saving("2")} />
          <Square value={3} onSquareClick={() => saving("3")} />
          <Square
            value={"+"}
            onSquareClick={() => {
              computation(0);
              setOperand("+");
              Compute("+");
              //computation(0);
            }}
          />
          <Square value={4} onSquareClick={() => saving("4")} />
          <Square value={5} onSquareClick={() => saving("5")} />
          <Square value={6} onSquareClick={() => saving("6")} />

          <Square
            value={"-"}
            onSquareClick={() => {
              computation(0);
              setOperand("-");
              Compute("-");
              //computation(0);
            }}
          />
          <Square value={7} onSquareClick={() => saving("7")} />
          <Square value={8} onSquareClick={() => saving("8")} />
          <Square value={9} onSquareClick={() => saving("9")} />

          <Square
            value={"*"}
            onSquareClick={() => {
              computation(1);
              setOperand("*");
              Compute("*");
              //computation(1);
            }}
          />
          <Square value={0} onSquareClick={() => saving("0")} />
          <Square
            value={"."}
            onSquareClick={() => {
              setdecimal();
            }}
          />
          <Square
            value={"="}
            onSquareClick={() => {
              computation(0);
              Compute(operand);
              setOperand("");
              setdigit("");
              setUpdated(true);
            }}
          />

          <Square
            value={"/"}
            onSquareClick={() => {
              computation(1);
              setOperand("/");
              Compute("/");
              //computation(1);
            }}
          />
        </div>
      </div>
    </>
  );
}

Rider.defaultProps = { heading: "Hello", status: "1" };
