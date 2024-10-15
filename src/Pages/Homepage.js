import React from "react";
import Effects from "../Components/Effects/Effects";
import Hero from "../Sections/Hero/Hero";
import Teams from "../Sections/Teams/Teams";
import RecentRelease from "../Sections/RecentRelease/RecentRelease";
import Video from "../Sections/Video/Video";
import Versus from "../Sections/Versus/Versus";

const Homepage = () => {
  return (
    <>
      <Effects />
      <Hero />
      <Teams />
      <RecentRelease />
      <Video />
      <Versus />
    </>
  );
};

export default Homepage;
