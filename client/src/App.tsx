import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import { NavbarUser } from "./components/Navbar/index";
import { Home } from "./components/Home/Home";
import { UpdateUser } from "./components/UpdateUser/UpdateUser";
import { Create } from "./components/CreateUser/CreateUser";
function App() {
  return (
    <div className="App">
      <Fragment>
        <Route exact path={"/"}>
          <NavbarUser />
          <Home />
        </Route>
        <Route exact path={"/create"}>
          <Create />
        </Route>
      </Fragment>
    </div>
  );
}

export { App };
