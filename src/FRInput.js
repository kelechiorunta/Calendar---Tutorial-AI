import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { data } from "./data.js";
import { dataSearch } from "./dataSearch.js";

var letters = [
  "R",
  "e",
  "a",
  "c",
  "t",
  " ",
  "i",
  "s",
  " ",
  "a",
  " ",
  "f",
  "r",
  "o",
  "n",
  "t",
  "en",
  "d",
  " ",
  "ja",
  "va",
  "s",
  "c",
  "r",
  "i",
  "p",
  "t",
  " ",
  "li",
  "b",
  "ra",
  "ry",
  " ",
  "s",
  "p",
  "e",
  "c",
  "i",
  "al",
  "ly",
  " ",
  "de",
  "si",
  "gn",
  "ed",
  " ",
  "to",
  " ",
  "bu",
  "il",
  "d",
  " ",
  "re",
  "u",
  "s",
  "a",
  "b",
  "l",
  "e",
  " ",
  "u",
  "s",
  "e",
  "r",
  "-",
  "i",
  "n",
  "t",
  "e",
  "r",
  "fa",
  "ce",
  " ",
  "c",
  "o",
  "m",
  "p",
  "o",
  "n",
  "en",
  "t",
  "s",
  " ",
];
var ll;
var upcase;
ll = document.createElement("div");
var counter = -1;
var letterstring = "";
var mynewletter = "";
//var mycurrentid = 0;
var timerid = 0;
var timing;
var mynos = "";
var newsearchdata = [];
var dataSearcher = [];
var selectedid = -1;
var newdata = [];
var newparts = [];
var divarr;
var searcharr = [];
var sstr = "";
var newRef;
var boldRegExp;
var boldString;
var mystring = "";
var searchindex = -1;

const FRInput = forwardRef((props, ref) => {
  const myref = useRef(ref);
  const rangeRef = useRef(null);
  const divRef = useRef(ref);
  const searchRef = useRef(null);
  const contentRef = useRef(ref);
  const inputRefsearch = useRef(ref);
  const [searchindex, setsearchindex] = useState(0);
  const [toggle, settoggle] = useState(false);
  const [letterarray, setletterarray] = useState([]);
  const [writeup, setwriteup] = useState("");
  const [characters, setCharacters] = useState("");
  const [mycurrentid, setmycurrentid] = useState(0);
  const [mytimer, settimer] = useState(75);
  const [searchdata, setsearchdata] = useState("");
  const [selectedid, setselectedid] = useState(-1);
  const [contentVisibility, setcontentVisibility] = useState(false);
  const [newtext, setnewtext] = useState("");

  useImperativeHandle(ref, () => ({
    changecolor() {
      setInterval(
        (console.log(myref),
        (myref.current.style.background = "none"),
        (myref.current.style.marginLeft += "40px"),
        (myref.current.style.transition = "all 5s ease"),
        settoggle(!toggle)),
        1000
      );
    },
    // playcomment() {
    //   letterstring = "";
    //   counter = -1;
    //   setCharacters("");
    //   setmycurrentid(mycurrentid);
    // },
  }));

  //   useEffect(
  //     () => {
  //       const delayedeffect = () => {
  //         counter < letters.length && (counter = counter + 1);
  //         //: (counter = counter + 0),
  //         mynewletter = letters.map((items, index) => {
  //           index === counter - 1 && (
  //             <span key={items}>{(letterstring += items)} </span>
  //           );
  //           //{setletterarray(items)}
  //           setwriteup(letterstring);
  //         });
  //       };

  //       const timerId = setTimeout(delayedeffect(), 100000);

  //       return () => {
  //         clearTimeout(timerId);
  //         //setletterarray([]);
  //         //ref = null;
  //       };
  //     },
  //     [counter],
  //     [letterarray],
  //     [toggle],
  //     [writeup]
  //   ); //CHECK THIS SIDE EFFECT

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Extract the 'character' property from each object in the array
        newdata = data.filter((value, index) => value.id === mycurrentid);
        //const newdata = [...data];

        console.log(newdata);
        newdata.map((item, index) => {
          index < newdata.length &&
          letterstring !== newdata[index].content.toString()
            ? counter++
            : (counter = -1);
          letterstring !== newdata[index].content.toString()
            ? setmycurrentid(mycurrentid)
            : mycurrentid < data.length - 1
            ? setmycurrentid(mycurrentid + 1)
            : setmycurrentid(0);
          letterstring !== newdata[index].content.toString()
            ? (letterstring += item.content.charAt(counter))
            : (letterstring = "");
          letterstring !== newdata[index].content.toString()
            ? (myref.current.scrollTop += 50)
            : (myref.current.scrollTop = 0);
          //   rangeRef.current.value = mycurrentid;
          //   letterstring !== newdata[index].content.toString()
          //     ? (myref.current.style.background =
          //         "rgba(155," +
          //         (mycurrentid + Math.floor(155)).toString() +
          //         ",0, 0.6)")
          //     : (myref.current.style.background =
          //         "rgba(0," +
          //         (mycurrentid + Math.floor(Math.random() * 255)).toString() +
          //         ",0, 0.6)"); //.add.classList("fadeinclass");
        });

        // Set the characters state
        setCharacters(letterstring);
        //myref.current.scrollIntoView({ inline: "nearest" });
        console.log(letterstring);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    timing = fetchData;

    timerid = setTimeout(fetchData, mytimer);

    rangeRef.current.value = mycurrentid;

    mynos = `<li className="spinid">${mycurrentid}</li>`;

    //divRef.current.innerHTML = boldString; //mynos.toString();
    // searchRef.current.innerHTML = data
    //   .map((value, index) => {
    //     return index === 0 && <li key={index}>{value.content}</li>;
    //   })
    //   .toString();

    //parts = searchdata.split();

    divarr = contentRef.current; //.innerHTML; ///toLowerCase().split(" ")

    return () => {
      clearTimeout(timerid);
    };
  }, [characters, letterstring, mycurrentid, mytimer, newtext, boldString]); // Empty dependency array means this effect runs once after the initial render

  {
    useEffect(() => {
      newsearchdata = data.filter(
        (value) =>
          searchdata.length > 0 &&
          value.content.toLowerCase().includes(inputRefsearch.current.value)
      );
    }, [searchdata]);
  }

  useEffect(() => {
    console.log(contentRef.current);
    newRef = divRef.current;

    dataSearcher = dataSearch.filter((value, index) => {
      value.content.toLowerCase().includes(searchdata) &&
        setsearchindex(value.id);

      // searchdata.length >= 0 &&
      //   value.content.toLowerCase().includes(inputRefsearch.current.value);
    });

    document.querySelector(".divdata").innerHTML =
      dataSearch[searchindex].content; //searchindex;

    //return () => {};
  }, [searchindex, searchdata]);

  const playcomment = (e) => {
    letterstring = "";
    counter = -1;
    setCharacters("");
    //setmycurrentid(e.target.value);
    console.log(mycurrentid);
  };

  const replaycomment = () => {
    letterstring = "";
    counter = -1;
    setCharacters("");
    setmycurrentid(mycurrentid);
  };

  //const cont = contentRef.current.innerHTML; //document.getElementById("container_c");

  return (
    <div>
      {toggle && <span>Hello</span>}
      <fieldset className="range_cont">
        <input
          className="myrange"
          ref={rangeRef}
          type="range"
          min={0}
          max={data.length - 1}
          onChange={(e) => {
            setmycurrentid(Number(e.target.value));
            playcomment();
          }}
        />
        <span className="lessons">
          {mycurrentid === 0 ? "Introduction" : `Lesson ${mycurrentid}`}
        </span>
      </fieldset>
      <textarea
        className="refinput"
        cols={20}
        rows={25}
        type="text"
        ref={myref}
        value={characters}
      />
      <fieldset className="btns_range">
        <button
          onClick={() => {
            settimer(75);
            setTimeout(timing, mytimer);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearTimeout(timerid);
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            replaycomment();
          }}
        >
          Replay
        </button>
        <button
          onClick={() => {
            setmycurrentid(mycurrentid <= 1 ? 0 : mycurrentid - 1);
            playcomment();
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            setmycurrentid(
              mycurrentid >= data.length - 1 ? data.length - 1 : mycurrentid + 1
            );
            playcomment();
          }}
        >
          {">>"}
        </button>
      </fieldset>

      <caption>QUICK SEARCH</caption>
      <input
        ref={inputRefsearch}
        className="keysearch"
        type="text"
        onChange={(e) => setsearchdata(e.target.value)}
      />
      <div className="search_display" ref={searchRef}>
        {newsearchdata.map((value, index) => {
          newparts = value.content.toLowerCase().split(" ");

          return (
            <ul className="searchlist" key={index} onClick={(e) => {}}>
              <li
                className="li_search"
                id={value.id}
                key={index}
                onClick={(e) => {
                  setselectedid(e.target.id);
                  value.id === Number(selectedid)
                    ? setcontentVisibility(!contentVisibility)
                    : setcontentVisibility(false);
                }}
              >
                {value.title}
              </li>

              {value.id === Number(selectedid) &&
              contentVisibility === false ? (
                <div
                  contentEditable={true}
                  ref={contentRef}
                  className="content"
                >
                  {
                    (searcharr = value.content
                      .padStart(1, " ")
                      .split(" ")
                      .map((letter, index) => {
                        mystring = " " + letter;
                        return letter.toLowerCase().includes(searchdata) ? (
                          <span className="boldens">{" " + letter}</span>
                        ) : (
                          <i>{mystring}</i>
                        );
                      }))
                  }

                  {console.log(boldString)}
                </div>
              ) : null}
            </ul>
          );
        })}
      </div>

      <div className="divdata" ref={divRef}>
        Hi there
        {/* <strong>{searcharr}</strong> */}
      </div>
    </div>
  );
});

export default React.memo(FRInput);

// ,
//                           ((boldRegExp = new RegExp(`${letter}`, "i")),
//                           (upcase = letter.toUpperCase()),
//                           // <strong className="markedin">
//                           (boldString = (
//                             <div>
//                               {value.content.replace(boldRegExp, upcase)}
//                             </div>
//                           )))
