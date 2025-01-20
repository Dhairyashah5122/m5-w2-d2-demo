import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
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
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to="/topics/cats">Cats</Link>
          </li>
          <li>
            <Link to="/topics/dogs">Dogs</Link>
          </li>
        </ul>
      </div>
    );
  }

  function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic: {topicId}</h3>;
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
          <Route path="/topics" element={<Topics />} />
          <Route path="/topics/:topicId" element={<Topic />} />
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
