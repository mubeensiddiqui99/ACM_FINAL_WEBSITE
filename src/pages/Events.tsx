import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { acmevents as ACMEvents } from "../Components/ACMEvents";
import "bootstrap/dist/css/bootstrap.min.css";

function Events() {
  return (
    <>
      <ACMEvents />
    </>
  );
}
export default Events;
