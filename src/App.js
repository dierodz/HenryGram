import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./data.json";

// class Flag extends React.Component {
//   componentWillUnmount() {
//     console.log("me fui");
//   }
//   render() {
//     return <h1>true</h1>;
//   }
// }

function Flag() {
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("me fui");
    };
  }, []);
  return <h1>true</h1>;
}

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { posts: [], show: true };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState({
//       ...this.state,
//       show: false,
//     });
//   }

//   componentDidMount() {
//     this.setState({
//       ...this.state,
//       posts: posts,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Header />
//         {this.state.show ? (
//           <Flag />
//         ) : (
//           <section>
//             <div>1</div>
//             <span>1</span>
//           </section>
//         )}
//         <button onClick={this.handleClick}>hide</button>
//         <main className="container postGrid">
//           {this.state.posts.map((post) => (
//             <Post onClick={this.handleClick} key={post.id} data={post} />
//           ))}
//         </main>
//       </div>
//     );
//   }
// }

function App() {
  const [state, setState] = useState({ posts: [], show: true });

  function handleClick(e) {
    e.preventDefault();
    setState({
      ...state,
      show: false,
    });
  }

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
      {state.show ? (
        <Flag />
      ) : (
        <section>
          <div>1</div>
          <span>1</span>
        </section>
      )}
      <button onClick={handleClick}>hide</button>
      <main className="container postGrid">
        {state.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    </div>
  );
}

export default App;
