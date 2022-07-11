import React from 'react';
import CreatorProfile from 'containers/Home/CreatorProfile';
import Events from 'containers/Home/Events';
import { CREATOR_PROFILE, FRESH_CUT_EVENTS } from 'dummy-data';

const Home = () => {
  return (
    <>
      <CreatorProfile profile={CREATOR_PROFILE} />
      <Events events={FRESH_CUT_EVENTS} />
    </>
  )
};

export default Home;