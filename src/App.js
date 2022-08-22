/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/features/postSlice";

function App() {
  // const {posts, loading} = useSelector((state) => state.post);
  const post = useSelector((state) => state.post)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // function getPosts() {
  //   const response = axios
  //     .get("https://covidnigeria.herokuapp.com/api")
  //     // .then((response) => response.json());
  //     console.log(response);
  // }
  
  

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  
  console.log(post);
  return (
    <div className="App">
      <div>Single Page React App Task</div>
      {post.loading && <div>Loading...</div>}
      {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
      {!post.loading && post.posts.length ? (
        <div>
        {
          post.posts.map(post => (
            <div key={post.data}>{post}</div>
          ))
        }
        </div>
      ) : null}
    </div>
  );
}

export default App;
