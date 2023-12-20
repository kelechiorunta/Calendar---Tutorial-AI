import { React, useContext } from "react";
import { currentyearContext } from "./App";
import Calendar from "./Calendar";
import CalendarComponent from "./CalendarComponent";

var currentyear = new Date().getFullYear();

export const monthdays = [
  {
    id: 1,
    numberofdays: 31,
    monthname: "January",
  },
  {
    id: 2,
    numberofdays: currentyear % 4 === 0 ? 29 : 28,
    monthname: "February",
  },
  {
    id: 3,
    numberofdays: 31,
    monthname: "March",
  },
  {
    id: 4,
    numberofdays: 30,
    monthname: "April",
  },
  {
    id: 5,
    numberofdays: 31,
    monthname: "May",
  },
  {
    id: 6,
    numberofdays: 30,
    monthname: "June",
  },
  {
    id: 7,
    numberofdays: 31,
    monthname: "July",
  },
  {
    id: 8,
    numberofdays: 31,
    monthname: "August",
  },
  {
    id: 9,
    numberofdays: 30,
    monthname: "September",
  },
  {
    id: 10,
    numberofdays: 31,
    monthname: "October",
  },
  {
    id: 11,
    numberofdays: 30,
    monthname: "November",
  },
  {
    id: 12,
    numberofdays: 31,
    monthname: "December",
  },
];
// function Monthdays() {
//   var currentyear = new Date().getFullYear;
//   var month_number = new Date().getMonth() + 1;
//   var numberofdays = 0;
//   switch (month_number) {
//     case 1: {
//       numberofdays = 31;
//       break;
//     }
//     case 2: {
//       currentyear % 4 === 0 ? (numberofdays = 29) : (numberofdays = 28);
//       break;
//     }
//     case 3: {
//       numberofdays = 31;
//       break;
//     }
//     case 4: {
//       numberofdays = 30;
//       break;
//     }
//     case 5: {
//       numberofdays = 31;
//       break;
//     }
//     case 6: {
//       numberofdays = 30;
//       break;
//     }
//     case 7: {
//       numberofdays = 31;
//       break;
//     }
//     default:
//       {
//         numberofdays = 1;
//       }
//       return numberofdays;
//   }
// }

// export default Monthdays;
