// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery";
// import "popper.js";
// import "bootstrap/dist/js/bootstrap";
import { routes as LandingRoutes } from "../src/modules/Landing/routes";
import { useRoutes } from "react-router-dom";

function App() {
  let route = useRoutes(LandingRoutes);
  return route;
}

export default App;
