import React from "react";
import "./members.css";
interface Props {
  name: string;
  role: string;
  photo: string;
}

export const member_list: React.FC<Props> = ({ name, role, photo }) => {
  return (
    <div className="grow dib f3-ns no-underline black-90 pa3">
      <div className="card12 text-center mask tc shadow-3 ">
        <div className="overflow">
          <img
            src={photo}
            alt=""
            className="imgmem card-img-top br-100 h5 w5 dib ba b--black-05 pa2"
          />
          <hr
            className="line mw3 bb bw1 b--black-15"
            style={{ marginLeft: "7rem" }}
          />
        </div>
        <div className="card-body12 text-dark">
          <h4 className="card-title12">{name}</h4>
          <p className="card-text12">{role}</p>
        </div>
      </div>
    </div>
  );
};
