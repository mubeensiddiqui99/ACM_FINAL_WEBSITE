import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Footer from "./MyComponents/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "tachyons/css/tachyons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Events from "./pages/Events";
import CodersCup from "./pages/CodersCup";

function App() {
  return (
    <div className="aapp">
      <Navbar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/coderscup" component={CodersCup} />
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
export default App;
