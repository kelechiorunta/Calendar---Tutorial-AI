import React, { useEffect } from "react";
import axios from "axios";

const Myapi = () => {
  useEffect(() => {
    axios
      .get("./api.json") //("https://jsonplaceholder.typicode.com/posts") //("./api.json")
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default Myapi;
