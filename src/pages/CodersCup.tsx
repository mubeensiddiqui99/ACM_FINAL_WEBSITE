import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import CodersCupMain from "../Components/CodersCup/CodersCupMain";
import CodersCupHouseCard from "../Components/CodersCup/CodersCupHouseCard";
import CodersCupSponsor from "../Components/CodersCup/CodersCupSponsor";

function CodersCup() {
  return (
    <>
      <CodersCupMain />
      <CodersCupHouseCard />
      <CodersCupSponsor />
    </>
  );
}
export default CodersCup;
