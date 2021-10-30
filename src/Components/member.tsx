import React from "react";
import { member_list as ML } from "./member_list";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "./mem_data.json";
import data2 from "./mem_data2.json";
import data3 from "./mem_data3.json";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const member: React.FC = () => {
  return (
    <div>
      <div>
        <h2 className="exec">Executive Committee</h2>
        <Carousel responsive={responsive}>
          {data.map((post) => {
            return (
              <ML
                key={post.id}
                name={post.name}
                role={post.role}
                photo={post.mem_image}
              />
            );
          })}
        </Carousel>
      </div>
      <div>
        <br />
        <br />
        <h2 className="exec">Extended Executive Committee</h2>
        <Carousel responsive={responsive}>
          {data2.map((post) => {
            return (
              <ML
                key={post.id}
                name={post.name}
                role={post.role}
                photo={post.mem_image}
              />
            );
          })}
        </Carousel>
      </div>
      <div>
        <br />
        <br />
        <h2 className="exec">Technical Team</h2>
        <Carousel responsive={responsive}>
          {data3.map((post) => {
            return (
              <ML
                key={post.id}
                name={post.name}
                role={post.role}
                photo={post.mem_image}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
