import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./data.json";

function App() {
  const [state, setState] = useState({ posts: [], show: true });

  useEffect(() => {
    setState((preState) => {
      return {
        ...preState,
        posts: posts,
      };
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="container postGrid">
        {state.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
