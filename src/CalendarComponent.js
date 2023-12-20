import { useEffect, useRef, useState } from "react";
import React from "react";
import { monthdays } from "./Monthdays";

var mycells = [];
var myid = 1;
var newid = 1;

console.log(mycells);

const CalendarComponent = ({ monthnumber, presentyear }) => {
  const [currentpresentyear, setCurrentyear] = useState(presentyear);
  var numberdays = "";
  var numberdays_prevmonth = "";
  if (monthnumber <= 1) {
    numberdays_prevmonth = monthdays[11].numberofdays;
  } else {
    numberdays_prevmonth = monthdays[monthnumber - 2].numberofdays;
  }
  if (monthnumber === 2 && currentpresentyear % 4 === 0) {
    numberdays = 29;
  } else if (monthnumber === 2 && currentpresentyear % 4 !== 0) {
    numberdays = 28;
  } else {
    numberdays = monthdays[monthnumber - 1].numberofdays;
  }

  if (monthnumber === 3 && currentpresentyear % 4 === 0) {
    numberdays_prevmonth = 29;
  } else if (monthnumber === 3 && currentpresentyear % 4 !== 0) {
    numberdays_prevmonth = 28;
  }
  const contRef = useRef(null);
  const [cal, setCal] = useState([]);
  const [caldisplay, setCaldisplay] = useState(false);
  var cellstyle = { background: "rgba(0, 0, 0, 0.1)" };
  var oddstyle = { background: "rgba(0,0,0,0.7)", opacity: "0.7" };
  var selectedstyle = { background: "rgba(0,255,155,0.7)" };

  var firstdateofmonth = new Date(`${monthnumber}/1/${currentpresentyear}`);
  var firstdayofmonth = firstdateofmonth.getDay();
  var decrease = firstdayofmonth;

  console.log(firstdateofmonth);

  const caltoggle = () => {
    setCaldisplay(!caldisplay);
  };

  //useEffect(() => {
  const createCal = () => {
    firstdayofmonth === 0
      ? (firstdayofmonth = 7)
      : (firstdayofmonth = firstdayofmonth + 0);

    firstdayofmonth === 7
      ? (decrease = firstdayofmonth)
      : (decrease = decrease + 0);

    for (var i = 1; i <= 42; i++) {
      mycells.push(
        <li
          id={i}
          className={
            i === new Date().getDate() + firstdayofmonth - 1 && "mycell"
          }
          style={
            i >= firstdayofmonth && i < numberdays + firstdayofmonth
              ? cellstyle
              : oddstyle
          }
        >
          {i < firstdayofmonth &&
            i >= 0 &&
            (decrease--, numberdays_prevmonth - decrease + 1)}
          {i >= firstdayofmonth && i < numberdays + firstdayofmonth && myid++}
          {i >= numberdays + firstdayofmonth && newid++}
        </li>
      );
    }

    setCal(mycells);
    console.log(mycells);
    mycells = [];
    myid = 1;
    newid = 1;
    numberdays = 0;
  };

  useEffect(() => {
    createCal();
  }, [currentpresentyear]);

  return (
    <>
      <div className="container_cell">
        <fieldset className="cont_btn">
          <h4 className="datetitle">{firstdateofmonth.toDateString()}</h4>

          <button
            className="calendar_btn"
            onClick={() => (createCal(), caltoggle())}
          >
            {caldisplay ? "Hide" : "Show"}
          </button>

          <input
            className="currentyearInput"
            type="number"
            min={1900}
            max={3000}
            value={currentpresentyear}
            onChange={(e) => (
              setCurrentyear(e.target.value),
              createCal(),
              console.log(currentpresentyear)
            )}
          />
        </fieldset>
        <li className="weekdayname">Mon</li>
        <li className="weekdayname">Tue</li>
        <li className="weekdayname">Wed</li>
        <li className="weekdayname">Thur</li>
        <li className="weekdayname">Fri</li>
        <li className="weekdayname">Sat</li>
        <li className="weekdayname">Sun</li>
        {caldisplay && cal}
      </div>
    </>
  );
};

export default React.memo(CalendarComponent);
