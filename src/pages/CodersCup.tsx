import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CodersCupMain from '../MyComponents/CodersCupMain';
import CodersCupHouseCard from '../MyComponents/CodersCupHouseCard';
import CodersCupSponsor from '../MyComponents/CodersCupSponsor';

function CodersCup ()
{
  return(
    <>
    <CodersCupMain />
    <CodersCupHouseCard />
    <CodersCupSponsor />
    </>
  )
}
export default CodersCup;
