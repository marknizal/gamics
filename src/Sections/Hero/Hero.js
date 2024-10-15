import React from "react";
import Container from "../../Components/Container/Container";
import Effects from "../../Components/Effects/Effects";
import { Wrapper, HeroContent, LeftSide, Button, HeroImg } from "./Hero.styled";
import heroImage from "../../Assets/hero.png";

const Hero = () => {
  const HeroText = {
    title: "World Gaming",
    description:
      "Find technology or people for digital projects in public sector and Find an individual specialist developer researcher.",
  };

  return (
    <Wrapper>
      <Effects />
      <Container>
        <HeroContent>
          <LeftSide>
            <h2>{HeroText.title}</h2>
            <h1>
              Create <span>Manage</span> Matches
            </h1>
            <p>{HeroText.description}</p>
            <Button>Read more</Button>
          </LeftSide>
          <HeroImg>
            <img src={heroImage} alt="Hero" />
          </HeroImg>
        </HeroContent>
      </Container>
    </Wrapper>
  );
};

export default Hero;
