import React, { useState, useEffect } from "react";

import axios from 'axios'

export default function FetchingMustiplePost() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }).catch((err) => {
    console.log(err);
  });

  return (
    <div>
      <ul>{posts.map(()=>
      <li>{posts.title}</li>
      )}</ul>
    </div>
  );
}
