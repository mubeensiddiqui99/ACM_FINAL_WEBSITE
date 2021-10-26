import React from "react";
import "./CodersCupMain.css";
import acmImg from "../images/acm.svg";

const CodersCupMain = () => {
  const redirect = () => {
    window.location.href = "https://forms.gle/BGhNXCNDhFgCteuy7";
  };
  return (
    <>
      <div>
        <img src={acmImg} alt="ACM LOGO" className="ImgStyle" />
        <h1 className="coderscup">THE CODER'S</h1>
        <br />
        <h1 className="coderscup1">CUP</h1>

        <div className="textformat">
          <br />
          <br />
          <p className="pstyle">
            The coders' cup is one of NUCES-FAST's biggest coding competition.
            It's a coding competition designed to polish, amplify and test your
            problem solving and coding skills on a competitive level. So whether
            you just want to flex your skills or want a chance to mentor
            yourself, ACM NUCES has you covered in the coders' cup.
          </p>

          <br />
          <br />

          <button
            type="button"
            className="btn  rounded-pill button1"
            onClick={redirect}
          >
            Register Now!
          </button>
        </div>
      </div>
      <div>
        <h1 className="style1">THE CODERS CUP HOUSE 2021</h1>
      </div>
    </>
  );
};

export default CodersCupMain;
