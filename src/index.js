import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { UserProvider } from "./providers/UsersProvider";
import { PostProvider } from "./providers/PostsProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <PostProvider>
          <App />
        </PostProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
