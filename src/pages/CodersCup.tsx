import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import CodersCupMain from "../Components/CodersCupMain";
import CodersCupHouseCard from "../Components/CodersCupHouseCard";
import CodersCupSponsor from "../Components/CodersCupSponsor";

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
