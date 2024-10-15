import React from "react";
import Container from "../../Components/Container/Container";
import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

const Wrapper = styled.section`
  background-color: ${COLORS.dark};
  padding: 2rem 0;
  overflow: hidden;
`;

const move = `
  @keyframes move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const TeamList = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 200%;
  animation: move 30s linear infinite;
  ${move}

  ${BREAKPOINTS.MOBILE} {
    gap: 2rem;
    animation: move 10s linear infinite;
  }
`;

const Item = styled.div`
  flex: 0 0 auto;
  max-width: 8rem;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const teamImages = [
  "https://mysg-s6.mpl.mobilelegends.com/wp-content/uploads/2020/08/logo_dvt.png",
  "https://assets.b365api.com/images/wp/o/11a8da169cacf8edcfaf73c1432991e2.png",
  "https://res.cloudinary.com/rivalry/image/fetch/w_100,h_100,c_fit,q_90,dpr_2/f_auto/https://raw.githubusercontent.com/lootmarket/esport-team-logos/master/mobile-legends-bang-bang/deus-vult/deus-vult-logo.png",
  "https://mysg-s6.mpl.mobilelegends.com/wp-content/uploads/2020/03/teamsmg-w800.png",
  "https://upload.wikimedia.org/wikipedia/en/a/a4/RSG_PHILIPPINES_logo.png",
  "https://saudieleagues.com/storage/teams/8LwYzSBTrzLDnGAeZPAUUH702JQH6AhS5gE79XRv.png",
];

const Teams = () => {
  const createInfiniteImages = (images, repeatCount) => {
    const result = [];
    for (let i = 0; i < repeatCount; i++) {
      result.push(...images);
    }
    return result;
  };

  const images = createInfiniteImages(teamImages, 1000);

  return (
    <Wrapper>
      <Container>
        <TeamList>
          {images.map((image, index) => (
            <Item key={index}>
              <img src={image} alt={`Team ${index + 1}`} />
            </Item>
          ))}
        </TeamList>
      </Container>
    </Wrapper>
  );
};

export default Teams;
