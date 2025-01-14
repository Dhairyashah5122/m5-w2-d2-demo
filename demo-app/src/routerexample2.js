import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
} from "react-router-dom";

function App() {
  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Topics() {
    let match = useMatch("/topics/*");
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.pathname}/cats`}>Cats</Link>
          </li>
          <li>
            <Link to={`${match.pathname}/dogs`}>Dogs</Link>
          </li>
        </ul>
      </div>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />}>
            <Route path=":topicId" element={<Topic />} />
          </Route>
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
