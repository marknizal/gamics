import React from "react";
import Container from "../../Components/Container/Container";
import Image1 from "../../Assets/eagle.png";
import Image2 from "../../Assets/fox.png";
import {
  Wrapper,
  Content,
  TextBackground,
  Teams,
  Logo,
  Center,
  Banner,
} from "./Versus.styled";

const Versus = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TextBackground>LIVE</TextBackground>
          <Teams>
            <Logo>
              <img src={Image1} alt="eagle" />
            </Logo>
            <Center>
              <Banner>
                <p>Upcoming Live Matches</p>
              </Banner>
              <h1>11:30</h1>
            </Center>
            <Logo>
              <img src={Image2} alt="fox" />
            </Logo>
          </Teams>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Versus;
