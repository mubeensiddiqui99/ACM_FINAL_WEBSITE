import React from "react";
import events01 from "../images/event01.jpg";
import events02 from "../images/event02.jpg";
import coders1 from "../images/Coders-Cup1.jpg";
import "./eventsara.css";

interface Props {}

export const acmevents = (props: Props) => {
  return (
    <div className="container-event">
      <div className="CurrEvent">
        <h1 className="header12" style={{ textAlign: "center" }}>
          {" "}
          Our Events{" "}
        </h1>
        <img src={coders1} alt="" />
        <h2> The Coders Cup 2021</h2>
        <p>
          What else do we do? That’s a loaded question. If you hear about an
          event in FAST-NUCES centered around innovation, technology or
          entrepreneurship, we might have something to do with it.
        </p>
      </div>

      <h1 className="header" style={{ textAlign: "center" }}>
        {" "}
        Past Events{" "}
      </h1>

      <div className="row">
        <div className="column">
          <img src={events01} alt="" />
          <h3 className="eventTitle">The Developer's Day</h3>
        </div>

        <div className="column">
          <div className="eventDes">
            <p>
              {" "}
              Developer's Day is ACM NUCES's most propitious event with one of
              the finest job fairs. Apart from that It's also a platform for
              many young enthusiasts with various interesting competitions like
              code in the dark, speed programming, UI/UX design and so on. It's
              the ultimate opportunity for you to discover where your
              innovation, supervision and professionalism can take you.
            </p>
            <i className="fa fa-hand-o-right" aria-hidden="true">
              <button className="button-solid">
                {" "}
                <a href="https://www.facebook.com/DevelopersDay">
                  Know More
                </a>{" "}
              </button>{" "}
            </i>
          </div>
        </div>

        <div className="column">
          <img src={events02} alt="" />
          <h3 className="eventTitle">The Coders Cup</h3>
        </div>

        <div className="column">
          <div className="eventDes">
            <p>
              {" "}
              The coders cup is one of NUCES's biggest competition. It is a
              coding competition designed to polish, amplify and test your
              problem solving and coding skills on a competition level. So
              whether you just want to flex your skills or want a cahnce to
              mentor yourself, ACM NUCES has you covered in the Coder's Cup.
            </p>
            <i className="fa fa-hand-o-right" aria-hidden="true">
              <button className="button-solid">
                {" "}
                <a href="https://www.facebook.com/CodersCup">Know More</a>{" "}
              </button>{" "}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};
