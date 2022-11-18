import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarUser } from "./components/Navbar/index";
import { Home } from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <NavbarUser />
      <Home />
    </div>
  );
}

export { App };
