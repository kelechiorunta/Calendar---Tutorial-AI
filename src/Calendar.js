import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { monthdays } from "./Monthdays";
import { UserContext, ChannelContext, currentyearContext } from "./App";
// import Reactredux from "./Reactredux";

const newcount = [];

var val = 0;
var myid = 0;
var totaldays = 0;
const currentdate = new Date();
var mycurrentyear = currentdate.getFullYear();
var currentmonth = currentdate.getMonth() + 1;
var firstdate = new Date(`${currentmonth}/1/${mycurrentyear}`);
var next_date = new Date(`${currentmonth + 1}/1/${mycurrentyear}`);
var wkday = "";
var nxtwkday = "";

//const export yearcontext = React.createContext()

const Calendar = () => {
  const cont_user = useContext(UserContext);
  const cont_channel = useContext(ChannelContext);
  //var currentyear = useContext(currentyearContext);
  const [x, setx] = useState(0);
  const [weekday, setweekday] = useState(firstdate.getDay());
  const [next_weekday, setnextweekday] = useState(next_date.getDay());
  const [currentdays, setcurrentdays] = useState(
    monthdays[currentmonth - 1].numberofdays
  );
  const [nextdays, setnextdays] = useState(
    monthdays[currentmonth].numberofdays
  );
  wkday = weekday;
  nxtwkday = next_weekday;

  // const [count, setcount] = useState(Array.from(Array().keys()));
  const cellref = useRef(null);
  //mycurrentyear = useContext(currentyearContext);

  // TO PRACTICE THE USE OF USECALLBACK HOOK

  //
  // useEffect(() => {
  //   const moveaxes = (e) => {
  //     setx(e.clientX);
  //     console.log(x, 200);
  //     e.preventDefault(true);
  //     e.stopPropagation();
  //   };
  //   document.addEventListener("mousemove", moveaxes);
  // }, []);

  //const move = useMemo(() => {

  //}, [currentdays]);

  //move;

  //TO PRACTICE THE USE OF USEEFFECT HOOK
  // useEffect(() => {
  //   document.addEventListener("mousemove", moveaxes);
  //   return () => {
  //     document.removeEventListener("mousemove", moveaxes);
  //   };
  // }, []);

  var newCalendar = []; //[...count, { id: count.id + 1, value: count.value + 1 }];
  var nextCalendar = [];

  for (var i = 1; i <= currentdays + weekday - 1; i++) {
    newCalendar.push(i);
  }

  for (let i = 1; i <= nextdays + next_weekday - 1; i++) {
    nextCalendar.push(i);
  }

  //newCalendar.unshift(nextCalendar);

  newCalendar
    .push
    //   //1, 2, 3, 4);
    //   //...["", "", "", "", "", "", "", 1, 2, 3, 4, 5, 6, 7] //TO ADD ARRAY AT THE END
    //   // ...nextCalendar

    // ...nextCalendar
    ();

  //newCalendar.unshift(...["", "", "", "", "", "", "", 43, 44, 45]); //TO ADD ARRAY AT THE BEGINNING
  //...Array.from(Array(14).keys("")));

  console.log(nextCalendar);
  console.log(next_weekday, nextdays, next_date);
  const nextdate = useCallback(() => {
    //newCalendar = [];

    myid = 0;
    val = "";
    if (currentmonth >= 12) {
      mycurrentyear += 1;
      currentmonth = 1;
    } else currentmonth++;

    if (mycurrentyear % 4 === 0 && currentmonth === 2) {
      totaldays = 29;
    } else if (mycurrentyear % 4 !== 0 && currentmonth === 2) {
      totaldays = 28;
    } else {
      const monthnumber = monthdays.filter((item) => item.id === currentmonth);

      const daynumber = monthnumber.map(
        (item) => (totaldays = item.numberofdays)
      );
    }
    firstdate = new Date(`${currentmonth}/1/${mycurrentyear}`);
    setcurrentdays(totaldays);
    setweekday(firstdate.getDay() === 0 ? 7 : firstdate.getDay());

    setnextdays(monthdays[currentmonth + 1].numberofdays);
    next_date = new Date(`${currentmonth + 1}/1/${mycurrentyear}`);
    setnextweekday(next_date.getDay() === 0 ? 7 : next_date.getDay());
  }, [currentdays]);

  const previousdate = useCallback(() => {
    //newCalendar = [];

    myid = 0;
    val = "";
    if (currentmonth <= 1) {
      // mycurrentyear = useContext(currentyearContext);
      mycurrentyear -= 1;
      currentmonth = 12;
    } else currentmonth--;
    if (mycurrentyear % 4 === 0 && currentmonth === 2) {
      totaldays = 29;
    } else if (mycurrentyear % 4 !== 0 && currentmonth === 2) {
      totaldays = 28;
    } else {
      const monthnumber = monthdays.filter((item) => item.id === currentmonth);

      const daynumber = monthnumber.map(
        (item) => (totaldays = item.numberofdays)
      );
    }
    setcurrentdays(totaldays);
    firstdate = new Date(`${currentmonth}/1/${mycurrentyear}`);
    setweekday(firstdate.getDay() === 0 ? 7 : firstdate.getDay());

    setnextdays(
      monthdays[currentmonth <= 1 ? (currentmonth = 12) : currentmonth + 1]
        .numberofdays
    );
    next_date = new Date(`${currentmonth + 1}/1/${mycurrentyear}`);
    setnextweekday(next_date.getDay() === 0 ? 7 : next_date.getDay());
  }, [currentdays]);

  return (
    <div>
      <h1
        style={{
          width: 300,
          border: "1px solid",
          margin: "0 41.5%",
          borderRadius: 30,
        }}
      >
        {firstdate.toDateString()}
      </h1>
      <h2
        style={{
          textAlign: "center",
          width: 120,

          margin: "0 48.5%",
        }}
      >
        {monthdays[currentmonth - 1].monthname}
      </h2>
      <div className="nav_container">
        <button className="calendar_nav" onClick={previousdate}>
          {"<<"}
        </button>
        <button className="calendar_nav" onClick={nextdate}>
          {">>"}
        </button>
      </div>
      {/* <button onClick={addItem}>Add Item</button> */}
      <ul className="calendar_list">
        <li className="weekday_label">MON</li>
        <li className="weekday_label">TUE</li>
        <li className="weekday_label">WED</li>
        <li className="weekday_label">THUR</li>
        <li className="weekday_label">FRI</li>
        <li className="weekday_label">SAT</li>
        <li className="weekday_label">SUN</li>
      </ul>
      <div className="cal_container">
        <div className="listcont" ref={cellref}>
          {newCalendar.map((item) => (
            <li
              style={
                item === new Date().getDate() + weekday - 1
                  ? {
                      fontSize: -5 + currentdays,
                      fontWeight: "600",
                      background: "rgba(0,0,0,0.3)",
                      borderLeft: "5px solid rgba(255,0,0,0.3)",
                      borderRight: "5px solid rgba(255,0,0,0.3)",
                      borderBottom: "7px solid rgba(255,0,0,0.3)",
                      borderTop: "7px solid rgba(255,0,0,0.3)",
                    }
                  : {
                      // fontSize: -5 + currentdays,
                      // fontWeight: "600",
                    }
              }
              className={item > weekday - 1 ? "cell" : "oddcell"}
              key={item.index}
            >
              {item >= weekday
                ? item - weekday + 1 > 31
                  ? (wkday--,
                    monthdays[currentmonth - 2].numberofdays - wkday + 1)
                  : item - weekday + 1
                : (wkday--,
                  monthdays[currentmonth - 2].numberofdays - wkday + 1)}
            </li>
          ))}
        </div>
        <div className="next_container">
          {nextCalendar.map((item) => (
            <li
              style={
                item === new Date().getDate() + next_weekday - 1
                  ? {
                      fontSize: -5 + currentdays,
                      fontWeight: "600",
                      background: "rgba(0,0,0,0.3)",
                      borderLeft: "5px solid rgba(255,0,0,0.3)",
                      borderRight: "5px solid rgba(255,0,0,0.3)",
                      borderBottom: "7px solid rgba(255,0,0,0.3)",
                      borderTop: "7px solid rgba(255,0,0,0.3)",
                    }
                  : {
                      // fontSize: -5 + currentdays,
                      // fontWeight: "600",
                    }
              }
              className={item > next_weekday - 1 ? "cell" : "oddcell"}
              key={item.index}
            >
              {item >= next_weekday
                ? item - next_weekday + 1 > 31
                  ? (nxtwkday--,
                    monthdays[currentmonth - 1].numberofdays - nxtwkday + 1)
                  : item - next_weekday + 1
                : (nxtwkday--,
                  monthdays[currentmonth - 1].numberofdays - nxtwkday + 1)}
            </li>
          ))}
        </div>
      </div>

      <div>
        User, Channel:{cont_user}, {cont_channel}
      </div>
      {/* {newcount.map((item) => (5          <li key={count}>{item}</li>
        ))} */}
      {/* </ul> */}
    </div>
  );
};

export default React.memo(Calendar);
