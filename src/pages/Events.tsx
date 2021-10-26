import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { acmevents as AE } from "../MyComponents/acmevents";
import "bootstrap/dist/css/bootstrap.min.css";

function Events() {
  return (
    <>
      <AE />
    </>
  );
}
export default Events;
