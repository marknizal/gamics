import React from "react";
import Container from "../../Components/Container/Container";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { Wrapper } from "./Video.styled";

const Video = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle title="Watch Live Match" isDark={true} />
        <iframe
          src="https://www.youtube.com/embed/L49LqOV-7v0?si=Oj9w6WXbjB6l9z4Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Container>
    </Wrapper>
  );
};

export default Video;
