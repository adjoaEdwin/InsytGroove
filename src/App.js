import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";
import PostPage from "./components/PostPage";
import Authentication from "./components/Authentication";

function App() {
  return (
    <div className="container p-2">
      <Link to="/">
        <h1>InsytGroove</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={Authentication} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/:userId/posts" component={Posts} />
        <Route exact path="/users/:userId/posts/:postId" component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
