import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext, ChannelContext } from "./App";
import Calendar from "./Calendar";

function Datafetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);
  const user_context = useContext(UserContext);
  const channel_context = useContext(ChannelContext);

  function handleClick() {
    setIdButton(id);
  }
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`) //this get request by axiom dependency returns a Promise that resolves the res(response) with then
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idButton]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Data</button>
      <div>{posts.title}</div>
      {/* <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul> */}
      <div>
        {user_context} - {channel_context}
        <Calendar />
        {/* <UserContext.Consumer>
          {(user) => {
            return <div>{user}</div>;
          }}
        </UserContext.Consumer> */}
      </div>
    </div>
  );
}

export default React.memo(Datafetching);
