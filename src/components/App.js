import React from "react";
import { Switch, Route } from "react-router-dom";
import "../sass/App.scss";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import UsersPage from "./UsersPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/">
          <UsersPage />
        </ProtectedRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <div>
            <h1>404 - Not Found</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
