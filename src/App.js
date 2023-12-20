// import logo from './logo.svg';
import "./App.css";
import React, { useState, useContext } from "react";
import { Rider } from "./Rider";
import { Hello } from "./Hello";
import Datafetching from "./Datafetching";
import CalcReducer from "./CalcReducer";
import Calendar from "./Calendar";
import { monthdays } from "./Monthdays";
import CalendarComponent from "./CalendarComponent";
import FRParent from "./FRParent";
import Myapi from "./myapi";
import Counter from "./Counter";
//import { produce } from "immer";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const currentyearContext = React.createContext();
//var currentyear = new Date().getFullYear();

function App() {
  const [mypresentyear, setPresentyear] = useState(new Date().getFullYear());
  return (
    <div className="App">
      {/* <Myapi /> */}
      {/* <Counter /> */}
      <FRParent />
      <div className="Calendars_grid">
        <currentyearContext.Provider value={mypresentyear}>
          <CalendarComponent
            className="Calcomponent"
            monthnumber={1}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={2}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={3}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={4}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={5}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={6}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={7}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={8}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={9}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={10}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={11}
            presentyear={mypresentyear}
          />
          <CalendarComponent
            className="Calcomponent"
            monthnumber={12}
            presentyear={mypresentyear}
          />
        </currentyearContext.Provider>
      </div>
      {/* <CalcReducer></CalcReducer>
      <UserContext.Provider value={"Dataman"}>
        <ChannelContext.Provider value={"Tutorial"}>
          <currentyearContext.Provider value={new Date().getFullYear()}>
            <Datafetching />
            {/* <Calendar /> */}
      {/* </currentyearContext.Provider>
        </ChannelContext.Provider>
      </UserContext.Provider> */}{" "}
      {/* */}
      {/* <h1>My First React Development App</h1>
      <p>
        Welcome to my first new development page for my React projects. Hope you
        find it interesting.
      </p>
      <p>
        There is no place like home and that is the reason why I'm writing this
        piece from my heart cuz that is where the heart lives in the home!
      </p> */}
      {/* <Hello /> */}
      {/* <Calendar /> */}
      <Rider heading="Hello Rider" status="Null">
        {/* <h2>Suit Up lads, get ready to roll!</h2> */}
      </Rider>
    </div>
  );
}

export default React.memo(App);
