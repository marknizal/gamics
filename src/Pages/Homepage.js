import React from "react";
import Hero from "../Sections/Hero/Hero";
import Teams from "../Sections/Teams/Teams";
import RecentRelease from "../Sections/RecentRelease/RecentRelease";
import Video from "../Sections/Video/Video";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Teams />
      <RecentRelease />
      <Video />
    </>
  );
};

export default Homepage;
